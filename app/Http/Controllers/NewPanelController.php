<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class NewPanelController extends Controller
{
    public function index(Request $request)
    {
        if (Auth::user())
            return view('new-panel');
        else
            return view('auth.login');
    }

    public function getContent(Request $request)
    {
        $target = $request->target;
        switch ($target) {
            case 'dashboard':
                return view('contents.dashboard');
                break;
            case 'users':
                return view('layouts.tables.users');
                break;
            default:
                break;
        }
    }
}
