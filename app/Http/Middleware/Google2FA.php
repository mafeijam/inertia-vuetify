<?php

namespace App\Http\Middleware;

use Closure;
use PragmaRX\Google2FALaravel\Support\Authenticator;

class Google2FA
{
    public function handle($request, Closure $next)
    {
        $authenticator = app(Authenticator::class)->boot($request);

        $success = $authenticator->isAuthenticated();

        if ($success) {
            return $next($request);
        }

        if ($request->has('verify') && !$success) {
            return redirect('2fa')->with('error', true);
        }

        return redirect('2fa');
    }
}
