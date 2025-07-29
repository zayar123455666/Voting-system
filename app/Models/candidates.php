<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class candidates extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'gender',
        'image_path',
        'bio',
    ];

    // Votes where this candidate was selected as King
    public function kingVotes()
    {
        return $this->hasMany(votes::class, 'king_candidate_id');
    }

    // Votes where this candidate was selected as Queen
    public function queenVotes()
    {
        return $this->hasMany(votes::class, 'queen_candidate_id');
    }

    // Helper method to get total votes (king + queen)
    public function totalVotesCount(): int
    {
        return $this->kingVotes()->count() + $this->queenVotes()->count();
    }
}
