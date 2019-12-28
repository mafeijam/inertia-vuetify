<?php

namespace App;

use Google2FA;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Spatie\Permission\Traits\HasRoles;

class User extends Authenticatable
{
    use Notifiable, HasRoles;

    protected $guarded = [];

    protected $hidden = [
        'password', 'remember_token',
    ];

    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    protected $appends = ['qr_code', 'is_2fa_enabled', 'all_roles', 'all_permissions'];

    public function loginActivities()
    {
        return $this->hasMany(LoginActivity::class);
    }

    public function getQrCodeAttribute()
    {
        return $this->is2faEnabled
            ? Google2FA::getQRCodeInline('super system', $this->email, $this->google2fa_secret)
            : null;
    }

    public function getIs2faEnabledAttribute()
    {
        return $this->google2fa_secret !== null;
    }

    public function getAllRolesAttribute()
    {
        return $this->roles->pluck('name');
    }

    public function getAllPermissionsAttribute()
    {
        return $this->getAllPermissions()->pluck('name');
    }

    public function getLastLoginEditAttribute()
    {
        $last = $this->loginActivities()->where('type', 'login')->orderBy('created_at', 'desc')->first();
        return $last ? $last->created_at->format('Y-m-d H:i:s') : null;
    }
}
