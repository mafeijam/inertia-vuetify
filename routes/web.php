<?php

use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Home');
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
