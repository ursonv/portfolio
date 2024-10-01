@props(['href', 'active'])

<a href="{{ $href }}" class="{{ $active ? 'text-indigo-500' : 'text-gray-900 dark:text-gray-400' }} hover:text-indigo-500 dark:hover:text-indigo-400">{{ $slot }}</a>
