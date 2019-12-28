<?php

use App\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Storage;
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
        // $g2fa = new Google2FA;

        $email = 'super@system.com';

        // $key = $g2fa->generateSecretKey();

        // $qr = $g2fa->getQRCodeInline('super system', $email, $key);
        // $qr = str_replace('data:image/png;base64,', '', $qr);

        // Storage::put('super-qr.png', base64_decode($qr));

        User::create([
            'name' => '超級管理員',
            'email' => $email,
            'password' => bcrypt(123),
            'google2fa_secret' => null,
        ]);

        User::create([
            'name' => '普通用戶',
            'email' => 'user@system.com',
            'password' => bcrypt(123),
            'google2fa_secret' => null,
        ]);
    }
}
