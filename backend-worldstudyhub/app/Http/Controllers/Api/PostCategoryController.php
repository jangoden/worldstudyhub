<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\PostCategory;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class PostCategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $postCategories = PostCategory::all();
        return response()->json($postCategories);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255|unique:post_categories',
            'slug' => 'required|string|max:255|unique:post_categories',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 400);
        }

        $postCategory = PostCategory::create($request->all());
        return response()->json($postCategory, 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $postCategory = PostCategory::find($id);
        if (!$postCategory) {
            return response()->json(['message' => 'Post Category not found'], 404);
        }
        return response()->json($postCategory);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $postCategory = PostCategory::find($id);
        if (!$postCategory) {
            return response()->json(['message' => 'Post Category not found'], 404);
        }

        $validator = Validator::make($request->all(), [
            'name' => 'sometimes|required|string|max:255|unique:post_categories,name,' . $id,
            'slug' => 'sometimes|required|string|max:255|unique:post_categories,slug,' . $id,
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 400);
        }

        $postCategory->update($request->all());
        return response()->json($postCategory);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $postCategory = PostCategory::find($id);
        if (!$postCategory) {
            return response()->json(['message' => 'Post Category not found'], 404);
        }

        $postCategory->delete();
        return response()->json(['message' => 'Post Category deleted successfully']);
    }
}
