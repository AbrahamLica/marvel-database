import * as C from "./AppStyles";
import Header from "../../Header/Header";
import { ContainerCards } from "./AppStyles";

const HomeCharacters = () => {
  return (
    <C.MainContainer>
      <Header></Header>
      <C.MainContainerCards>
        <ContainerCards></ContainerCards> 
      </C.MainContainerCards>
    </C.MainContainer>
  );
};

export default HomeCharacters;
