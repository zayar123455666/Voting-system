<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Vote;
use App\Models\User;
use App\Models\Candidate;
use App\Models\candidates;
use App\Models\votes;

class VoteSeeder extends Seeder
{
    public function run(): void
    {
        $maleCandidates = candidates::where('gender', 'male')->pluck('id')->toArray();
        $femaleCandidates = candidates::where('gender', 'female')->pluck('id')->toArray();

        $voters = User::where('role', 'voter')->where('has_voted', false)->get();

        foreach ($voters as $voter) {
            $kingId = fake()->randomElement($maleCandidates);
            $queenId = fake()->randomElement($femaleCandidates);

            votes::create([
                'user_id' => $voter->id,
                'king_candidate_id' => $kingId,
                'queen_candidate_id' => $queenId,
            ]);

            $voter->update(['has_voted' => true]);
        }
    }
}
