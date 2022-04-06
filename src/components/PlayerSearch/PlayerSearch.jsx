import React, { useState } from 'react'
import axios from "axios"

function PlayerSearcher() {
    const [searchText, setSearchText] = useState("");
    const [playerData, setPlayerData] = useState({});
    // arama kısmı
    const API_KEY = "RGAPI-219ebd5d-92d5-4054-9be4-370f4552857e";
    //Developer Keyi tanıttık

    function searchForPlayer(event) {
        //API CALL
        //TR Sunucusu için

        var APICallString = "https://tr1.api.riotgames.com/lol/summoner/v4/summoners/by-name/" + searchText + "?api_key=" + API_KEY;

        axios.get(APICallString).then(function (response) {
            console.log(response.data);
            setPlayerData(response.data);

        }).catch(function (error) {
            console.log(error);
        });
    }

    console.log(playerData);

    return (
        <div>
            <div className='container'>
                <h4>
                    League Of Legends Player Searcher
                </h4>
                <input type="text" placeholder="Enter Player Name" onChange={e => setSearchText(e.target.value)} />
                <button onClick={e => searchForPlayer(e)}>Search for player</button>
            </div>
            {JSON.stringify(playerData) != null ?
                <>
                    <p>{playerData.name}</p>
                    <img height={150} width={150} src={"http://ddragon.leagueoflegends.com/cdn/12.6.1/img/profileicon/" + playerData.profileIconId + ".png"} />
                    <p>{playerData.summonerLevel}</p>
                </>
                :
                <><p>We don't have player data</p></>}
        </div>
    )
}

export default PlayerSearcher;