<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class LoginActivity extends Model
{
    protected $guarded = [];

    protected $casts = [
        'data' => 'array'
    ];
}
