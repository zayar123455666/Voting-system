<?php

namespace App\Http\Controllers;

use App\Models\candidates;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CandidateController extends Controller
{
    /**
     * Display a listing of the resource.
     */
      
public function index()
{
    $candidates = candidates::all();

    return Inertia::render('admin/AllCandidates', [
        'candidates' => $candidates
    ]);
}

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

     public function add(){

        return Inertia::render('admin/AddCandidates');
   }


    /**
     * Store a newly created resource in storage.
     */
  public function store(Request $request)
{
    $validated = $request->validate([
        'name' => 'required|string|max:255',
        'gender' => 'required|in:male,female',
        'image' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048',
        'bio' => 'nullable|string',
    ]);

    if ($request->hasFile('image')) {
        // Determine gender folder
        $genderFolder = $validated['gender']; // 'male' or 'female'

        // Store in gender-specific folder: public/candidates/male or public/candidates/female
        $path = $request->file('image')->store("candidates/{$genderFolder}", 'public');

        $validated['image_path'] = $path;
    }

    \App\Models\candidates::create($validated); // make sure model name is correct

    return redirect()->back()->with('success', 'Candidate added!');
}


    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
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
