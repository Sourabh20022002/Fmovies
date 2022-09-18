import React from 'react'
import logo from '../assests/logo-light.png'


const Header = () => {
  return (
<header class="text-white bg-black body-font ">
  <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <img href='#' src={logo} class="flex-icon w-20"/>
      <span class="ml-3 text-xl"></span>
    </a>
    <div class="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
      <a class="mr-5 hover:text-gray-500" href="https://fmovies.hn/home">Home</a>
      <a class="mr-5 hover:text-gray-500">Genre</a>
      <a class="mr-5 hover:text-gray-500">Country</a>
      <a class="mr-5 hover:text-gray-500">Movies</a>
      
      <a class="mr-5 hover:text-gray-500" href="https://fmovies.hn/tv-show">Tv Shows</a>
      <a class="mr-5 hover:text-gray-500" href="https://fmovies.hn/top-imdb">Top IMDB</a>
      <a class="mr-5 hover:text-gray-500" href="https://fmovies.hn/android-movies-apk">Android App</a>
    </div>
    <button class="inline-flex items-center bg-slate-900 text-white border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 hover:text-black  rounded text-base mt-4 md:mt-0">Login
      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
        <path d="M5 12h14M12 5l7 7-7 7"></path>
      </svg>
    </button>
  </div>
</header>
  )
}

export default Header