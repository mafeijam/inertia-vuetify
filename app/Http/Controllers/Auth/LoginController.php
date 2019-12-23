<?php

namespace App\Http\Controllers\Auth;

use Auth;
use Agent;
use Inertia\Inertia;
use Illuminate\Http\Request;
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
        if ($user->banned_at) {
            $this->guard()->logout();
            $request->session()->flush();
            return redirect('banned');
        }

        Auth::logoutOtherDevices($request->password);
        $ip = $request->ip();
        $host = gethostbyaddr($ip);
        $platform = Agent::platform();
        $version = Agent::version($platform);
        $user->loginActivities()->create([
            'type' => 'login',
            'data' => [
                'ip' => $ip,
                'host' => $host,
                'platform' => "$platform [$version]",
                'device' => Agent::device(),
                'browser' => Agent::browser()
            ]
        ]);
        return redirect('/admin/users');
    }

    protected function loggedOut()
    {
        return redirect('/')->with('success', '已成功登出');
    }
}
