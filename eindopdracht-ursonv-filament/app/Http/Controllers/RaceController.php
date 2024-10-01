<?php

namespace App\Http\Controllers;

use App\Models\Race;
use Illuminate\Http\Request;

class RaceController extends Controller
{
    public function index() {
        $races = Race::paginate(16);
        return view('races.index', [
            'races' => $races
        ]);
    }

    public function show(Race $race) {
        return view('races.show', [
            'race' => $race
        ]);
    }
}
