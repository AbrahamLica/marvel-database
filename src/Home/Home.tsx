import React, { useEffect, useState } from "react";
import * as C from "../AppStyles";

const Home = () => {

const [requisicao, setRequisicao] = useState()

const Hash = '4a8b729d09d1d2ad3fb626dff7e2165d'
const publicKey = '8df0db429915d47e065eb03b37ca9039'
const [url, setUrl] = useState(`http://gateway.marvel.com/v1/public/characters?ts=1&apikey=${publicKey}&hash=${Hash}`)


useEffect(() => {
  executarRequisicao();
}, []);


async function executarRequisicao() {
    let req = await fetch(url);
    let json = await req.json();
    setRequisicao(json.results);
}

 return(

  <C.MainContainer>
      teste
  </C.MainContainer>
 )
};

export default Home;
