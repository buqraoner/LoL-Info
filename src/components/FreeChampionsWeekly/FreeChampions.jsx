import axios from 'axios'
import React, { useEffect, useState } from 'react'
import FeaturedGames from '../FeaturedGames';


function FreeChampions() {


    //Haftalık ücretsiz gelen champlar
    const [freeChampions, setfreeChampions] = useState([]);


    //Tüm şampiyonların bilgilerinin tutulduğu yer
    const [allChampions, setAllChampions] = useState([]);


    //https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ahri_0.jpg
    //Api keyim
    const apiKey = "RGAPI-a7514509-dc6e-446c-bf11-ed30d7fb2c45"
    // request URL Haftanın ücretsizleri

    const requestURL = "https://tr1.api.riotgames.com/lol/platform/v3/champion-rotations?api_key="


    const ChampionsUrl = "https://ddragon.leagueoflegends.com/cdn/12.7.1/data/en_US/champion.json"




    useEffect(() => {
        axios.get(requestURL + apiKey)
            .then(res => {
                console.log(res.data.freeChampionIds + " ücretsiz idler");
                setfreeChampions(res.data.freeChampionIds);
            }).catch(err => console.log(err))


        axios.get(ChampionsUrl)
            .then(log => {
                setAllChampions(log.data.data);
                console.log(log.data.data + " keyler");
                console.log(log.data.data.Ahri.key + "ahri key");
            })
            



    }, [])


    //Hafta'nın bedava olarak gelen şampiyonların id'si STATE'e atıyoruz.

    console.log(freeChampions);

    /*
     {allChampions.map(champion => {
                    freeChampions.map(freeChampionID => {
                        if (champion.key == freeChampionID) {
                            return (
                                <div className="col-md-3">
                                    <div className="card">
                                        <div className="card-body">
                                            <p>Deneme </p>
                                            <h5 className="card-title">{champion.name}</h5>
                                            <p className="card-text"> {champion.title} </p>
                                            <img src={`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champion.id}_0.jpg`} />
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    })
                
            }
            )}

            */


    return (
        <>

           
        </>
    )
}


export default FreeChampions