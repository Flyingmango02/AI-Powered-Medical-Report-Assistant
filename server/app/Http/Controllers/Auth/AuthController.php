<?php

namespace App\Http\Controllers\Auth;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use App\Models\User;

class AuthController
{
    public function login(Request $request)
    {
        $credentials = $request->validate([
            'email' => ['required', 'email'],
            'password' => ['required']
        ]);

        $email = $credentials['email'];
        $password = $credentials['password'];

        // Get user from database with email
        $foundUser = User::where('email', $email)->first();

        if (!$foundUser) {
            return response()->json([
                'message' => 'Invalid Credentials'
            ], 404);
        }

        // Check password
        if (!Hash::check($password, $foundUser->password)) {
            return response()->json([
                'message' => 'Invalid Credentials'
            ], 404);
        }

        // Redirect for now, make it simple
        return response()->json([
            'message' => 'Login Successful',
            'user' => [
                'id' => $foundUser->user_id,
                'username' => $foundUser->username,
                'email' => $foundUser->email
            ]
        ]);
    }
}
