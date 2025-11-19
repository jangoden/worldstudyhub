<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Course extends Model
{
    protected $fillable = [
        'title',
        'slug',
        'description',
        'image_url',
        'price',
        'difficulty',
        'language',
        'duration',
        'category_id',
        'instructor_id',
        'tags',
        'prerequisites',
        'effort',
        'published_at',
    ];

    protected $casts = [
        'tags' => 'array',
        'prerequisites' => 'array',
        'published_at' => 'datetime',
    ];

    /**
     * Get the category that owns the Course.
     */
    public function category(): BelongsTo
    {
        return $this->belongsTo(Category::class);
    }

    /**
     * Get the instructor that owns the Course.
     */
    public function instructor(): BelongsTo
    {
        return $this->belongsTo(Instructor::class);
    }

    /**
     * Get the lessons for the course.
     */
    public function lessons(): HasMany
    {
        return $this->hasMany(Lesson::class);
    }

    /**
     * Get the reviews for the course.
     */
    public function reviews(): HasMany
    {
        return $this->hasMany(Review::class);
    }

    /**
     * Get the enrollments for the course.
     */
    public function enrollments(): HasMany
    {
        return $this->hasMany(Enrollment::class);
    }
}
