<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Prediction>
 */
class PredictionFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            "user_id" => 1,
            "race_id" => fake()->numberBetween(1,11),
            "cyclist_id" => fake()->numberBetween(1,16),
            "slug" => fake()->unique()->slug(2),
            "position" => fake()->numberBetween(0, 150),
            "comment" => fake()->paragraph(10),
        ];
    }
}
