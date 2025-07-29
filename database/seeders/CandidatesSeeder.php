<?php

namespace Database\Seeders;

use App\Models\candidates;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class CandidatesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Create 5 male candidates
        candidates::factory()->count(5)->create(['gender' => 'male']);

        // Create 5 female candidates
        candidates::factory()->count(5)->create(['gender' => 'female']);
    }
}
