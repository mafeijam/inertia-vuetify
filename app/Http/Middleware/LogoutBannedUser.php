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
            $request->session()->flush();
            Auth::logout();
            return redirect('/banned');
        }

        return $next($request);
    }
}
