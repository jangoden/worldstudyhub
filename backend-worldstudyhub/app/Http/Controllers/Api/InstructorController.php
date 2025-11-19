<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Instructor;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class InstructorController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $instructors = Instructor::all();
        return response()->json($instructors);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255',
            'title' => 'required|string|max:255',
            'bio' => 'required|string',
            'avatar_url' => 'nullable|url|max:255',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 400);
        }

        $instructor = Instructor::create($request->all());
        return response()->json($instructor, 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $instructor = Instructor::find($id);
        if (!$instructor) {
            return response()->json(['message' => 'Instructor not found'], 404);
        }
        return response()->json($instructor);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $instructor = Instructor::find($id);
        if (!$instructor) {
            return response()->json(['message' => 'Instructor not found'], 404);
        }

        $validator = Validator::make($request->all(), [
            'name' => 'sometimes|required|string|max:255',
            'title' => 'sometimes|required|string|max:255',
            'bio' => 'sometimes|required|string',
            'avatar_url' => 'nullable|url|max:255',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 400);
        }

        $instructor->update($request->all());
        return response()->json($instructor);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $instructor = Instructor::find($id);
        if (!$instructor) {
            return response()->json(['message' => 'Instructor not found'], 404);
        }

        $instructor->delete();
        return response()->json(['message' => 'Instructor deleted successfully']);
    }
}
