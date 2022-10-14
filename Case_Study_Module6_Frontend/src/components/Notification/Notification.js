import React from 'react';

const Notification = () => {

    return (
        <div>

            <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous"/>
            <div class="flex flex-col justify-center items-center">

                <div class="md:w-1/3 sm:w-full rounded-lg shadow-lg bg-white my-3">
                    <div class="flex justify-between border-b border-gray-100 px-5 py-4">
                        <div>

                            <span class="font-bold text-gray-700 text-lg">Notification</span>
                        </div>
                        <div>
                            <button></button>
                        </div>
                    </div>

                    <div class="px-10 py-5 text-gray-600">
                        Lorem ipsum dolor sit amet, consectetur adipi scing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </div>

                    <div class="px-5 py-4 flex justify-end">

                    </div>
                </div>
            </div>


        </div>
    );
};

export default Notification;
