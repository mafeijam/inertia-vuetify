<?php

namespace App\Listeners;

use App\Services\UserAgent;

class UserEventSubscriber
{
    public function failed($event)
    {
        $event->user && $event->user->loginActivities()->create([
            'type' => 'failed',
            'data' => UserAgent::get()
        ]);
    }

    public function logout($event)
    {
        $event->user->loginActivities()->create([
            'type' => 'logout'
        ]);
    }

    public function currentDeviceLogout($event)
    {
        $event->user->loginActivities()->create([
            'type' => 'duplicate',
            'data' => UserAgent::get()
        ]);
    }

    public function subscribe($events)
    {
        $events->listen(
            'Illuminate\Auth\Events\Failed',
            'App\Listeners\UserEventSubscriber@failed'
        );

        $events->listen(
            'Illuminate\Auth\Events\Logout',
            'App\Listeners\UserEventSubscriber@logout'
        );

        $events->listen(
            'Illuminate\Auth\Events\CurrentDeviceLogout',
            'App\Listeners\UserEventSubscriber@currentDeviceLogout'
        );
    }
}
