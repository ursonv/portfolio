@props(['prediction'])

<div class="rounded overflow-hidden shadow-lg flex flex-col">

    <div class="relative flex justify-center items-center pt-4"><a href="#">
        <img class="w-full h-64 object-cover" src="{{ $prediction->cyclist->img }}">
        <div
            class="absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25">
        </div>
        <div
            class="text-xs absolute top-0 right-0 bg-indigo-600 px-4 py-2 text-white mt-3 mr-3">
            {{ $prediction->position }}
        </div>
    </div>
    <div class="px-6 py-4 mb-auto">
        <a href="/predictions/{{ $prediction->slug }}"
            class="font-medium text-lg inline-block hover:text-indigo-600 transition duration-500 ease-in-out inline-block mb-2">
            {{ $prediction->cyclist->name }}</a>
        <p class="text-gray-500 text-sm">
            @if(strlen($prediction->comment) > 100) <!-- Check if comment length is greater than 50 characters -->
            {{ substr($prediction->comment, 0, 100) }}... <!-- Trim comment to 50 characters and add ellipsis -->
        @else
            {{ $prediction->comment }} <!-- Otherwise, display the full comment -->
        @endif
        </p>
    </div>
    <div class="px-6 py-3 flex flex-row items-center justify-between bg-gray-100">
        <span href="#" class="py-1 text-xs font-regular text-gray-900 mr-1 flex flex-row items-center">
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="25" height="25" viewBox="0 0 256 256" xml:space="preserve">
                <defs>
                </defs>
                <g style="stroke: none; stroke-width: 0; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: none; fill-rule: nonzero; opacity: 1;" transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)" >
                    <path d="M 71.194 32.312 c -2.886 0 -5.612 0.673 -8.058 1.84 l -3.668 -6.37 l 3.351 -5.445 c 0.282 -0.458 0.294 -1.032 0.032 -1.501 c -0.263 -0.469 -0.758 -0.76 -1.295 -0.76 h -8.423 c -0.819 0 -1.484 0.664 -1.484 1.484 s 0.664 1.484 1.484 1.484 h 5.768 l -1.988 3.231 H 32.346 l -0.55 -1.006 h 1.233 c 0.82 0 1.484 -0.664 1.484 -1.484 s -0.664 -1.484 -1.484 -1.484 H 21.825 c -0.82 0 -1.484 0.664 -1.484 1.484 s 0.664 1.484 1.484 1.484 h 6.589 l 1.311 2.398 l -3.357 6.247 c -2.317 -1.022 -4.872 -1.6 -7.562 -1.6 C 8.437 32.312 0 40.749 0 51.119 c 0 10.369 8.437 18.806 18.806 18.806 c 9.869 0 17.97 -7.646 18.731 -17.322 h 5.213 v 2.118 h -2.331 c -0.82 0 -1.484 0.664 -1.484 1.484 s 0.664 1.484 1.484 1.484 h 6.516 c 0.819 0 1.484 -0.664 1.484 -1.484 s -0.664 -1.484 -1.484 -1.484 h -1.218 v -3.204 L 57.74 30.725 l 2.82 4.898 c -4.93 3.394 -8.172 9.071 -8.172 15.495 c 0 10.369 8.437 18.806 18.807 18.806 C 81.563 69.924 90 61.488 90 51.119 C 90 40.749 81.563 32.312 71.194 32.312 z M 31.424 30.773 l 10.309 18.862 h -4.196 c -0.472 -6.001 -3.765 -11.212 -8.559 -14.31 L 31.424 30.773 z M 34.57 49.635 H 21.287 l 6.286 -11.697 C 31.444 40.521 34.114 44.76 34.57 49.635 z M 18.806 66.957 c -8.734 0 -15.839 -7.106 -15.839 -15.839 c 0 -8.734 7.106 -15.839 15.839 -15.839 c 2.183 0 4.264 0.444 6.158 1.246 l -7.465 13.891 c -0.247 0.46 -0.234 1.015 0.033 1.463 c 0.268 0.448 0.751 0.722 1.273 0.722 H 34.57 C 33.819 60.641 27.039 66.957 18.806 66.957 z M 44.27 48.092 L 33.967 29.241 h 21.204 L 44.27 48.092 z M 71.194 66.957 c -8.734 0 -15.84 -7.106 -15.84 -15.839 c 0 -5.326 2.651 -10.037 6.694 -12.909 l 7.86 13.649 c 0.274 0.477 0.774 0.744 1.286 0.744 c 0.251 0 0.506 -0.064 0.739 -0.198 c 0.711 -0.409 0.954 -1.315 0.546 -2.025 l -7.861 -13.652 c 2.006 -0.92 4.228 -1.447 6.576 -1.447 c 8.733 0 15.839 7.106 15.839 15.839 C 87.033 59.852 79.927 66.957 71.194 66.957 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
                </g>
            </svg>
            <span class="ml-1 text-xs">{{ $prediction->race->title }}</span>
        </span>

        <span href="#" class="py-1 text-xs font-regular text-gray-900 mr-1 flex flex-row items-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9A3.75 3.75 0 1112 5.25 3.75 3.75 0 0115.75 9zM18 21v-2.25A4.5 4.5 0 0013.5 14.25h-3A4.5 4.5 0 006 18.75V21" />
            </svg>
            <span class="ml-1 text-xs">{{ $prediction->user->name }}</span>
        </span>
        
    </div>
</div>

