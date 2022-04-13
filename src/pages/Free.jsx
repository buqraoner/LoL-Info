import React from 'react'
import FreeChampions from '../components/FreeChampionsWeekly/FreeChampions'
import Githubdata from '../components/github/Githubdata'
import Navbar from '../components/Navbar'


//Navbar,
//Haftalık Ücretsiz şampiyonların bulunduğu resimler,
//GithubData,ile birlikte gelen footer yapısı, footer için kullandım.


function Free() {
    return (
        <div>
            <Navbar />
            <FreeChampions />
            <Githubdata />
        </div>
    )
}

export default Free