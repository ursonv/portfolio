<footer class="bg-gray-800 text-gray-300 py-4 mt-8">
    <div class="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div class="text-sm">
            &copy; 2024 CyclingPredictions App. All rights reserved.
        </div>
        <div class="space-x-4 mt-2 md:mt-0">
            <a href="{{ route('home') }}" class="hover:text-white">Predictions</a>
            <a href="{{ route('team.index') }}" class="hover:text-white">Teams</a>
            <a href="{{ route('cyclist.index') }}" class="hover:text-white">Cyclists</a>
            <a href="{{ route('race.index') }}" class="hover:text-white">Races</a>
        </div>
    </div>
</footer>
