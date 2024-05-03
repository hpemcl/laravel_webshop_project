<?php

use Illuminate\Support\Facades\Route;

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
Route::middleware('auth:sanctum')->get('/products', function (Request $request) {
    return $request->products();
});


Route::get('/', function () {
    return view('welcome');
});

Route::get('users', [App\Http\Controllers\ApiController::class, 'getUsers']);
Route::get('test', function () {
    return 'Hello World';
});


Route::get('products', [App\Http\Controllers\ApiController::class, 'getProducts']);

Route::get('/products/{id}', [App\Http\Controllers\ApiController::class, 'getProductById']);