<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\candidates>
 */
class CandidatesFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $gender = $this->faker->randomElement(['male', 'female']);

    return [
        'name' => $gender === 'male'
            ? $this->faker->name('male')
            : $this->faker->name('female'),

        'gender' => $gender,

        // You can leave image_path null or use a placeholder URL
        'image_path' => null, // or: $this->faker->imageUrl(200, 200, 'people'),

        'bio' => $this->faker->sentence(10),
    ];
    }
}
