<?php

use App\Http\Controllers\UserController;
use App\Http\Controllers\Auth\LoginController;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Home');
});

Route::prefix('admin')->middleware(['no-back', 'auth', 'banned'])->group(function () {
    Route::get('users', [UserController::class, 'index']);
    Route::get('user/create', [UserController::class, 'create']);
    Route::get('user/{user}/edit', [UserController::class, 'edit']);
    Route::post('user', [UserController::class, 'store']);
    Route::put('user/{user}', [UserController::class, 'update']);
    Route::delete('user/{user}', [UserController::class, 'destroy']);
    Route::patch('user/{user}/ban', [UserController::class, 'banToggle']);
    Route::patch('user/{user}/reset', [UserController::class, 'reset']);
});

Route::middleware(['no-back', 'auth', 'banned'])->group(function () {
    Route::post('logout', [LoginController::class, 'logout']);
    Route::get('change-password', [UserController::class, 'showChangePassword']);
    Route::post('change-password', [UserController::class, 'changePassword']);
});

Route::get('banned', [UserController::class, 'banned']);

Route::get('login', [LoginController::class, 'showLoginForm'])->name('login')->middleware('guest');
Route::post('login', [LoginController::class, 'login'])->middleware('guest');

Route::get('protect', function () {
    return Inertia::render('Protect');
})->middleware('auth');

Route::get('auth/ping', function () {
    return 'pong';
})->middleware('auth');
