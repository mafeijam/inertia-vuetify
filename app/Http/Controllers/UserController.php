<?php

namespace App\Http\Controllers;

use Mail;
use App\Mail\ResetUserPassword;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Inertia\Inertia;

class UserController extends Controller
{
    public function index()
    {
        return Inertia::render('User/Index', [
            'users' => User::where('id', '!=', 1)->orderBy('name')->get()
        ]);
    }

    public function create()
    {
        return Inertia::render('User/Create');
    }

    public function store(Request $request)
    {
        $valid = $request->validate([
            'name' => 'required',
            'email' => 'bail|required|email:rfc,dns|unique:users',
            'password' => 'required'
        ], $this->message());

        $valid['password'] = bcrypt($valid['password']);

        User::create($valid);

        return redirect('/admin/users')->with('success', '已成功新增用戶');
    }

    public function edit(User $user)
    {
        return Inertia::render('User/Edit', [
            'user' => [
                'id' => $user->id,
                'name' => $user->name,
                'email' => $user->email
            ]
        ]);
    }

    public function update(Request $request, User $user)
    {
        $valid = $request->validate([
            'name' => 'required',
            'email' => 'bail|required|email:rfc,dns|unique:users,email,'.$user->id
        ], $this->message());

        $user->update($valid);

        return redirect('/admin/users')->with('success', '已成功修改用戶: '.$user->name);
    }

    public function destroy(User $user)
    {
        $user->delete();

        return redirect('/admin/users')->with('success', '已成功刪除用戶: '.$user->name);
    }

    public function banToggle(User $user, Request $request)
    {
        $action = $request->has('unban');
        $user->banned_at = $action ? null : now();
        $user->save();

        $message = $action ? '已成功啟用用戶' : '已成功停用用戶';

        if ($request->has('name')) {
            $message .= ": $user->name";
        }

        return back()->with('success', $message);
    }

    public function reset(User $user, Request $request)
    {
        $password = Str::random(10);
        $user->password = bcrypt($password);
        $user->save();

        Mail::to($user)->send(new ResetUserPassword($password));

        $message = '已成功重設用戶密碼';

        if ($request->has('name')) {
            $message .= ": $user->name";
        }

        return back()->with('success', $message);
    }

    public function showChangePassword()
    {
        return Inertia::render('User/ChangePassword');
    }

    public function changePassword(Request $request)
    {
        $valid = $request->validate([
            'password' => 'required|confirmed'
        ], $this->message());

        $valid['password'] = bcrypt($valid['password']);

        $request->user()->update($valid);

        return back()->with('success', '已成功更改密碼');
    }

    public function banned()
    {
        return Inertia::render('User/Banned');
    }

    protected function message()
    {
        return [
            'name.required' => '請輸入用戶名稱',
            'email.required' => '請輸入用戶電件',
            'email.email' => '請輸入正確的郵件格式',
            'email.unique' => '用戶已存在',
            'password.required' => '請輸入密碼',
            'password.confirmed' => '密碼確認不正確'
        ];
    }
}
