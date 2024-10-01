<x-layout>
    <form class="my-8 max-w-md mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" action="{{ route('prediction.update', $prediction) }}" method="POST">
        @csrf
        @method('PUT')
        <input type="hidden" value="{{ Auth::user()->id }}" name="user_id">
        <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="race_id">
                Race
            </label>
            <select name="race_id" id="race_id" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                @foreach($races as $race)
                    <option value="{{ $race->id }}" @if($prediction->race_id == $race->id) selected @endif>{{ $race->title }}</option>
                @endforeach
            </select>
        </div>
        <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="cyclist_id">
                Cyclist
            </label>
            <select name="cyclist_id" id="cyclist_id" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                @foreach($cyclists as $cyclist)
                    <option value="{{ $cyclist->id }}" @if($prediction->cyclist_id == $cyclist->id) selected @endif>{{ $cyclist->name }}</option>
                @endforeach
            </select>
        </div>
        <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="position">
                Predicted Position
            </label>
            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="position" name="position" type="number" placeholder="Predicted Position" value="{{ $prediction->position }}">
        </div>
        <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="comment">
                Comment
            </label>
            <textarea class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="comment" name="comment" placeholder="Comment">{{ $prediction->comment }}</textarea>
        </div>
        <div class="flex items-center justify-between">
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                Update
            </button>
        </div>
    </form>
</x-layout>
