import * as C from "./AppStyles";
import logo from "../../Media/logo.png";
import { useState } from "react";

const Home = () => {
  const [style, setStyle] = useState({ display: "none" });

  const none = { display: "none" };
  const block = { display: "block" };

  return (
    <C.MainContainer>
      <C.Header>
        <C.Logo src={logo} />
        <C.SubHeader>
          <C.CategoryText
            onMouseEnter={() => setStyle(block)}
            onMouseOut={() => setStyle(none)}
            >
            Characters
          </C.CategoryText>
          <C.CharactersBanner style={style}></C.CharactersBanner>

          <C.CategoryText>Comics</C.CategoryText>

          <C.CategoryText>Creators</C.CategoryText>

          <C.CategoryText>Events</C.CategoryText>

          <C.CategoryText>Series</C.CategoryText>

          <C.CategoryText>Stories</C.CategoryText>
        </C.SubHeader>
      </C.Header>
    </C.MainContainer>
  );
};

export default Home;
