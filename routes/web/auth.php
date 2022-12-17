<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;

Route::prefix('/auth')->group(function () {
    Route::get('/login', [AuthController::class, 'login']);

    Route::get('/register', [AuthController::class, 'register']);
});
