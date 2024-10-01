<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Cyclist>
 */
class CyclistFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            "team_id" => fake()->numberBetween(1,10),
            "slug" => fake()->unique()->slug(2),
            "name" => fake()->company(),
            "nationality" => fake()->company(),
            "description" => fake()->sentences(1,true),
            "img" => fake()->sentences(1,true),
        ];
    }
}
