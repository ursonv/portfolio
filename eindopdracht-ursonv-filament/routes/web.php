<?php

use App\Http\Controllers\RaceController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\CyclistController;
use App\Http\Controllers\TeamController;
use App\Http\Controllers\PredictionController;
use Illuminate\Support\Facades\Route;


// home page
Route::get('/', [PredictionController::class, 'index'])->name('home');

// predictions
Route::prefix('predictions')
    ->controller(PredictionController::class)
    ->name('prediction.')
    ->group(function () {
        Route::get('/add', 'add')->name('add');
        Route::post('/add', 'store')->name('store');
        Route::get('/{prediction:slug}', 'show')->name('show');
        Route::get('/{prediction:slug}/edit', 'edit')->name('edit');
        Route::put('/{prediction}', 'update')->name('update'); // Define the update route
        Route::delete('/{prediction}', 'destroy')->name('destroy');
    });

//reviews
Route::post('/predictions/{prediction}/reviews', [PredictionController::class, 'storeReview'])->name('review.store');

// cyclists
Route::prefix('cyclists')
    ->controller(CyclistController::class)
    ->name('cyclist.')
    ->group(function () {
        Route::get('/', 'index')->name('index');
        Route::get('/{cyclist:slug}', 'show')->name('show');
    });

// teams
Route::prefix('teams')
    ->controller(TeamController::class)
    ->name('team.')
    ->group(function () {
        Route::get('/', 'index')->name('index');
        Route::get('/{team:slug}', 'show')->name('show');
    });

// races
Route::prefix('races')
    ->controller(RaceController::class)
    ->name('race.')
    ->group(function () {
        Route::get('/', 'index')->name('index');
        Route::get('/{race:slug}', 'show')->name('show');
    });

Route::get('/dashboard', [PredictionController::class, 'dashboard'])
    ->middleware(['auth'])
    ->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
