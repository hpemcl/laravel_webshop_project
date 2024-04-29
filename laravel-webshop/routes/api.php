<?php
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('user', [UserController::class, 'index']);
Route::post('user', [UserController::class, 'store']);
Route::post('user/delete', [UserController::class, 'delete']);
Route::post('user/complete', [UserController::class, 'complete']);
