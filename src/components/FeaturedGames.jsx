import axios from 'axios'
import React from 'react'
import { useEffect, useState } from 'react'

function FeaturedGames() {

    //Gerçekleşen maçları çağırma.

    const Apikey = "RGAPI-76c43f59-debd-45e7-bfe7-f7006c9b875c";

    //Challegner elo çağırma.
    const api = "https://tr1.api.riotgames.com/lol/league-exp/v4/entries/RANKED_SOLO_5x5/CHALLENGER/I?page=1&api_key=";



    const [games, setGames] = useState([]);
    const [games1, setGames1] = useState([]);
    const [games2, setGames2] = useState([]);
    //3 Kart şeklinde oyunda olan 3 oyuncu göstereceğimiz bilgilerini tutan state'ler.

    useEffect(() => {
        axios.get(api + Apikey)
            .then(res => {
                console.log(res.data);
                setGames(res.data[0]);
                setGames1(res.data[1]);
                setGames2(res.data[2]);

            }).catch(err => console.log(err))
    }, [])

    console.log(games);



    //Tier challenger
    //summonerName Sihirdar Adı


    // Üçlü kart yapısında oyuncuların bilgilerini göstereceğiz.
    return (
        <div>
            <div className="col">
                <h1 className='text-center mt-7'>En iyi  3 Oyuncu </h1>
                <div className="col-md-3">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">{games.summonerName}</h5>
                            <p className="card-text"> {games.tier} {games.leaguePoints} LP </p>
                            <p>Wins : {games.wins}sadf</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FeaturedGames