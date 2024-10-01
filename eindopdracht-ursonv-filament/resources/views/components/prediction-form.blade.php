<form class="my-8 max-w-md mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" 
      @if(isset($prediction)) action="{{ route('prediction.update', $prediction) }}" @else action="{{ route('prediction.store') }}" @endif method="POST">
    @csrf
    @isset($prediction)
        @method('PUT')
    @endif
    <input type="hidden" value="{{ Auth::user()->id }}" name="user_id">
    <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="race_id">
            Race
        </label>
        <select name="race_id" id="race_id" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
            @foreach($races as $race)
                <option value="{{ $race->id }}" @isset($prediction) @if($prediction->race_id == $race->id) selected @endif @endisset>{{ $race->title }}</option>
            @endforeach
        </select>
    </div>
    <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="cyclist_id">
            Cyclist
        </label>
        <select name="cyclist_id" id="cyclist_id" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
            @foreach($cyclists as $cyclist)
                <option value="{{ $cyclist->id }}" @isset($prediction) @if($prediction->cyclist_id == $cyclist->id) selected @endif @endisset>{{ $cyclist->name }}</option>
            @endforeach
        </select>
    </div>
    <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="position">
            Predicted Position
        </label>
        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="position" name="position" type="number" placeholder="Predicted Position" @isset($prediction) value="{{ $prediction->position }}" @endisset>
    </div>
    <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="comment">
            Comment
        </label>
        <textarea class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="comment" name="comment" placeholder="Comment">@isset($prediction){{ $prediction->comment }}@endisset</textarea>
    </div>
    <div class="flex items-center justify-between">
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
            @isset($prediction) Update @else Create @endif
        </button>
    </div>
</form>
