import * as C from "./styles";
import logo from "../../Media/logo.png";
import { useContext } from "react";
import { Context } from "../../Context/Context";
import { useNavigate } from "react-router-dom";
import { backToHome } from "../../Helpers/Functions";
import { goToSelectedCategory } from "../../Helpers/Functions";

const Header = () => {
  const { state, dispatch } = useContext(Context);
  const usenavigate = useNavigate();

  return (
    <C.Header>
      <C.TopHeader>
        <C.Logo src={logo} onClick={() => backToHome(dispatch, usenavigate)} />
        <button onClick={() => console.log(state.marvel)}>teste</button>
      </C.TopHeader>

      <C.BottomHeader>
        <C.CategoryText
          onClick={() => goToSelectedCategory("characters", dispatch, state)}
        >
          Characters
        </C.CategoryText>

        <C.CategoryText
          onClick={() => goToSelectedCategory("comics", dispatch, state)}
        >
          Comics
        </C.CategoryText>

        <C.CategoryText
          onClick={() => goToSelectedCategory("series", dispatch, state)}
        >
          Series
        </C.CategoryText>
      </C.BottomHeader>
    </C.Header>
  );
};
export default Header;
