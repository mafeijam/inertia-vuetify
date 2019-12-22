<?php

use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        \App\User::create([
            'name' => '超級管理員',
            'email' => 'admin@system.com',
            'password' => 123
        ]);
    }
}
