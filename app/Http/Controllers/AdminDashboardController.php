<?php

namespace App\Http\Controllers;
use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Chat;

class AdminDashboardController extends Controller
{
    public function index()
    {
        return Inertia::render('Admin/Dashboard', [
           'totalUsers' => User::where('role', 'user')->count(),
            'users' => User::where('role', 'user')->select('name', 'email')->get()
        ]);
    }
}
