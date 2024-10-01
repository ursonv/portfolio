<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Race>
 */
class RaceFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            "title" => fake()->company(),
            "distance" => fake()->numberBetween(0, 150),
            "location" => fake()->company(),
            "slug" => fake()->unique()->slug(2),
            "img" => fake()->sentences(1,true),
        ];
    }
}
