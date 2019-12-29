<?php

namespace App\Http\Controllers;

use Mail;
use App\User;
use App\LoginActivity;
use App\Mail\ResetUserPassword;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Inertia\Inertia;
use Spatie\Permission\Models\Role;

class UserController extends Controller
{
    public function index()
    {
        $lastQuery = LoginActivity::select('created_at')
            ->whereColumn('user_id', 'users.id')
            ->where('type', 'login')
            ->orderBy('created_at', 'desc')
            ->limit(1);

        return Inertia::render('User/Index', [
            'users' => User::with('roles')
                ->addSelect(['last_login' => $lastQuery])
                ->orderBy('id')->get()
        ]);
    }

    public function create()
    {
        return Inertia::render('User/Create', [
            'roles' => Role::all()->pluck('name')
        ]);
    }

    public function store(Request $request)
    {
        $valid = $request->validate([
            'name' => 'required',
            'email' => 'bail|required|email:rfc,dns|unique:users',
            'password' => 'required'
        ], $this->message());

        $valid['password'] = bcrypt($valid['password']);

        User::create($valid)->syncRoles($request->roles);

        return redirect('/admin/user')->with('success', '已成功新增用戶');
    }

    public function edit(User $user)
    {
        return Inertia::render('User/Edit', [
            'user' => $user->append('last_login_edit'),
            'roles' => Role::all()->pluck('name')
        ]);
    }

    public function update(Request $request, User $user)
    {
        abort_if($user->id === 1, 403);

        $valid = $request->validate([
            'name' => 'required',
            'email' => 'bail|required|email:rfc,dns|unique:users,email,'.$user->id
        ], $this->message());

        $user->update($valid);
        $user->syncRoles($request->all_roles);

        return redirect('/admin/user')->with('success', '已成功修改用戶: '.$user->name);
    }

    public function destroy(User $user)
    {
        abort_if($user->id === 1, 403);

        $user->delete();

        return redirect('/admin/user')->with('success', '已成功刪除用戶: '.$user->name);
    }

    public function banToggle(User $user, Request $request)
    {
        abort_if($user->id === 1, 403);

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
        abort_if($user->id === 1 || $user->banned_at !== null, 403);

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

    public function profile()
    {
        return Inertia::render('User/Profile');
    }

    public function banned()
    {
        return Inertia::render('User/Banned');
    }

    public function batchBanToggle(Request $request)
    {
        $ids = explode(',', $request->ids);
        abort_if(in_array(1, $ids), 403);

        User::whereIn('id', $ids)
            ->update(['banned_at' => $request->has('unban') ? null : now()]);

        return back()->with('success', $request->has('unban') ? '已成功啟用用戶' : '已成功停用用戶');
    }

    public function batchDelete(Request $request)
    {
        $ids = explode(',', $request->ids);
        abort_if(in_array(1, $ids), 403);

        User::whereIn('id', $ids)->delete();

        return back()->with('success', '已成功刪除用戶');
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
