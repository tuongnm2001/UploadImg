<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ImageController extends Controller
{
    public function index()
    {
        return view('upload');
    }

    public function create(Request $request)
    {
        $image = $request->file('image');
        $path = $image->store('public/images');
        return response()
            ->json(['success' => true, 'path' => $path]);
    }
}
