<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Products;
class ApiController extends Controller
{
    public function getUsers()
    {
        // Retrieve all users and return them as JSON
        return response()->json(User::all());
    }

    public function getProducts() {
        return response()->json(Products::all());
    }
    public function getProductById($id)
    {
        $product = Products::find($id);

        if (!$product) {
            return response()->json(['message' => 'Product not found'], 404);
        }

        return response()->json($product);
    }

    
    
}
