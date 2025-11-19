<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Lesson extends Model
{
    protected $fillable = [
        'title',
        'duration',
        'content',
        'course_id',
    ];

    /**
     * Get the course that owns the Lesson.
     */
    public function course(): BelongsTo
    {
        return $this->belongsTo(Course::class);
    }
}
