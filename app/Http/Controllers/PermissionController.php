<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;
use Spatie\Permission\Models\Role;

class PermissionController extends Controller
{
    public function index()
    {
        return Inertia::render('Permission/Index', [
            'roles' => Role::withCount('users')->get(),
        ]);
    }

    public function create()
    {
        return Inertia::render('Permission/Create');
    }

    public function store(Request $request)
    {
        $valid = $request->validate([
            'name' => 'required|unique:roles',
        ], $this->message());

        Role::create($valid);

        return redirect('/admin/permission')->with('success', '已成功新增色角');
    }

    public function edit(Role $role)
    {
        return Inertia::render('Permission/Edit', [
            'role' => $role->load('users:id,name'),
            'all_permissions' => $role->permissions->pluck('name')
        ]);
    }

    public function update(Request $request, Role $role)
    {
        if ($role->id === 1) {
            return abort(403);
        }

        $valid = $request->validate([
            'name' => 'required|unique:roles,name,'.$role->id,
        ], $this->message());

        $role->update($valid);
        $role->syncPermissions($request->selection);

        return redirect('/admin/permission')->with('success', '已成功修改色角');
    }

    protected function message()
    {
        return [
            'name.required' => '請輸入角色名稱',
            'name.unique' => '角色已存在',
        ];
    }
}
