<?php

namespace App\Http\Controllers\Auth;

use Auth;
use Session;
use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Services\UserAgent;
use App\Http\Controllers\Controller;
use App\Providers\RouteServiceProvider;
use Illuminate\Foundation\Auth\AuthenticatesUsers;

class LoginController extends Controller
{
    use AuthenticatesUsers;

    protected $redirectTo = RouteServiceProvider::HOME;

    public function showLoginForm()
    {
        return Inertia::render('Login');
    }

    protected function authenticated(Request $request, $user)
    {
        Auth::logoutOtherDevices($request->password);

        $lastLogin = $user->loginActivities()->where('type', 'login')->latest()->first();

        Session::put(
            'last_login',
            $lastLogin ? $lastLogin->created_at->format('Y-m-d H:i:s') : '首次登入'
        );

        $user->loginActivities()->create([
            'type' => 'login',
            'data' => UserAgent::get()
        ]);

        return redirect('/profile');
    }
}
