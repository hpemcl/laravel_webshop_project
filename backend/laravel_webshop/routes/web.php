<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

Route::get('users', [App\Http\Controllers\ApiController::class, 'getUsers']);
Route::get('test', function () {
    return 'Hello World';
});
