<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class UserController extends Controller
{
    public function index()
    {
        return Inertia::render('User/Index', [
            'users' => User::orderBy('name')->get()
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
            'email' => 'required|email|unique:users',
            'password' => 'required'
        ], $this->message());

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
            'email' => 'required|email|unique:users,email,'.$user->id
        ], $this->message());

        $user->update($valid);

        return redirect('/admin/users')->with('success', '已成功修改用戶');
    }

    public function destroy(User $user)
    {
        $user->delete();

        return redirect('/admin/users')->with('success', '已成功刪除用戶');
    }

    protected function message()
    {
        return [
            'name.required' => '請輸入用戶名稱',
            'email.required' => '請輸入用戶電件',
            'email.email' => '請輸入正確的郵件格式',
            'email.unique' => '用戶已存在',
            'password.required' => '請輸入密碼'
        ];
    }
}
