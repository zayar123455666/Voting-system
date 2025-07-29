<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class votes extends Model
{
    /** @use HasFactory<\Database\Factories\VotesFactory> */
    use HasFactory;

    protected $fillable = [
        'user_id',
        'king_candidate_id',
        'queen_candidate_id',
    ];

    // Relationships
    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function kingCandidate()
    {
        return $this->belongsTo(candidates::class, 'king_candidate_id');
    }

    public function queenCandidate()
    {
        return $this->belongsTo(candidates::class, 'queen_candidate_id');
    }
}
