<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Prediction extends Model
{
    use HasFactory;

    protected $fillable = [
        'cyclist_id', 
        'race_id',
        'comment',
        'position',
        'user_id',
    ];

    protected static function boot()
    {
        parent::boot();

        // Delete all reviews associated with the prediction
        static::deleting(function ($prediction) {
            $prediction->reviews()->delete();
        });
    }

    public function race()
    {
        return $this->belongsTo(Race::class);
    }

    public function cyclist()
    {
        return $this->belongsTo(Cyclist::class);
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function reviews()
    {
        return $this->hasMany(Review::class);
    }
}
