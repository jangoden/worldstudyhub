<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class UserResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        if (!$this->resource) {
            return [];
        }

        return [
            'name' => $this->name,
            'image' => $this->image ?? 'https://via.placeholder.com/100x100.png?text=User',
            'designation' => 'Author', // Placeholder value
        ];
    }
}