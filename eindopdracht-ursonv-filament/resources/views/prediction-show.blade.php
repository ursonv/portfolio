<x-layout>
    <main class="max-w-3xl mx-auto py-8 px-4">
        <div class="bg-white shadow-lg rounded-lg overflow-hidden flex justify-center items-center">
            <img class="w-72 object-cover" src="https://www.alpecin-deceuninck.com/images/team/vdp-wc.jpg" alt="{{ $prediction->cyclist->name }}">
            <div class="p-6">
                <div class="mb-4">
                    <h1 class="text-2xl font-bold text-gray-900">{{ $prediction->race->title }}</h1>
                    <p class="text-sm text-gray-600">Predicted by: {{ $prediction->user->name }}</p>
                </div>
                <div class="mb-4"> 
                    <a href=""><h2 class="text-xl font-semibold text-gray-800">Cyclist: {{ $prediction->cyclist->name }}</h2></a>
                </div>
                <div class="mb-4">
                    <p class="text-lg font-semibold text-gray-800">Predicted Position: {{ $prediction->position }}</p>
                </div>
                <div class="mb-4">
                    <p class="text-gray-700">{{ $prediction->comment }}</p>
                </div>
            </div>
        </div>

        <h2 class="text-2xl font-semibold mt-8 mb-4">Reviews</h2>

        <form method="POST" action="{{ route('review.store', $prediction) }}" class="space-y-4">
            @csrf
            <input type="hidden" name="prediction_id" value="{{ $prediction->id }}">
            <label class="block">
                <span class="text-gray-700">Your review</span>
                <textarea name="content" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" placeholder="Write a review of this prediction here..."></textarea>
            </label>
            <label class="block">
                <span class="text-gray-700">Rating</span>
                <input type="number" name="rating" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" placeholder="Rating (1-5)">
            </label>
            <button type="submit" class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Place review</button>
        </form>
        

        @if(count($prediction->reviews))
            <ul class="mt-8 space-y-4">
                @foreach($prediction->reviews as $review)
                    <li class="bg-white p-4 rounded-lg shadow">
                        <p class="text-gray-800">{{ $review->content }}</p>
                        <p class="text-gray-600">{{ $review->rating }} / 5</p>
                        <p class="text-gray-500">- {{ $review->user->name }}</p>
                    </li>
                @endforeach
            </ul>
        @else
            <p class="mt-4 text-gray-600">No reviews yet</p>
        @endif
    </main>
</x-layout>
