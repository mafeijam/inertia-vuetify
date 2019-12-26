<?php

namespace App\Services;

use Agent;
use Request;

class UserAgent
{
    public static function get()
    {
        $ip = Request::ip();
        $host = gethostbyaddr($ip);
        $platform = Agent::platform();
        $version = Agent::version($platform);

        return [
            'ip' => $ip,
            'host' => $host,
            'platform' => "$platform [$version]",
            'device' => Agent::device(),
            'browser' => Agent::browser()
        ];
    }
}
