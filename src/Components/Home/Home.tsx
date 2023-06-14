import React, { useEffect, useState } from "react";
import * as C from "../../AppStyles";
import { RequisicaoType } from "../../Types/Types";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../../Context/Context";

const Home = () => {
  const { state, dispatch } = useContext(Context);
  const [requisicao, setRequisicao] = useState<RequisicaoType[]>([]);
  const [offSet, setOffSet] = useState<number>(0);
  const usenavigate = useNavigate();

  const Hash = "4a8b729d09d1d2ad3fb626dff7e2165d";
  const publicKey = "8df0db429915d47e065eb03b37ca9039";

  const [url, setUrl] = useState(
    `http://gateway.marvel.com/v1/public/characters?ts=1&apikey=${publicKey}&hash=${Hash}&limit=100&offset=${offSet}`
  );

  useEffect(() => {
    executarRequisicao();
  }, [offSet, url]);

  async function executarRequisicao() {
    let req = await fetch(url);
    let json = await req.json();
    setRequisicao(json.data.results);
    setUrl(
      `http://gateway.marvel.com/v1/public/characters?ts=1&apikey=${publicKey}&hash=${Hash}&limit=100&offset=${offSet}`
    );
  }

  async function NextPage() {
    setOffSet((valor_antigo) => valor_antigo + 100);
    executarRequisicao();
  }

  function openDetails(
    name: string,
    id: number,
    description: string,
    img: string,
    series: string[]
  ) {

    dispatch({
      type: "OPEN_DETAILS",
      payload: {
        id: id,
        name: name,
        description: description,
        anythingOpen: true,
        img: img,
        series: series
      },
    });

    usenavigate("/details");
  }


  function teste2() {
    console.log(offSet);
  }

  return (
    <C.MainContainer>
      <C.ContainerCards>
        {requisicao.map((item, index) => (
          <C.ContainerCard>
            <C.ImgCard
              src={`${item.thumbnail?.path}.${item.thumbnail?.extension}`}
            />
            <C.Text fontSize="20px">{item.name}</C.Text>
            <C.ButtonDetails
              onClick={()=> openDetails(
                item.name,
                item.id,
                item.description,
                item.thumbnail.path,
                item.series.items
              )}
            >
              Details
            </C.ButtonDetails>
          </C.ContainerCard>
        ))}
      </C.ContainerCards>

      <button onClick={NextPage}>Next Page</button>

      <button onClick={teste2}>teste2</button>
    </C.MainContainer>
  );
};

export default Home;
