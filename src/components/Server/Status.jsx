import React, { useEffect, useState } from 'react'
import axios from "axios";




function Status() {
    const [status, setStatus] = useState([]);

    useEffect(() => {
        axios("https://tr1.api.riotgames.com/lol/status/v3/shard-data?api_key=RGAPI-219ebd5d-92d5-4054-9be4-370f4552857e#")
            .then((res) => setStatus(res.data))
            .catch((err) => console.log(err));
    }, []);
    console.log(status.name)

    return (
        <div>

            {status.name}<br />
            {status.slug}<br />
            {status.hostname}<br />
            {status.region_tag}<br />



        </div>
    )
}

export default Status