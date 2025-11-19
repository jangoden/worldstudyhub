<?php

use App\Http\Controllers\Api\BlogPostController;
use App\Http\Controllers\Api\CategoryController;
use App\Http\Controllers\Api\CourseController;
use App\Http\Controllers\Api\InstructorController;
use App\Http\Controllers\Api\PostCategoryController;
use App\Http\Controllers\Api\TestimonialController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

// Custom API routes will go here

Route::apiResource('categories', CategoryController::class);
Route::apiResource('instructors', InstructorController::class);
Route::apiResource('courses', CourseController::class);
Route::apiResource('blog-posts', BlogPostController::class);
Route::apiResource('testimonials', TestimonialController::class);
Route::apiResource('post-categories', PostCategoryController::class);
