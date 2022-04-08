import React, { useEffect, useState } from 'react'
import axios from "axios"
import Footer from '../Footer';


function Githubdata() {
  const [userLogo, setUserLogo] = useState([]);
  const [userName, setUserName] = useState([]);
  const [data, setData] = useState([]);


  useEffect(() => {
    axios("https://api.github.com/users/buqraoner")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
    console.log(data.res);

  }, []);


  console.log(data.login);
  console.log(data);


  return <Footer
    username={data.login}
    avatar={data.avatar_url}
    name={data.name}
    url={data.html_url}


  />;





}

export default Githubdata