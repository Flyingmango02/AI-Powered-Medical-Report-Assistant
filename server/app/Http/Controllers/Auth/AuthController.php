<?php

namespace App\Http\Controllers\Auth;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use App\Models\User;
use Illuminate\Support\Facades\Auth;

class AuthController
{
    public function login(Request $request)
    {
        $credentials = $request->validate([
            'email' => ['required', 'email'],
            'password' => ['required']
        ]);

        // Check user using Auth
        if (!Auth::attempt($credentials)) {
            return response()->json([
                'message' => 'Invalid Credentials',
            ], 401);
        }

        // Generate new session Id
        $request->session()->regenerate();

        // Get user from memory
        $user = Auth::user();
        
        // Redirect for now, make it simple
        return response()->json([
            'message' => 'Login Successful',
            'user' => $user
        ]);
    }

    // return user for middleware
    public function user(Request $request) {
        return response()->json($request->user());
    }
}
