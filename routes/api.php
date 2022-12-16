<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ChatController;

Route::get('message', [ChatController::class, 'index']);

Route::post('message', [ChatController::class, 'create']);
