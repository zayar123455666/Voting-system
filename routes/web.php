<?php

use App\Http\Controllers\Admin;
use App\Http\Controllers\CandidateController;
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


Route::prefix('admin')->group(function () {
    Route::get('/candidates/{id}/edit', [CandidateController::class, 'edit']);
    Route::put('/candidates/{id}', [CandidateController::class, 'update']);
    Route::delete('/candidates/{id}', [CandidateController::class, 'destroy']);
});

Route::get('/show/{id}',[VotingSystemController::class,'show'])->name('show');


Route::post('/candidates', [CandidateController::class, 'store']);

Route::get('/addCandidates', [CandidateController::class, 'add'])->name('addCandidates');

Route::get('/candidates', [CandidateController::class, 'index'])->name('admin.AllCandidates');










