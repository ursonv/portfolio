<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Race extends Model
{
    use HasFactory;

    public function predictions() {
        return $this->hasMany(Prediction::class);
    }

    public function results() {
        return $this->hasMany(Result::class);
    }
}
