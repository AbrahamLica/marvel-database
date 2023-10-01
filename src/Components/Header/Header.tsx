import * as C from "./styles";
import * as G from "../../Helpers/GlobalStyles";
import logo from "../../Media/logo.png";
import { useContext } from "react";
import { Context } from "../../Context/Context";
import { useNavigate } from "react-router-dom";
import { backToHome } from "../../Helpers/Functions";
import { goToSelectedCategory } from "../../Helpers/Functions";
import githubIcon from "../../Media/github.png";
import linkedinIcon from "../../Media/linkedin2.png";

const Header = () => {
  const { state, dispatch } = useContext(Context);
  const usenavigate = useNavigate();

  return (
    <C.Header>
      <C.TopHeader>
        <C.FakeDiv>a</C.FakeDiv>
        <C.Logo src={logo} onClick={() => backToHome(dispatch, usenavigate)} />
        <C.ContainerSocialMedia>
          <G.Link href="https://github.com/AbrahamLica" target="_blank">
            <C.IconSocialMedia
              src={githubIcon}
              width="50px"
              cursorPointer
              margin="0 10px"
            ></C.IconSocialMedia>
          </G.Link>

          <G.Link
            href="https://www.linkedin.com/in/abraham-melquisedeque-pereira-licá-0a1736203"
            target="_blank"
          >
            <C.IconSocialMedia
              src={linkedinIcon}
              width="44px"
              cursorPointer
            ></C.IconSocialMedia>
          </G.Link>
        </C.ContainerSocialMedia>
      </C.TopHeader>

      <C.BottomHeader>
        <C.ContainerTest>
          <C.FakeDiv>a</C.FakeDiv>
          <G.Container displayFlex>
            <C.CategoryText
              onClick={() =>
                goToSelectedCategory("characters", dispatch, state)
              }
            >
              PERSONAGENS
            </C.CategoryText>

            <C.CategoryText
              onClick={() => goToSelectedCategory("comics", dispatch, state)}
            >
              QUADRINHOS
            </C.CategoryText>

            <C.CategoryText
              onClick={() => goToSelectedCategory("series", dispatch, state)}
            >
              SERIES
            </C.CategoryText>
          </G.Container>

          <C.ContainerCreator>
            <G.Text>
              Criado por{" "}
              <G.Link
                target="_blank"
                color="#e9190f"
                href="https://github.com/AbrahamLica"
              >
                Abraham Licá
              </G.Link>
            </G.Text>
          </C.ContainerCreator>
        </C.ContainerTest>
      </C.BottomHeader>
    </C.Header>
  );
};
export default Header;
