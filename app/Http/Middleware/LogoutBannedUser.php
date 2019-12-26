<?php

namespace App\Http\Middleware;

use Auth;
use Closure;

class LogoutBannedUser
{
    public function handle($request, Closure $next)
    {
        $user = $request->user();

        if ($user && $user->banned_at) {
            $user->loginActivities()->create([
                'type' => 'banned'
            ]);
            Auth::logout();
            $request->session()->flush();
            return redirect('/banned')->with('error', true);
        }

        return $next($request);
    }
}
