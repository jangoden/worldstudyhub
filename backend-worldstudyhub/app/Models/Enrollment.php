<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Enrollment extends Model
{
    protected $fillable = [
        'user_id',
        'course_id',
        'progress',
        'status',
        'enrolled_date',
    ];

    protected $casts = [
        'enrolled_date' => 'date',
    ];

    /**
     * Get the user that is enrolled.
     */
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    /**
     * Get the course for the enrollment.
     */
    public function course(): BelongsTo
    {
        return $this->belongsTo(Course::class);
    }
}