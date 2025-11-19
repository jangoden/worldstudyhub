<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class BlogPostResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'title' => $this->title,
            'slug' => $this->slug,
            'paragraph' => $this->summary ?? '',
            'image' => $this->cover_image_url ?? 'https://via.placeholder.com/500x300.png?text=WorldStudyHub',
            'tags' => $this->tags,
            'publishDate' => $this->when($this->published_at, fn() => $this->published_at->format('Y-m-d')),
            'author' => new UserResource($this->whenLoaded('user')),
        ];
    }
}