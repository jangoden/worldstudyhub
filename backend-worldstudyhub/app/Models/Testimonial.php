<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Testimonial extends Model
{
    protected $fillable = [
        'quote',
        'user_name',
        'user_title',
        'user_avatar_url',
        'star',
    ];
}
