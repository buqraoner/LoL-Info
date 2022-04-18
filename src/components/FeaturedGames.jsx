import axios from 'axios'
import React from 'react'
import { useEffect, useState } from 'react'

function FeaturedGames() {

    // Amacım burada  arama  olmadığında yani playerSearch tetiklenmediğinde
    //burada hazır olarak oyunda maç yapan oyuncularla ilgili maçlarala ulaşmak onları columns olarak göstermekti fakat 

    // Apilerimin sürekli değişmesi ve bu bilgilere ulaşamadım farklı bir key almam gerekiyormuş. onuda paylaşmam yasak.
    // Bu yüzden buraya en iyi oyuncuyu gösteren 3 lü kart sistemi yapmaya çalıştım.
    

    //Gerçekleşen maçları çağırma.

    //Api Keyi

    const Apikey = "RGAPI-98931255-4f85-438f-ae00-63923b2cedfc";

    //Challegner elodaki oyuncuları çağırma çağırma.
    const api = "https://tr1.api.riotgames.com/lol/league-exp/v4/entries/RANKED_SOLO_5x5/CHALLENGER/I?page=1&api_key=";


    const [games0, setGames0] = useState([]);
    const [games1, setGames1] = useState([]);
    const [games2, setGames2] = useState([]);
    //3 Kart şeklinde oyunda olan 3 oyuncu göstereceğimiz bilgilerini tutan state'ler.

    const [player1, setPlayer1] = useState([]);
    const [player2, setPlayer2] = useState([]);
    const [player3, setPlayer3] = useState([]);

    // Oyuncuların Profil iconlarını tutmak için ayrı bir state'i oluşturuyoruz.
    

    // Bu kadar ayrı state oluşturmamızın nedeni tek bir api ile hem profil iconlara hem ilk 3 oyuncuya erişemiyoruz.
    // En iyi oyunculara erişebiliyoruz fakat profil iconları gelmiyor,onun için ayrı bir state oluşturuyoruz.
    // Profil iconlarını almak için player1.summonerName lazım fakat Profil1.profilicon yok. bize lazım olan bu bilgiyi almak için
    

    // Player1.summonerName ile ilgili bir api çağırıyoruz.

    const [player1img, setPlayer1img] = useState([]);
    const [player2img, setPlayer2img] = useState([]);
    const [player3img, setPlayer3img] = useState([]);



    var ApiCall1 = "https://tr1.api.riotgames.com/lol/summoner/v4/summoners/by-name/" + player1 + "?api_key=" + Apikey;
    var ApiCall2 = "https://tr1.api.riotgames.com/lol/summoner/v4/summoners/by-name/" + player2 + "?api_key=" + Apikey;
    var ApiCall3 = "https://tr1.api.riotgames.com/lol/summoner/v4/summoners/by-name/" + player3 + "?api_key=" + Apikey;


    useEffect(() => {
        var fetchPlayer = async () => {
         axios.get(api + Apikey)
                .then(res => {
                    console.log(res.data);
                    setGames0(res.data[0]);
                    setGames1(res.data[1]);
                    setGames2(res.data[2]);
                    setPlayer1(res.data[0].summonerName);
                    setPlayer2(res.data[1].summonerName);
                    setPlayer3(res.data[2].summonerName);

                }).catch(err => console.log(err))
        }


        fetchPlayer();



        /*  for (var i = 0; i < 2; i++) {
  
              axios.get(ApiCall + "games" + i .summonerName + "?api_key=" + Apikey)
                  .then(res => {
                      setPlayer1 = res.data;
                      console.log(res.data);
  
                  }).catch(err => console.log(err))
  
          }
          */



    }, [])


    // losses
    //queueType
    //SummonerId
    //SummonerType
    //leagueId

    //Kazanma kaybetme oranı küsüratlı geliyor 57.32523 falan diye onu burada düzelttim.

    function winrate(wins, losses) {
        let result = (wins / (wins + losses)) * 100;

        return result.toFixed(0);

    }



     
   
    

    const getplayer = async () => {

        axios.get(ApiCall1)
            .then(res => {
                console.log(res.data)
                setPlayer1img(res.data);
            })



        axios.get(ApiCall2)
            .then(res => {
                console.log(res.data)
                setPlayer2img(res.data);
            })


        axios.get(ApiCall3)
            .then(res => {
                console.log(res.data)
                setPlayer3img(res.data);
            })

    }

    




    useEffect(() => {

        getplayer();
        getplayer();
    }, [])

    setInterval(() => {
        getplayer();
    }, 1000000)













    return (
        <div>
            <div className="columns m-auto">
                <div className="col text-center mt-2">
                    <h1 className='text-center mt-7'><strong>En iyi  3 Oyuncu</strong> </h1>
                    <div className="columns-3 mt-7 ">
                        <div className="card pt-5">
                            <div className="card-body border-2">
                                <img className='h-20 w-20 float-left'
                                    src={"http://ddragon.leagueoflegends.com/cdn/12.6.1/img/profileicon/" + player1img.profileIconId + ".png"}
                                    alt="asdfsad"></img>
                                <h5 className="card-title text-sm text-sky-500">{games0.summonerName}</h5>
                                <p className="card-text text-xs text-sky-50"> {games0.tier} {games0.leaguePoints} LP </p>
                                <p className='text-xs text-sky-50'>Wins:  {games0.wins}</p>
                                <p className='text-xs text-lime-600'>% {winrate(games0.wins, games0.losses)}</p>
                            </div>
                        </div>
                        <div className="card pt-5">
                            <div className="card-body p-10 border-2">
                                <img className="h-20 w-20 float-left"
                                    src={"http://ddragon.leagueoflegends.com/cdn/12.6.1/img/profileicon/" + player2img.profileIconId + ".png"}
                                    alt=""></img>
                                <h5 className="card-title text-sm text-sky-500">{games1.summonerName}</h5>
                                <p className="card-text text-xs text-sky-50"> {games1.tier} {games1.leaguePoints} LP </p>
                                <p className='text-xs text-sky-50'>Wins: {games1.wins}</p>
                                <p className='text-xs text-lime-600'>% {winrate(games1.wins, games1.losses)}</p>
                            </div>
                        </div>
                        <div className="card pt-5 ">
                            <div className="card-body p-10 border-2">
                                <img className=' h-20 w-20 float-left'
                                    src={"http://ddragon.leagueoflegends.com/cdn/12.6.1/img/profileicon/" + player3img.profileIconId + ".png"}
                                    alt=""></img>
                                <h5 className="card-title text-sm text-sky-500">{games2.summonerName}</h5>
                                <p className="card-text text-xs"> {games2.tier} {games2.leaguePoints} LP </p>
                                <p className='text-xs text-sky-50 '>Wins: {games2.wins}</p>
                                <p className='text-xs text-lime-600'> % {winrate(games2.wins, games2.losses)}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FeaturedGames