<?php

namespace App\Http\Controllers;

use App\Models\candidates;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class VotingSystemController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function Home()
    {
        $candidates = candidates::count();

    $maleCount = candidates::where('gender', 'male')->count();
    $femaleCount = candidates::where('gender', 'female')->count();
    $userCount = User::count();

    return Inertia::render('Home', [
        'candidates' => $candidates,
        'maleCount' => $maleCount,
        'femaleCount' => $femaleCount,
        'userCount' => $userCount,
    ]);
    }

   

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

   // Make sure this import exists

public function vote()
{
    return Inertia::render('components/Vote', [
        'candidates' => candidates::where('gender', 'male')->get()
    ]);
}


    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(candidates $id)
    {
        return Inertia::render('components/Show', [  'candidate' => [
        'id' => $id->id,
        'name' => $id->name,
        'bio' => $id->bio,
    ]
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
