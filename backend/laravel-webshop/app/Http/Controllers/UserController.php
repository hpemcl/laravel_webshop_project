<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class UserController extends User
{
    public function index()
    {
        $users = User::all();
        return response()->json(["user" => $users], 200);
    }

    public function store(Request $request)
    {
        $user = User::create($request->toArray());
        if (!is_null($user)) {
            $msg = 'user is created';
        } else {
            $msg = 'could not create user';
        }
        return response()->json(["msg" => $msg, "user" => $user], 200);
    }

    public function complete(Request $request)
    {
        $user = User::whereId($request->id)->first();
        if (!is_null($user)) {
            $user->completed = !$user->completed;
            $user->save();
        }
        $user_changed = User::whereId($request->id)->first();
        return response()->json($user_changed, 200);
    }

    public function delete(Request $request)
    {
        $message = 'user not found';
        $user = User::whereId($request->id)->first();
        if (!is_null($user)) {
            $user->delete();
            $message = 'user deleted successfully';
        }
        return response()->json($message, 200);
    }
}
