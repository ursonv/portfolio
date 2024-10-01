<x-layout>
    <div class="container mx-auto px-4 py-8">
        <h1 class="text-3xl font-bold mb-6 text-gray-800">Teams</h1>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            @foreach ($teams as $team)
                <div class="rounded-lg overflow-hidden shadow-lg flex flex-col bg-white">

                        <img class="w-full h-64 objectcover" src="{{ $team->img }}" alt="{{ $team->name }}">

                    <div class="p-4 flex flex-col justify-between flex-1">
                        <h2 class="text-xl font-bold mb-2 text-gray-800"><a href="{{ route('team.show', $team->slug) }}">{{ $team->name }}</a></h2>
                        <p class="text-gray-700 mb-2">Foundation Date: {{ $team->foundationdate }}</p>
                        <p class="text-gray-700 mb-2">Country: {{ $team->country }}</p>
                        <p class="text-gray-700 mb-4">Main Sponsor: {{ $team->mainsponsor }}</p>
                        <a href="{{ route('team.show', $team->slug) }}" class="text-indigo-600 hover:text-indigo-900 text-sm font-medium">Read more</a>
                    </div>
                </div>
            @endforeach
        </div>

        <div class="mt-8">
            {{ $teams->links() }}
        </div>
    </div>
</x-layout>
