<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Course;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;

class CourseController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $courses = Course::with(['category', 'instructor'])->get();
        return response()->json($courses);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'title' => 'required|string|max:255|unique:courses',
            'description' => 'required|string',
            'image_url' => 'nullable|url|max:255',
            'price' => 'required|numeric|min:0',
            'difficulty' => 'required|in:Beginner,Intermediate,Advanced',
            'language' => 'required|in:English,Spanish,French,German',
            'duration' => 'required|string|max:255',
            'category_id' => 'required|exists:categories,id',
            'instructor_id' => 'required|exists:instructors,id',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 400);
        }

        $course = Course::create([
            'title' => $request->title,
            'slug' => Str::slug($request->title),
            'description' => $request->description,
            'image_url' => $request->image_url,
            'price' => $request->price,
            'difficulty' => $request->difficulty,
            'language' => $request->language,
            'duration' => $request->duration,
            'category_id' => $request->category_id,
            'instructor_id' => $request->instructor_id,
        ]);

        return response()->json($course->load(['category', 'instructor']), 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $course = Course::with(['category', 'instructor', 'lessons', 'reviews.user'])->find($id);
        if (!$course) {
            return response()->json(['message' => 'Course not found'], 404);
        }
        return response()->json($course);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $course = Course::find($id);
        if (!$course) {
            return response()->json(['message' => 'Course not found'], 404);
        }

        $validator = Validator::make($request->all(), [
            'title' => 'sometimes|required|string|max:255|unique:courses,title,' . $id,
            'description' => 'sometimes|required|string',
            'image_url' => 'nullable|url|max:255',
            'price' => 'sometimes|required|numeric|min:0',
            'difficulty' => 'sometimes|required|in:Beginner,Intermediate,Advanced',
            'language' => 'sometimes|required|in:English,Spanish,French,German',
            'duration' => 'sometimes|required|string|max:255',
            'category_id' => 'sometimes|required|exists:categories,id',
            'instructor_id' => 'sometimes|required|exists:instructors,id',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 400);
        }

        $data = $request->all();
        if ($request->has('title')) {
            $data['slug'] = Str::slug($request->title);
        }

        $course->update($data);
        return response()->json($course->load(['category', 'instructor']));
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $course = Course::find($id);
        if (!$course) {
            return response()->json(['message' => 'Course not found'], 404);
        }

        $course->delete();
        return response()->json(['message' => 'Course deleted successfully']);
    }
}
