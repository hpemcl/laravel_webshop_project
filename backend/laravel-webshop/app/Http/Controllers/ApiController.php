<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;

class ApiController extends Controller
{
    public function getUsers()
    {
        // Retrieve all users and return them as JSON
        return response()->json(User::all());
    }
}
