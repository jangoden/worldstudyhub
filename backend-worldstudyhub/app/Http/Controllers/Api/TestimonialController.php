<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Testimonial;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class TestimonialController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $testimonials = Testimonial::all();
        return response()->json($testimonials);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'quote' => 'required|string',
            'user_name' => 'required|string|max:255',
            'user_title' => 'required|string|max:255',
            'user_avatar_url' => 'nullable|url|max:255',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 400);
        }

        $testimonial = Testimonial::create($request->all());
        return response()->json($testimonial, 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $testimonial = Testimonial::find($id);
        if (!$testimonial) {
            return response()->json(['message' => 'Testimonial not found'], 404);
        }
        return response()->json($testimonial);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $testimonial = Testimonial::find($id);
        if (!$testimonial) {
            return response()->json(['message' => 'Testimonial not found'], 404);
        }

        $validator = Validator::make($request->all(), [
            'quote' => 'sometimes|required|string',
            'user_name' => 'sometimes|required|string|max:255',
            'user_title' => 'sometimes|required|string|max:255',
            'user_avatar_url' => 'nullable|url|max:255',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 400);
        }

        $testimonial->update($request->all());
        return response()->json($testimonial);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $testimonial = Testimonial::find($id);
        if (!$testimonial) {
            return response()->json(['message' => 'Testimonial not found'], 404);
        }

        $testimonial->delete();
        return response()->json(['message' => 'Testimonial deleted successfully']);
    }
}
