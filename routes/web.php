<?php

use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Home');
});

Route::get('about', function () {
    return Inertia::render('About');
});
