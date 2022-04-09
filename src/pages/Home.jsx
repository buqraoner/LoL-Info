import React from 'react'
import 'flowbite';
import Navbar from '../components/Navbar';
import "./styles.css"
import Githubdata from '../components/github/Githubdata';
import PlayerSearcher from '../components/PlayerSearch/PlayerSearch';
import Footer from '../components/Footer';



//Navbar,Oyuncu arama ve 
//kendi bilgilerimin bulunduğu github data'sının bulunduğu footer'ının bulunduğu home.jsx'i
// Footer yazacaktım githubdata ters oldu biraz :D

function Home() {
  return (
    <div>
      <Navbar />
      <PlayerSearcher />
      <Githubdata />
    </div>

  )
}

export default Home