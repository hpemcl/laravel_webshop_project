import React from 'react';

function footer() {
  return (
    <>
        <footer class="px-28 py-10">
            <hr></hr>
            <div class="flex justify-center pt-9">
                <p class="font-hind-guntur font-thin">&copy; Copyright 2024 Ghosthunting.io | Rangers&reg;</p>
            </div>
            <div class="flex flex-row items-start pt-9">
                {/* <!-- Left Column --> */}
                <div class="flex flex-col items-start pr-40">
                    <div class="flex flex-row">
                        <h1 class="text-gray-900 font-hind-guntur font-bold text-2xl underline underline-offset-4">NAV</h1>
                        <h1 class="text-gray-900 font-hind-guntur font-bold text-2xl">IGATE</h1>
                    </div>
                <div class="pt-2">
                    <p class="text-gray-900 font-hind-guntur font-normal text-lg pt-2">Shop</p>
                    <p class="text-gray-900 font-hind-guntur font-normal text-lg pt-2">Account</p>
                    <p class="text-gray-900 font-hind-guntur font-normal text-lg pt-2">About</p>
                    <p class="text-gray-900 font-hind-guntur font-normal text-lg pt-2">Contact</p>
                </div>
                    
                </div>

                {/* <!-- Middle Column --> */}
                <div class="flex flex-col items-start pr-40">
                    <div class="flex flex-row">
                        <h1 class="text-gray-900 font-hind-guntur font-bold text-2xl underline underline-offset-4">HEL</h1>
                        <h1 class="text-gray-900 font-hind-guntur font-bold text-2xl">P</h1>
                    </div>
                <div class="pt-2">
                    <p class="text-gray-900 font-hind-guntur font-normal text-lg pt-2">Shipping & delivery</p>
                    <p class="text-gray-900 font-hind-guntur font-normal text-lg pt-2">Exchange & return </p>
                    <p class="text-gray-900 font-hind-guntur font-normal text-lg pt-2">Terms & privacy</p>
                    <p class="text-gray-900 font-hind-guntur font-normal text-lg pt-2">Faq</p>
                </div>
                    
                </div>


                {/* <!-- Right Column --> */}
                <div class="flex flex-col items-start">
                    <div class="flex flex-row">
                        <h1 class="text-gray-900 font-hind-guntur font-bold text-2xl underline underline-offset-4">SOC</h1>
                        <h1 class="text-gray-900 font-hind-guntur font-bold text-2xl">IALS</h1>
                    </div>
                <div class="pt-2">
                    <p class="text-gray-900 font-hind-guntur font-normal text-lg pt-2">Facebook</p>
                    <p class="text-gray-900 font-hind-guntur font-normal text-lg pt-2">Instagram</p>
                </div>
                    
                </div>
            </div>

        
        </footer>
    </>
  );
};

export default footer;
