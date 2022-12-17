<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\ChatApiController;

Route::prefix('/chat')->group(function () {
    Route::post('/message', [ChatApiController::class, 'create']);

    Route::get('/message', [ChatApiController::class, 'index']);
});
