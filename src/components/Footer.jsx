import React from 'react'


function Footer({ username, avatar, name, url }) {

    return (


        <footer className="p-4 bg-gray-800 rounded-lg shadow md:px-6 md:py-8 dark:bg-gray-800 mt-20" >
            <div className="sm:flex sm:items-center sm:justify-between">
                <a href={url} className="flex items-center mb-4 sm:mb-0">
                    <img src={avatar} className="mr-3 h-8" alt="Avatar" />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">{name}</span>
                </a>
                <ul className="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
                    <li>
                        <a href="/status" className="mr-4 hover:underline md:mr-6 ">Status</a>
                    </li>
                    <li>
                        <a href="/statistics" className="mr-4 hover:underline md:mr-6">istatistikler</a>
                    </li>

                    <li>
                        <a href="{url}" className="hover:underline">Contact</a>
                    </li>
                </ul>
            </div>
            <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
            <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2022 
            <a href={url} class="hover:underline"><strong> React</strong></a> bilgimi geliştirmek için yaptığım proje.
            </span>                
        </footer>



    )
}

export default Footer