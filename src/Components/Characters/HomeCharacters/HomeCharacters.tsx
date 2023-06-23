import React, { Fragment, useEffect, useState } from "react";
import * as C from "./AppStyles";
import { RequisicaoType } from "../../../Types/Types";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../../../Context/Context";
import Header from "../../Header/Header";
import Footer from '../../Footer/Footer'


const HomeCharacters = () => {
  const { state, dispatch } = useContext(Context);
  const [requisicao, setRequisicao] = useState<RequisicaoType[]>([]);
  const usenavigate = useNavigate();
  const Hash = "4a8b729d09d1d2ad3fb626dff7e2165d";
  const publicKey = "8df0db429915d47e065eb03b37ca9039";

  useEffect(() => {
    executarRequisicao();
  }, [state.marvel.currentPage]);

  async function executarRequisicao() {
    dispatch({
      type: "SET_LOADING",
      payload: {
        loading: true
      },
    })
    // setLoading(true);
    let req = await fetch(
      `http://gateway.marvel.com/v1/public/characters?ts=1&apikey=${publicKey}&hash=${Hash}&limit=100&offset=${state.marvel.currentPage}`
    );
    let json = await req.json();
    setRequisicao(json.data.results);
    setTimeout(() => {
      // setLoading(false);
      dispatch({
        type: "SET_LOADING",
        payload: {
          loading: false
        },
      })
    }, 1000);
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
        series: series,
      },
    });

    usenavigate("/detailsCharacters");
  }

  function backHome() {
    usenavigate("/");
  }

  function backPage() {
    dispatch({
      type: "BACK_PAGE",
      payload: {
        currentPage: state.marvel.currentPage - 100,
      },
    });
    executarRequisicao();
  }

  function nextPage() {
    dispatch({
      type: "NEXT_PAGE",
      payload: {
        currentPage: (state.marvel.currentPage += 100),
      },
    });
    executarRequisicao();
  }

  return (
    <C.MainContainer>
      <Header></Header>
      <C.MainContainerCards>
        {state.marvel.loading ? (
          <C.newtonsCradle>
            <C.newtonsCradleDot></C.newtonsCradleDot>
            <C.newtonsCradleDot></C.newtonsCradleDot>
            <C.newtonsCradleDot></C.newtonsCradleDot>
            <C.newtonsCradleDot></C.newtonsCradleDot>
          </C.newtonsCradle>
        ) : (
          <C.ContainerCards>
            {requisicao.map((item, index) => (
              <C.ContainerCard>
                <C.ImgCard
                  onClick={() =>
                    openDetails(
                      item.name,
                      item.id,
                      item.description,
                      item.thumbnail.path,
                      item.series.items
                    )
                  }
                  src={`${item?.thumbnail?.path}.${item?.thumbnail?.extension}`}
                />
                <C.CharacterName
                  onClick={() =>
                    openDetails(
                      item.name,
                      item.id,
                      item.description,
                      item.thumbnail.path,
                      item.series.items
                    )
                  }
                >
                  {item.name}
                </C.CharacterName>
                <C.ButtonDetails
                  onClick={() =>
                    openDetails(
                      item.name,
                      item.id,
                      item.description,
                      item.thumbnail.path,
                      item.series.items
                    )
                  }
                >
                  Details
                </C.ButtonDetails>
              </C.ContainerCard>
            ))}
          </C.ContainerCards>
        )}

        {/* <C.ContainerButtons>
          {loading == true ? (
              null
          ) : (
            <div>
            {state.marvel.currentPage >= 100 && (
              <button onClick={backPage}>Back Page</button>
            )}
            <button onClick={nextPage}>Next Page</button>
  
            <button onClick={teste}>teste</button>
            </div>
          )}
        </C.ContainerButtons> */}

        {state.marvel.loading == true ? null : (
          <Footer></Footer>
        )}
      </C.MainContainerCards>
    </C.MainContainer>
  );
};

export default HomeCharacters;
