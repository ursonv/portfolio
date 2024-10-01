<x-layout>
    <div class="container mx-auto px-4 py-8">
        <div class="flex flex-col items-center">
            <div class="w-48 h-48 mb-4">
                <img class="w-full h-full object-cover rounded-full shadow-lg" src="{{ $team->img }}" alt="{{ $team->name }}">
            </div>
            <h1 class="text-3xl font-bold mb-2 text-gray-800">{{ $team->name }}</h1>
            <p class="text-lg text-gray-600 text-center mb-2">{{ $team->country }}</p>
            <p class="text-gray-700 mb-2">{{ $team->mainsponsor }}</p>
            <p class="text-gray-700 mb-4">{{ $team->foundationdate }}</p>
            <p class="text-gray-700 mb-4"> Cyclists:</p>
            <ul>
                @foreach ($team->cyclists as $cyclist)
                <li class="text-center">
                    <a href="{{ route('cyclist.show', $cyclist->slug) }}" class="text-indigo-600 hover:text-indigo-900 text-sm font-medium ">{{ $cyclist->name }}</a>
                </li>
                @endforeach
            </ul>

            <a href="{{ route('team.index') }}" class="text-indigo-600 hover:text-indigo-900 text-sm font-medium mt-4">Back to Teams</a>
        </div>
    </div>
</x-layout>
