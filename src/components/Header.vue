<template>
    <nav class="navbar bg-base-200 font-serif lg:px-46 sm:px-16
    text-base-content flex h-16 w-full justify-center
    ">
        <div class="navbar-start">
            <div class="dropdown">
                <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M4 6h16M4 12h8m-8 6h16" />
                    </svg>
                </div>
                <ul tabindex="0" class="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                    <li><a href="#about">About</a></li>
                    <li><a href="#music">Music 🎶</a></li>
                </ul>
            </div>
            <a class="px-2  cursor-pointer" onclick="my_modal_2.showModal()">
                <img src="../assets/hollyeva.svg" alt="Holly Eva" class="w-32 rounded-full hidden lg:flex mt-4" />
                <img src="../assets/hollylogo.svg" alt="Holly Eva" class="w-32 rounded-full lg:hidden flex" />
            </a>
            <dialog id="my_modal_2" class="modal">
                <div class="modal-box">
                    <h3 class="text-lg font-bold">Happy Valentines Day Munchkin!</h3>
                    <p class="py-4">I thought I would make you this website as a gift :)</p>
                    <p class="py-4">Don't worry if you don't love the design, its easy to change and the main gift is I did all the setup! This site is for you to show off your music and to help with your upcoming music career!</p>
                    <p class="py-4">I love you more than anything and am so proud of you, I can't wait to be with you again so soon!</p>
                    <p class="py-4">All my love, Roman xxx</p>
                </div>
                <form method="dialog" class="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog>
        </div>
        <div class="navbar-center hidden lg:flex">
            <ul class="menu menu-horizontal px-1 dropdown font-serif font-semibold">
                <li><a href="#about">ABOUT</a></li>
                <li><a href="#music">MUSIC</a></li>
            </ul>
        </div>
        <div class="navbar-end">
            <a class="btn uppercase btn-small btn-primary" href="mailto:hollythomson38210@gmail.com">contact</a>
        </div>
    </nav>
</template>