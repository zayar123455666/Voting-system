<?php

use App\Http\Controllers\PostController;
use App\Http\Controllers\SessionController;
use App\Http\Controllers\VotingSystemController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use PHPUnit\Framework\Attributes\PostCondition;

// Route::get('/', function () {
//     sleep(2);
//     return Inertia::render('Home',['name'=>'Flex']);
// });
// Route::inertia('/','Home');
Route::get('/login', function () {
    return Inertia::render('Auth/login');
})->name('login');

// // Signup page
Route::get('/signup', function () {
    return Inertia::render('Auth/signup');
})->name('register');



Route::post('/login',[SessionController::class,'login']);
Route::post('/signup',[SessionController::class,'signup']);
Route::post('/logout',[SessionController::class,'logout']);

Route::get('/',[VotingSystemController::class,'Home'])->name('home');

Route::get('/vote',[VotingSystemController::class,'vote'])->name('vote');


Route::get('/show/{id}',[VotingSystemController::class,'show'])->name('show');





