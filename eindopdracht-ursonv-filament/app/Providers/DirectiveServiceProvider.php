<?php

namespace App\Providers;

use Illuminate\Support\Facades\Blade;
use Illuminate\Support\ServiceProvider;

class DirectiveServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap services.
     */
    public function boot(): void
    {
        Blade::directive('admin', function () {
            return "<?php if(auth()->check() && auth()->user()->admin): ?>";
        });

        Blade::directive('endadmin', function () {
            return "<?php endif; ?>";
        });
    }
}
