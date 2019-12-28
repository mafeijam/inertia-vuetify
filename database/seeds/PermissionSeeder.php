<?php

use App\User;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\PermissionRegistrar;

class PermissionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        app(PermissionRegistrar::class)->forgetCachedPermissions();

        $permissions = [
            '查看:用戶管理',
            '新增:用戶',
            '修改:用戶',
            '刪除:用戶',
            '查看:權限管理',
            '新增:角色',
            '修改:角色',
            '刪除:角色',
            '查看:項目管理',
            '新增:項目',
            '修改:項目',
            '刪除:項目'
        ];

        foreach ($permissions as $p) {
            Permission::create(['name' => $p]);
        }

        $a = Role::create(['name' => '超級管理員']);
        $a->givePermissionTo(Permission::all());
        User::find(1)->assignRole($a);
        $b = Role::create(['name' => '普通用戶']);
        $bp = Permission::whereIn('name', [
            '查看:項目管理',
            '新增:項目',
            '修改:項目',
            '刪除:項目'
        ])->get();
        $b->givePermissionTo($bp);
        User::find(2)->assignRole($b);
    }
}
