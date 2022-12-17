<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\AuthApiController;


Route::prefix('auth')->group(function () {
    // Route::get('/forgot-password', [AuthController::class, 'forgotPassword']);

    Route::get('/login', [AuthApiController::class, 'login']);

    Route::get('/register', [AuthApiController::class, 'register']);
});
