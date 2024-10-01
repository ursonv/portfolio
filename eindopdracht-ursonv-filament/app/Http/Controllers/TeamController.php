<?php

namespace App\Http\Controllers;

use App\Models\Team;
use Illuminate\Http\Request;

class TeamController extends Controller
{
    public function index() {
        $teams = Team::paginate(16);
        return view('teams.index', [
            'teams' => $teams
        ]);
    }

    public function show(Team $team) {
        return view('teams.show', [
            'team' => $team
        ]);
    }
}
