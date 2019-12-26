<?php

use Illuminate\Database\Seeder;
use PragmaRX\Google2FAQRCode\Google2FA;
class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $g2fa = new Google2FA;

        \App\User::create([
            'name' => '超級管理員',
            'email' => 'admin@system.com',
            'password' => bcrypt(123),
            'google2fa_secret' => $g2fa->generateSecretKey(),
        ]);
    }
}
