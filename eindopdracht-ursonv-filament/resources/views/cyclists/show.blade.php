<x-layout>
    <div class="container mx-auto px-4 py-8">
        <div class="flex flex-col items-center">
            <div class="w-48 h-48 mb-4">
                <img class="w-full h-full object-cover rounded-full shadow-lg" src="{{ $cyclist->img }}" alt="{{ $cyclist->name }}">
            </div>
            <h1 class="text-3xl font-bold mb-2 text-gray-800">{{ $cyclist->name }}</h1>
            <p class="text-lg text-gray-600 text-center">{{ $cyclist->description }}</p>
            <p class="text-gray-700 mb-2">Team: <a href="{{ route('team.show', $cyclist->team->slug) }}" class="text-indigo-600 hover:text-indigo-900">{{ $cyclist->team->name }}</a></p>


            <a href="{{ route('cyclist.index') }}" class="text-indigo-600 hover:text-indigo-900 text-sm font-medium">Back to Cyclists</a>

        </div>
    </div>
</x-layout>
