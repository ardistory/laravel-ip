<?php

use App\Http\Controllers\HomeController;
use App\Http\Controllers\UserController;
use App\Http\Middleware\GuestMiddleware;
use App\Http\Middleware\MemberMiddleware;
use Illuminate\Support\Facades\Route;

// Login
Route::controller(UserController::class)->middleware([GuestMiddleware::class])->group(function () {
    Route::get('/login', 'getLogin');
    Route::post('/login', 'postLogin');
});

// Home
Route::controller(HomeController::class)->middleware([MemberMiddleware::class])->group(function () {
    Route::get('/', 'getHome');
});