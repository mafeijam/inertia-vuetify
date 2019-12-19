<?php

use App\Http\Controllers\UserController;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Home');
});

Route::prefix('admin')->group(function () {
    Route::get('users', [UserController::class, 'index']);
    Route::get('user/create', [UserController::class, 'create']);
    Route::get('user/{user}/edit', [UserController::class, 'edit']);
    Route::post('user', [UserController::class, 'store']);
    Route::put('user/{user}', [UserController::class, 'update']);
    Route::delete('user/{user}', [UserController::class, 'destroy']);
});

Route::get('about', function () {
    return Inertia::render('About');
});

Route::get('login', function () {
    return Inertia::render('Login');
})->middleware('guest');

Route::get('protect', function () {
    return Inertia::render('Protect');
})->middleware('auth');
