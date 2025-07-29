<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\User>
 */
class UserFactory extends Factory
{
    /**
     * The current password being used by the factory.
     */
    protected static ?string $password;

    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $name = $this->faker->unique()->userName(); // Use as prefix for email
        $email = $name . '@ucstgi.edu.mm';          // ✅ ends with @ucstgi.edu.mm

        // Generate a password like Zay88899 (1 uppercase + 2 lowercase + 5 digits)
        $prefix = strtoupper($this->faker->randomLetter()) .
                  strtolower($this->faker->randomLetter()) .
                  strtolower($this->faker->randomLetter());

        $number = $this->faker->randomNumber(5, true); // 5-digit number

        $formattedPassword = $prefix . $number;

        return [
            'name' => $this->faker->name(),
            'email' => $email,                          // ✅ ends with @ucstgi.edu.mm
            'email_verified_at' => now(),
            'password' => Hash::make($formattedPassword), // ✅ hashed password
            'remember_token' => Str::random(10),
            'role' => 'voter',
            'has_voted' => false,
        ];
    }

    /**
     * Admin state
     */
    public function admin(): static
    {
        return $this->state(fn () => ['role' => 'admin']);
    }

    /**
     * Unverified email state
     */
    public function unverified(): static
    {
        return $this->state(fn (array $attributes) => [
            'email_verified_at' => null,
        ]);
    }
}
