<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens; // use La     ravel\Sanctum\HasApiTokens; Laravel\Sanctum\HasApiTokens;al: if using Sanctum

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    protected $fillable = [
        'name',
        'email',
        'password',
        'role',
        'has_voted',
    ];

    protected $hidden = [
        'password',
        'remember_token',
    ];

    protected $casts = [
        'email_verified_at' => 'datetime',
        'has_voted' => 'boolean',
    ];

    // Relationships
    public function vote()
    {
        return $this->hasOne(votes::class);
    }

    public function scopeVoters($query)
    {
        return $query->where('role', 'voter');
    }

    public function scopeAdmins($query)
    {
        return $query->where('role', 'admin');
    }
}
