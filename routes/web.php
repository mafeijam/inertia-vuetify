<?php

use Inertia\Inertia;
use App\Http\Controllers\UserController;
use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\Google2FAController;
use App\Http\Controllers\PermissionController;
use App\Http\Controllers\ProjectController;

Route::get('/', function () {
    return Inertia::render('Home');
});

Route::prefix('admin')->middleware('app')->group(function () {
    Route::get('user', [UserController::class, 'index'])->middleware('can:查看:用戶管理');
    Route::get('user/create', [UserController::class, 'create'])->middleware('can:新增:用戶');
    Route::get('user/{user}/edit', [UserController::class, 'edit'])->middleware('can:修改:用戶');
    Route::post('user', [UserController::class, 'store'])->middleware('can:新增:用戶');
    Route::put('user/{user}', [UserController::class, 'update'])->middleware('can:修改:用戶');
    Route::delete('user/{user}', [UserController::class, 'destroy'])->middleware('can:刪除:用戶');
    Route::patch('user/{user}/ban', [UserController::class, 'banToggle'])->middleware('can:修改:用戶');
    Route::patch('user/{user}/reset', [UserController::class, 'reset'])->middleware('can:修改:用戶');

    Route::get('permission', [PermissionController::class, 'index']);
    Route::get('permission/create', [PermissionController::class, 'create']);
    Route::post('permission/role', [PermissionController::class, 'store']);
    Route::get('permission/role/{role}/edit', [PermissionController::class, 'edit']);
    Route::put('permission/role/{role}', [PermissionController::class, 'update']);
});

Route::prefix('auth')->middleware('app')->group(function () {
    Route::post('logout', [LoginController::class, 'logout']);
    Route::get('change-password', [UserController::class, 'showChangePassword']);
    Route::patch('change-password', [UserController::class, 'changePassword']);
    Route::post('2fa', [Google2FAController::class, 'verify']);
    Route::patch('2fa/{user}', [Google2FAController::class, 'toggle'])->middleware('can:toggle-2fa,user');
});

Route::prefix('module')->middleware('app')->group(function () {
    Route::get('/project', [ProjectController::class, 'index']);
});

Route::get('auth/login', [LoginController::class, 'showLoginForm'])->name('login')->middleware('guest');
Route::post('auth/login', [LoginController::class, 'login'])->middleware('guest');
Route::get('auth/2fa', [Google2FAController::class, 'show'])->middleware(['auth', 'banned']);

Route::get('profile', [UserController::class, 'profile'])->middleware('app');
Route::get('banned', [UserController::class, 'banned']);

Route::get('auth/ping', function () {
    return 'pong';
})->middleware('auth');
