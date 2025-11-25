<template>
    <nav :class="[
        'navbar font-serif text-base-content flex h-16 w-full justify-center sticky top-0 z-50 transition-all duration-300',
        isScrolled ? 'bg-base-200/80 backdrop-blur-md' : 'bg-base-200'
    ]">
        <div class="max-w-full w-full flex mx-4 sm:mx-8 md:mx-16 lg:mx-24 xl:mx-32 2xl:mx-48">
        <div class="navbar-start">
            <div class="dropdown">
                <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M4 6h16M4 12h8m-8 6h16" />
                    </svg>
                </div>
                <ul tabindex="0" class="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow font-sans">
                    <li><a href="#about">About</a></li>
                    <li><a href="#music">Music</a></li>
                </ul>
            </div>
            <a class="cursor-pointer text-2xl font-semibold italic" href="/"> 
                Holly Eva
            </a>
        </div>
        <div class="navbar-center hidden lg:flex">
            <ul class="menu menu-horizontal px-1 dropdown text-lg font-serif font-medium">
                <li><a href="#about">About</a></li>
                <li><a href="#music">Music</a></li>
            </ul>
        </div>
        <div class="navbar-end">
            <a class="btn uppercase btn-small btn-primary font-sans italic" href="mailto:hollythomson38210@gmail.com">contact</a>
        </div>
        </div>
    </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isScrolled = ref(false)

const handleScroll = () => {
    isScrolled.value = window.scrollY > 10
}

onMounted(() => {
    window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
})
</script>