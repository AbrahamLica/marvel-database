import { useEffect } from "react";
import Header from "../../Header/Header";
import * as C from "./styles";
import Footer from "../Footer/Footer";
import { useContext } from "react";
import { Context } from "../../../Context/Context";
import LoadedItems from "../LoadedItems/LoadedItems";

const Home = () => {
  const { state, dispatch } = useContext(Context);

  return (
    <C.MainContainer>
      <Header></Header>

      {state.marvel.loadedItems ? <LoadedItems></LoadedItems> : null}

      <Footer></Footer>
    </C.MainContainer>
  );
};

export default Home;
