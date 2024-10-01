<?php

namespace App\Http\Controllers;

use App\Models\Cyclist;
use Illuminate\Http\Request;

class CyclistController extends Controller
{
    public function index() {
        // Paginate the query before passing it to the view
        $cyclists = Cyclist::paginate(16);

        return view('cyclists.index', [
            'cyclists' => $cyclists
        ]);
    }

    public function show(Cyclist $cyclist) {
        return view('cyclists.show', [
            'cyclist' => $cyclist
        ]);
    }
}
