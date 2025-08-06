<?php

namespace App\Http\Controllers;

use App\Models\candidates;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class CandidateController extends Controller
{
    /**
     * Display a listing of the resource.
     */
      
public function index()
{
    $candidates = candidates::latest()->get();

    $maleCount = candidates::where('gender', 'male')->count();
    $femaleCount = candidates::where('gender', 'female')->count();
    $userCount = User::count();

    return Inertia::render('admin/AllCandidates', [
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

    return redirect()->route('admin.AllCandidates')->with('success', 'Candidate added!');
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
   
public function edit($id)
{
    $candidate = candidates::findOrFail($id);
    return Inertia::render('admin/EditCandidates', [
        'candidate' => $candidate
    ]);
}

    /**
     * Update the specified resource in storage.
     */
  
public function update(Request $request, $id)
{
    $request->validate([
        'name' => 'required|string|max:255',
        'gender' => 'required|in:male,female',
        'bio' => 'nullable|string',
        'image' => 'nullable|image|max:2048',
    ]);

    $candidate = candidates::findOrFail($id);
    $candidate->name = $request->name;
    $candidate->gender = $request->gender;
    $candidate->bio = $request->bio;

    if ($request->hasFile('image')) {
        if ($candidate->image_path) {
            Storage::delete('public/' . $candidate->image_path);
        }

        $path = $request->file('image')->store('candidates', 'public');
        $candidate->image_path = $path;
    }

    $candidate->save();

    return redirect()->route('admin.AllCandidates')->with('success', 'Candidate updated successfully!');
}

    /**
     * Remove the specified resource from storage.
     */
   public function destroy($id)
{
    $candidate = candidates::findOrFail($id);

    if ($candidate->image_path) {
        Storage::delete('public/' . $candidate->image_path);
    }

    $candidate->delete();

    return back()->with('success', 'Candidate deleted successfully.');
}

}
