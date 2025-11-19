<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\BlogPostResource;
use App\Models\BlogPost;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;

class BlogPostController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $query = BlogPost::with(['user', 'postCategory']);

        // Handle search query
        $query->when($request->has('q'), function ($q) use ($request) {
            $searchTerm = $request->input('q');
            return $q->where('title', 'like', "%{$searchTerm}%")
                     ->orWhere('content', 'like', "%{$searchTerm}%");
        });

        // Handle category filtering
        $query->when($request->has('category'), function ($q) use ($request) {
            $categorySlug = $request->input('category');
            return $q->whereHas('postCategory', function ($subQuery) use ($categorySlug) {
                $subQuery->where('slug', $categorySlug);
            });
        });

        $blogPosts = $query->latest('published_at')->paginate(6);
        
        try {
            return BlogPostResource::collection($blogPosts);
        } catch (\Throwable $e) {
            return response()->json([
                'message' => 'Error transforming resources: ' . $e->getMessage(),
                'file' => $e->getFile(),
                'line' => $e->getLine(),
            ], 500);
        }
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'title' => 'required|string|max:255|unique:blog_posts',
            'summary' => 'required|string',
            'content' => 'required|string',
            'cover_image_url' => 'nullable|url|max:255',
            'published_at' => 'nullable|date',
            'user_id' => 'required|exists:users,id',
            'post_category_id' => 'nullable|exists:post_categories,id',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 400);
        }

        $blogPost = BlogPost::create([
            'title' => $request->title,
            'slug' => Str::slug($request->title),
            'summary' => $request->summary,
            'content' => $request->content,
            'cover_image_url' => $request->cover_image_url,
            'published_at' => $request->published_at,
            'user_id' => $request->user_id,
            'post_category_id' => $request->post_category_id,
        ]);

        return response()->json($blogPost->load(['user', 'postCategory']), 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $slug)
    {
        $blogPost = BlogPost::with(['user', 'postCategory'])->where('slug', $slug)->firstOrFail();
        return new BlogPostResource($blogPost);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $slug)
    {
        $blogPost = BlogPost::where('slug', $slug)->firstOrFail();

        $validator = Validator::make($request->all(), [
            'title' => 'sometimes|required|string|max:255|unique:blog_posts,title,' . $blogPost->id,
            'summary' => 'sometimes|required|string',
            'content' => 'sometimes|required|string',
            'cover_image_url' => 'nullable|url|max:255',
            'published_at' => 'nullable|date',
            'user_id' => 'sometimes|required|exists:users,id',
            'post_category_id' => 'nullable|exists:post_categories,id',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 400);
        }

        $data = $request->all();
        if ($request->has('title')) {
            $data['slug'] = Str::slug($request->title);
        }

        $blogPost->update($data);
        return new BlogPostResource($blogPost->load(['user', 'postCategory']));
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $slug)
    {
        $blogPost = BlogPost::where('slug', $slug)->firstOrFail();
        $blogPost->delete();
        return response()->json(['message' => 'Blog Post deleted successfully']);
    }
}
