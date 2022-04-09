import React from 'react'
import FreeChampions from '../components/FreeChampionsWeekly/FreeChampions'
import Githubdata from '../components/github/Githubdata'
import Navbar from '../components/Navbar'


//Navbar,Oyuncu arama ve 
//kendi bilgilerimin bulunduğu github data'sının bulunduğu footer'ının bulunduğu home.jsx'i
// Footer yazacaktım githubdata ters oldu biraz :D
function Free() {
    return (
        <div>
            <Navbar/>
            <FreeChampions />
            <Githubdata/>
        </div>
    )
}

export default Free