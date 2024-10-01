<nav class="bg-gray-800 p-4">
    <div class="container mx-auto flex justify-between items-center">
        <div class="text-white text-xl font-bold">
            <a href="/">CyclingPredictions</a>
        </div>
        <div class="flex items-center space-x-4">
            @auth
                <div class="relative flex items-center">
                    <a href="{{ route('home') }}" class="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium mr-10">Predictions</a>
                    <a href="{{ route('prediction.add') }}" class="bg-blue-500 hover:bg-blue-700 text-white px-2 py-1 rounded-full text-xs font-medium absolute top-4 right-5  transform translate-x-1/2 -translate-y-1/2 ml-2">Add +</a>
                </div>
                <a href="{{ route('cyclist.index') }}" class="text-gray-300 hover:text-white px-5 py-2 rounded-md text-sm font-medium">Cyclists</a>
                <a href="{{ route('team.index') }}" class="text-gray-300 hover:text-white px-5 py-2 rounded-md text-sm font-medium">Teams</a>
                <a href="{{ route('race.index') }}" class="text-gray-300 hover:text-white px-5 py-2 rounded-md text-sm font-medium">Races</a>
                <a href="{{ route('dashboard') }}" class="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium mr-10">Dashboard</a>
                
                <a href="{{ route('logout') }}" onclick="event.preventDefault(); document.getElementById('logout-form').submit();" class="text-gray-300 hover:text-white px-5 py-2 rounded-md text-sm">Logout</a>

                <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display:none;"> @csrf </form> 
                 
            @else
                <a href="{{ route('home') }}" class="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Predictions</a>
                <a href="{{ route('cyclist.index') }}" class="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Cyclists</a>
                <a href="{{ route('team.index') }}" class="text-gray-300 hover:text-white px-5 py-2 rounded-md text-sm font-medium">Teams</a>
                <a href="{{ route('race.index') }}" class="text-gray-300 hover:text-white px-5 py-2 rounded-md text-sm font-medium">Races</a>
                <a href="{{ route('login') }}" class="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm">Login</a>
                <a href="{{ route('register') }}" class="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm">Register</a>
            @endauth
        </div>
    </div>
</nav>
