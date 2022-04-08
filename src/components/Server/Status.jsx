import React, { useEffect, useState } from 'react'
import axios from "axios";




function Status() {
    const [status, setStatus] = useState([]);
    const [services,setServices]= useState([{}]);

    useEffect(() => {
        axios("https://tr1.api.riotgames.com/lol/status/v3/shard-data?api_key=RGAPI-f5f8f709-07c8-4b78-a6e1-bc47fc4c6880")
            .then((res) => setStatus(res.data))
            .catch((err) => console.log(err));
    }, []);
    console.log(status.name)

    console.log(status);

    return (
        <div>

            {status.name}<br />
            {status.slug}<br />
            {status.hostname}<br />
            {status.region_tag}<br />
            <p>Merhaba Locale {"  "+status.locales}</p><br/>
            
            

        </div>
    )
}

export default Status