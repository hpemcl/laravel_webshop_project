<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;

class ApiController extends Controller
{
    public function getUsers() {
        $getUsers = User::get(); 
        return $getUsers;
    }
}
