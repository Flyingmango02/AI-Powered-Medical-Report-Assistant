<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Auth\AuthController;

Route::prefix('auth')->group(function () {
    Route::post('/login', [AuthController::class, 'login']);

    // middleware to get user session
    Route::middleware('auth:sanctum')->group(function () {
        Route::get('/me', [AuthController::class, 'user']);
    });
});