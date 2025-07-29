<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules\Password;
use Illuminate\Validation\ValidationException;

class SessionController extends Controller
{
   public function signup(Request $request)
{
    $attributes = $request->validate([
        'name' => ['required'],
        'email' => [
            'required',
            'email',
            'regex:/^[a-zA-Z0-9._%+-]+@ucstgi\.edu\.mm$/',
            'unique:users,email', // ✅ ensure email is unique
        ],
        'password' => [
            'required',
            'confirmed',
            'regex:/^[A-Z][a-zA-Z]{2}[0-9]{5}$/', // ✅ password pattern: Zay88899
        ],
    ], [
        'email.regex' => 'Email must end with @ucstgi.edu.mm.',
        'email.unique' => 'This email is already registered.',
        'password.regex' => 'Password must start with a capital letter, followed by two letters and five digits (e.g., Zay88899).',
    ]);

    $user = User::create([
        'name' => $attributes['name'],
        'email' => $attributes['email'],
        'password' => Hash::make($attributes['password']),
    ]);

    Auth::login($user);

    return redirect('/')->with('success', 'Sign Up successfully!');
}

  public function login(Request $request)
{
    $credentials = $request->validate([
        'email' => [
            'required',
            'email',
            'regex:/^[a-zA-Z0-9._%+-]+@ucstgi\.edu\.mm$/',
        ],
        'password' => ['required'],
    ], [
        'email.regex' => 'Email must end with @ucstgi.edu.mm.',
    ]);

    $user = User::where('email', $credentials['email'])->first();

    if (!$user || !Hash::check($credentials['password'], $user->password)) {
        throw ValidationException::withMessages([
            'email' => 'The provided credentials do not match our records.',
        ]);
    }

    Auth::login($user);
    $request->session()->regenerate();

    return redirect('/')->with('success', 'Logged in successfully!');
}




    public function logout(){
         Auth::logout();
    return redirect('/')->with('success','Logout Successfully');
    }
}
