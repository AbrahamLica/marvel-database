import { useEffect } from "react";
import Header from "../../Header/Header";
import * as C from "./styles";
import * as G from "../../../Helpers/GlobalStyles";
import Footer from "../Footer/Footer";
import { useContext } from "react";
import { Context } from "../../../Context/Context";
import LoadedItems from "../LoadedItems/LoadedItems";

const Home = () => {
  const { state, dispatch } = useContext(Context);

  return (
    <C.MainContainer>
      <Header></Header>

      <G.Container
        displayFlex
        justifyContent="center"
        alignItems="center"
        width="100%"
        column
      >
        {state.marvel.loadedItems ? <LoadedItems></LoadedItems> : null}

        {state.marvel.loadedItems ? <Footer></Footer> : null}
      </G.Container>
    </C.MainContainer>
  );
};

export default Home;
