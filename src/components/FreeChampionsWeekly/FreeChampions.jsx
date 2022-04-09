import axios from 'axios'
import React, { useEffect, useState } from 'react'
import FeaturedGames from '../FeaturedGames';


function FreeChampions() {

    const [Champions, setChampions] = useState([]);



    //Apikeyim
    const apiKey = "RGAPI-76c43f59-debd-45e7-bfe7-f7006c9b875c"
    // request URL Haftanın ücretsizleri

    const requestURL = "https://tr1.api.riotgames.com/lol/platform/v3/champion-rotations?api_key="


    useEffect(() => {
        axios.get(requestURL + apiKey)
            .then(res => {
                console.log(res.data.freeChampionIds);
                setChampions(res.data.freeChampionIds);
            }).catch(err => console.log(err))

    }, [])

    //Hafta'nın bedava olarak gelen şampiyonların id'si STATE'e atıyoruz.















    return (
        <div>
            
        </div>
    )
}

export default FreeChampions