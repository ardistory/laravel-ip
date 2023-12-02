<?php

namespace App\Http\Controllers;

use Illuminate\Http\JsonResponse;
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

    public function getDataToko(Request $request): JsonResponse
    {
        $kodeToko = $request->get('kodetoko');

        $dataToko = DB::select('SELECT * FROM tokolbk WHERE kode_toko=:kode_toko', [
            'kode_toko' => $kodeToko
        ]);

        if ($dataToko) {
            return response()->json([
                'id' => $dataToko[0]->id,
                'kode_toko' => $dataToko[0]->kode_toko,
                'nama_toko' => $dataToko[0]->nama_toko,
                'ip_gateway' => $dataToko[0]->ip_gateway,
                'ip_induk' => $dataToko[0]->ip_induk,
                'ip_anak' => $dataToko[0]->ip_anak,
                'ip_stb' => $dataToko[0]->ip_stb,
                'ip_wdcp' => $dataToko[0]->ip_wdcp,
                'edparea' => $dataToko[0]->edparea
            ]);
        } else {
            return response()->json([
                'error' => "Kode Toko '$kodeToko' Tidak Ada Di Server!"
            ]);
        }
    }

    public function getPingToko(Request $request)
    {
        return response()->json([
            'data' => $request->input()
        ]);
    }
}
