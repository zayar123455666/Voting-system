<?php

namespace Database\Factories;

use App\Models\candidates;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\votes>
 */
class VotesFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        
              $userId = User::inRandomOrder()->value('id');

        // Random male candidate
        $kingCandidateId = candidates::where('gender', 'male')->inRandomOrder()->value('id');

        // Random female candidate
        $queenCandidateId = candidates::where('gender', 'female')->inRandomOrder()->value('id');

        return [
            'user_id' => $userId,
            'king_candidate_id' => $kingCandidateId,
            'queen_candidate_id' => $queenCandidateId,
        ];
        
    }
}
