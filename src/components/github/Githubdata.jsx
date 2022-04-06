import React, { useEffect, useState } from 'react'
import axios from "axios"


function Githubdata() {
    const [userLogo,setUserLogo] = useState([]);
    const [userName,setUserName] = useState([]);
    const [data,setData] = useState([]);


    useEffect(() => {
        axios("https://api.github.com/users/buqraoner")
        .then((res) => setData(res.data))
        .catch((err) =>  console.log(err));

    }, []);


    







  return (
    <div></div>
  )
}

export default Githubdata