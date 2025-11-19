<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Review extends Model
{
    protected $fillable = [
        'rating',
        'comment',
        'course_id',
        'user_id',
    ];

    /**
     * Get the course that owns the Review.
     */
    public function course(): BelongsTo
    {
        return $this->belongsTo(Course::class);
    }

    /**
     * Get the user that owns the Review.
     */
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }
}
