<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class BlogPost extends Model
{
    protected $fillable = [
        'title',
        'slug',
        'summary',
        'content',
        'cover_image_url',
        'published_at',
        'user_id',
        'post_category_id',
        'tags',
    ];

    protected $casts = [
        'published_at' => 'datetime',
        'tags' => 'array',
    ];

    /**
     * Interact with the cover_image_url attribute.
     */
    protected function coverImageUrl(): Attribute
    {
        return Attribute::make(
            get: fn (?string $value) => $value ? Storage::disk('public')->url($value) : null,
        );
    }

    /**
     * Get the user (author) that owns the BlogPost.
     */
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    /**
     * Get the post category that owns the BlogPost.
     */
    public function postCategory(): BelongsTo
    {
        return $this->belongsTo(PostCategory::class);
    }
}
