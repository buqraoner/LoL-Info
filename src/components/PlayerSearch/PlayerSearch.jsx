import React, { useState } from 'react'
import axios from "axios"


function PlayerSearcher() {
    const [searchText, setSearchText] = useState("");
    const [playerData, setPlayerData] = useState({});
    // arama kısmı
    const API_KEY = "RGAPI-f5f8f709-07c8-4b78-a6e1-bc47fc4c6880";
    //const CheetosKey = https://tr1.api.riotgames.com/lol/summoner/v4/summoners/by-name/Cheetos?api_key=RGAPI-f5f8f709-07c8-4b78-a6e1-bc47fc4c6880
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
    console.log(playerData.name);

    return (
        <div>
            <h4 className='SearchHeader'>
                <strong>Gerçek zamanli oyuncu istatistikleri</strong>
            </h4>

            <div className='searchBox'>
                <div className='searchBox__input'>
                    <input className='bugo' type="text" placeholder="Oyun içi sihirdar arama" onChange={e => setSearchText(e.target.value)}
                    />
                    <button className="opacity-80" onClick={e => searchForPlayer(e)}>
                        Arama</button>
                </div>
            </div>

            {JSON.stringify(playerData) != "{}" ?

                <div className='PlayerInfoCard'>
                    <div className="h-56 grid grid-cols-3 gap-4 content-center mt-5" >
                        <div></div>
                        <div className="Player-Card max-w-sm  rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 ">
                            <div className="flex justify-end px-4 pt-4">
                            </div>
                            <div className="flex flex-col items-center pb-10">
                                <img className="mb-3 w-24 h-24 rounded-full shadow-md"
                                    src={"http://ddragon.leagueoflegends.com/cdn/12.6.1/img/profileicon/" + playerData.profileIconId + ".png"}
                                    alt="Player Image" />
                                <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                                <strong>{playerData.name}</strong></h5>
                                <span className="text-sm text-gray-900 dark:text-gray-900">
                                    <strong>Summoner Level : {playerData.summonerLevel}</strong>
                                </span>
                                <div className="flex mt-4 space-x-3 lg:mt-6">
                                    <a href="#" class="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 
                                    focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                        Add friend</a>
                                    <a href="#" class="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-gray-900 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700">Message</a>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                :
                <><p>Bu isimde bir oyuncu yok</p></>}
        </div>
    )
}

export default PlayerSearcher;