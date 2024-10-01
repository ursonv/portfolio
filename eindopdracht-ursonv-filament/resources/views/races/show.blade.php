<x-layout>
    <div class="container mx-auto px-4 py-6">
        <div class="bg-white rounded-lg shadow-lg overflow-hidden">
            <img class="w-full h-64  object-center" src="{{ $race->img }}" alt="{{ $race->title }}">
            <div class="p-6 text-center">
                <h1 class="text-3xl font-bold mb-4 text-gray-800">{{ $race->title }}</h1>
                <div class="mb-4">
                    <span class="block text-lg text-gray-600">Distance: <span class="font-medium">{{ $race->distance }} km</span></span>
                    <span class="block text-lg text-gray-600">Location: <span class="font-medium">{{ $race->location }}</span></span>
                </div>
                <a href="{{ route('race.index') }}" class="text-indigo-600 hover:text-indigo-900 text-sm font-medium">Back to Races</a>
            </div>
        </div>
    </div>
</x-layout>
