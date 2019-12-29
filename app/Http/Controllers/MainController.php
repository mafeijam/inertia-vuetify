<?php

namespace App\Http\Controllers;

use Session;
use Inertia\Inertia;
use Illuminate\Http\Request;

class MainController extends Controller
{
    public function ping()
    {
        return 'pong';
    }

    public function home()
    {
        return Inertia::render('Home');
    }

    public function error(Request $request)
    {
        $status = Session::get('status');
        return Inertia::render('Error', ['status' => $status])
            ->toResponse($request)
            ->setStatusCode($status);
    }
}
