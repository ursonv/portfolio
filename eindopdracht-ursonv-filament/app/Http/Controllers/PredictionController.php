<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\Prediction;
use App\Models\Cyclist;
use App\Models\Race;
use App\Models\Review;

//use Illuminate\Support\Facades\Auth;

class PredictionController extends Controller
{



    public function index() {
        $search = request('search');
    
        if ($search) {
            $predictions = Prediction::whereHas('cyclist', function($query) use ($search) {
                $query->where('name', 'like', '%' . $search . '%');
            })->paginate(16);
        } else {
            $predictions = Prediction::query()->paginate(16);
        }
    
        $predictions->appends(['search' => $search]);
    
        return view('index', [
            'predictions' => $predictions
        ]);
    }
    

    public function dashboard() {
        // Fetch predictions added by the currently authenticated user
        $userPredictions = Prediction::where('user_id', Auth::id())
            ->paginate(8);
    
        return view('dashboard', [
            'predictions' => $userPredictions
        ]);
    }
    

    public function show(Prediction $prediction) {
        return view('prediction-show', [
            'prediction' => $prediction
        ]);
    }

    public function storeReview(Request $request)
    {
        // Validate the request
        $request->validate([
            'rating' => 'required|min:1|max:5|numeric',
            'content' => 'required',
            'prediction_id' => 'required|exists:predictions,id|numeric'
        ]);

        // Create a new review
        $review = new Review();
        $review->rating = $request->rating;
        $review->content = $request->content;
        $review->prediction_id = $request->prediction_id;
        $review->user_id = Auth::id(); // Get the authenticated user's ID

        // Save the review
        $review->save();

        // Redirect to the prediction show page
        return redirect()->route('prediction.show', ['prediction' => $review->prediction->slug]);
    }

    public function add() {


        return view('prediction-create', [
            'cyclists' => Cyclist::all(),
            'races' => Race::all(),
            'prediction' => null // Voeg deze regel toe

        ]);
    }

    public function destroy(Prediction $prediction) {

        $prediction->delete();
        return redirect()->route('dashboard');
    }


    public function edit(Prediction $prediction) {

        $races = Race::all(); 
        $cyclists = Cyclist::all();
        return view('prediction-edit', compact('prediction', 'races', 'cyclists'));
    }

    public function update(Request $request, Prediction $prediction) {
        $request->validate([
            'cyclist_id' => 'required|exists:cyclists,id|numeric',
            'race_id' => 'required|exists:races,id|numeric',
            'comment' => 'required',
            'position' => 'required|numeric',
            'user_id' => 'required|exists:users,id|numeric'
        ]);
    
        $prediction->update([
            'cyclist_id' => $request->cyclist_id,
            'race_id' => $request->race_id,
            'comment' => $request->comment,
            'position' => $request->position,
            'user_id' => $request->user_id,
        ]);
    
        return redirect()->route('dashboard', ['prediction' => $prediction->slug])->with('success', 'Prediction updated successfully.');
    }
    


    public function store(Request $request) {

        $request->validate([
            'cyclist_id' => 'required|exists:cyclists,id|numeric',
            'race_id' => 'required|exists:races,id|numeric',
            'comment' => 'required',
            'slug' => 'unique:predictions',
            'position' => 'required|numeric',
            'user_id' => 'required|exists:users,id|numeric'
        ]);

        $prediction = new Prediction();
        $prediction->cyclist_id = $request->cyclist_id;
        $prediction->race_id = $request->race_id;
        $prediction->slug = fake()->unique()->slug(2);
        $prediction->comment = $request->comment;
        $prediction->position = $request->position;
        $prediction->user_id = $request->user_id;

        $prediction->save();

        return redirect()->route('home');
    }
}
