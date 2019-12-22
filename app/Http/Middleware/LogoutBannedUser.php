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
            Auth::logout();
            return redirect('/banned');
        }

        return $next($request);
    }
}
