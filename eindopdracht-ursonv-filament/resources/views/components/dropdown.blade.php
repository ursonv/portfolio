@props(['align' => 'right'])

<div x-data="{ open: false }" @click.away="open = false" class="relative">
    <div @click="open = !open">
        {{ $trigger }}
    </div>

    <div x-show="open" :class="{ 'origin-top-right': align === 'right', 'origin-top-left': align === 'left' }" class="absolute z-10 mt-2 w-48 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5">
        {{ $slot }}
    </div>
</div>
