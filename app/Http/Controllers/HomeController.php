<?php

namespace App\Http\Controllers;

use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\DB;

class HomeController extends Controller
{
    public function getHome(): Response
    {
        $semuaUser = DB::select('SELECT * FROM auth');

        return response()->view('home', [
            'title' => 'Dashboard',
            'semua_user' => $semuaUser
        ]);
    }
}
