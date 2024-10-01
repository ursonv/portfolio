<x-layout>
    <div class="container mx-auto px-4 py-8">
        @auth
        <h1 class="text-m font-bold mb-4">Welcome, <span class="text-indigo-400">{{ Auth::user()->name }}</span>. 
            @admin <span class="text-red-600">(ADMIN)</span> @endadmin 
            <br>Don't hesitate to make your <span class="text-indigo-400">prediction</span>!</h1>
        @endauth
        <div class="mb-6">
            <x-search-bar/>
        </div>
        
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            @foreach ($predictions as $prediction)
                <x-prediction-card :prediction="$prediction" />
            @endforeach
        </div>
        
        <div class="mt-8">
            {{ $predictions->links() }}
        </div>
    </div>
</x-layout>
