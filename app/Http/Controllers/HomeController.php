<?php

namespace App\Http\Controllers;

use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class HomeController extends Controller
{
    public function getHome(): Response
    {
        return response()->view('home', [
            'title' => 'Dashboard'
        ]);
    }
}
