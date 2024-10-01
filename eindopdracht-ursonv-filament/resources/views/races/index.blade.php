<x-layout>
    <div class="container mx-auto px-4 py-8">
        <h1 class="text-3xl font-bold mb-6 text-gray-800">Races</h1>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            @foreach ($races as $race)
                <div class="rounded overflow-hidden shadow-lg flex flex-col p-4 bg-white">
                    <img class="w-full h-64 objectcover" src="{{ $race->img }}" alt="{{ $race->title }}" />
                    <h2 class="text-xl font-bold mb-2"><a href="{{ route('race.show', $race->slug) }}">{{ $race->title }}</a></h2>
                    <p class="text-gray-700">Distance: {{ $race->distance }} km</p>
                    <p class="text-gray-700">Location: {{ $race->location }}</p>
                </div>
            @endforeach
        </div>

        <div class="mt-8">
            {{ $races->links() }}
        </div>
    </div>
</x-layout>
