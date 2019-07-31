<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Auth;

class LoginController extends Controller
{
    public function loginView(){
    	return view('login');
    }

    public function login(Request $request)
    {
        $credentials = $request->only('username', 'password');
        if (Auth::attempt($credentials))
            return ['success' => true, 'message' => 'Login Success', 'redirect' => '/'];
        else
        	return ['success' => false,'message' => 'Invalid Credentials!'];
    }

    public function logout(){
        Auth::logout();
        return redirect('/login');
    }
}
