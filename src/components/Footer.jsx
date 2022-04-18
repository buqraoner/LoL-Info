import React from 'react'


function Footer({ username, avatar, name, url }) {

    return (

        
        <footer className="p-0 bg-gray-800 rounded-md shadow md:px-6 md:py-8 pb dark:bg-gray-800 mt-20 overflow m-auto footer-ayar ">
            <div className="sm:flex sm:items-center sm:justify-between">
                <a href={url} className="flex items-center mb-4 sm:mb-0">
                    <img src={avatar} className="mr-3 h-8" alt="Avatar" />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white text-md">{name}</span>
                </a>
                <p className='text-center'><strong>React </strong>bilgimi geliştirmek için yaptığım proje.</p>
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
        </footer>
        


    )
}

export default Footer