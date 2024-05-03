import React from 'react';
import {Link, BrowserRouter as Router } from 'react-router-dom';
import logo from "../assets/ghosthunterlogo_udenbg.png";

function Navbar() {
  return (

    <Router>
        <head>
            <link rel="preconnect" href='https://fonts.googleapis.com' />
            <link rel="preconnect" href='https://fonts.gstatic.com' crossorigin />
            <link href="https://fonts.googleapis.com/css2?family=Creepster&display=swap" rel="stylesheet" />
        </head>
        <nav class="bg-white border-gray-200 dark:bg-gray-900">
            <div class="max-w-screen-xl flex flex-wrap justify-center items-center mx-auto p-4">
                <div class="hidden w-full md:block md:w-auto" id="navbar-default">
                <ul class="flex flex-row items-center justify-center p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 ">
                    <li>
                    <Link to={'index.js'} class="block py-2 px-3 font-hind-guntur text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">Shop</Link>
                    </li>
                    <li>
                    <Link to={'index.js'} class="block py-2 px-3 font-hind-guntur text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">About</Link>
                    </li>
                    <li>
                    <Link to={'index.js'} class="block py-2 px-3 font-hind-guntur text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</Link>
                    </li>
                    <div>
                    <a href="#" class="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src={logo} class="h-16 w-16"  alt="Ghosthunting Logo" />
                    <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white font-creepster">Ghosthuntning.io</span>
                    </a>
                    </div>
                    <li>
                    <Link to={'index.js'} class="block py-2 px-3 font-hind-guntur text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Account</Link>
                    </li>
                    <li>
                    <Link to={'index.js'} class="block py-2 px-3 font-hind-guntur text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Search</Link>
                    </li>
                    <li>
                    <Link to={'index.js'} class="block py-2 px-3 font-hind-guntur text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Bag</Link>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    </Router>

  );
}

export default Navbar;
