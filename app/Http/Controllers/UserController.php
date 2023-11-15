<?php

namespace App\Http\Controllers;

use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    public function getLogin(): Response
    {
        return response()->view('login', [
            'title' => 'Login'
        ]);
    }

    public function postLogin(Request $request): RedirectResponse
    {
        $username = $request->post('username');
        $password = $request->post('password');

        $cobaLogin = DB::select('SELECT * FROM auth WHERE username=:username', [
            'username' => $username
        ]);

        if ($cobaLogin) {
            foreach ($cobaLogin as $data) {
                if (password_verify($password, $data->password)) {
                    $request->session()->put('id', $data->id);
                    $request->session()->put('username', $data->username);
                    $request->session()->put('password', $data->password);
                    $request->session()->put('name', $data->name);
                    $request->session()->put('image', $data->image);
                    $request->session()->put('is_verify', $data->is_verify);
                    $request->session()->put('is_timnet', $data->is_timnet);
                    $request->session()->put('akses', $data->akses);
                    $request->session()->put('departemen', $data->departemen);

                    return redirect('/');
                } else {
                    return response()->view('login', [
                        'title' => 'Login',
                        'error' => 'Password salah!'
                    ]);
                }
            }
        } else {
            return response()->view('login', [
                'title' => 'Login',
                'error' => 'Username & password salah'
            ]);
        }
    }
}
