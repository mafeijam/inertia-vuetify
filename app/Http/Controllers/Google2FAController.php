<?php

namespace App\Http\Controllers;

use Session;
use App\User;
use Inertia\Inertia;
use Illuminate\Http\Request;
use PragmaRX\Google2FAQRCode\Google2FA;

class Google2FAController extends Controller
{
    public function show()
    {
        return Session::get('google2fa.auth_passed')
            ? redirect('/profile')
            : Inertia::render('User/Google2FA');
    }

    public function verify()
    {
        return redirect('/profile');
    }

    public function toggle(User $user, Request $request, Google2FA $g2fa)
    {
        $secret = null;
        $message = '已成功停用雙重認證';
        Session::put('google2fa.auth_passed', false);

        if ($request->toggle) {
            $secret = $g2fa->generateSecretKey();
            $message = '已成功啟用雙重認證';
            Session::put('google2fa.auth_passed', true);
        }

        $user->update(['google2fa_secret' => $secret]);
        return back()->with('success', $message);
    }
}
