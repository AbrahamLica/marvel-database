import React from "react";
import * as C from "./AppStyles";
import logo from "../../Media/logo.png";
import { useEffect, useState } from "react";
import bannercharacters from "../../Media/characters.png";
import bannercomics from "../../Media/comics.png";

const Home = () => {
  const [isHoverText, setIsHoverText] = useState(false);
  const [isHoverBanner, setIsHoverBanner] = useState(false);
  const [bannerCharacters, setBannerCharacters] = useState(false);
  const [bannerComics, setBannerComics] = useState();
  // const [bannerCharacters, setCategoryName] = useState<any>();
  // const [bannerCharacters, setCategoryName] = useState<any>();
  // const [bannerCharacters, setCategoryName] = useState<any>();
  // const [bannerCharacters, setCategoryName] = useState<any>();

  useEffect(() => {
  }, []);


  function handleMouseOverText() {
    setIsHoverText(true);
    setBannerCharacters(true);
  }

  function handleMouseOutText() {
    setIsHoverText(false);
  }

  function handleMouseOverBanner() {
    setIsHoverBanner(true);
    if (isHoverText == false) {
      setIsHoverBanner(false);
    }
  }

  function handleMouseOutBanner() {
    setIsHoverBanner(false);
    setIsHoverText(false);
  }

  return (
    <C.MainContainer>
      <C.Header>
        <C.Logo src={logo} />
        <C.SubHeader>
          <C.CategoryText
            onMouseOver={handleMouseOverText}
            onMouseOut={handleMouseOutText}
          >
            Characters
          </C.CategoryText>

          <C.Banner
            onMouseOver={handleMouseOverBanner}
            onMouseOut={handleMouseOutBanner}
            style={{
              height: isHoverText || isHoverBanner ? "75vh" : "0%",
            }}
          >
            <C.ImgBanner
              {}        
            ></C.ImgBanner>
          </C.Banner>

          <C.CategoryText
            onMouseOver={handleMouseOverText}
            onMouseOut={handleMouseOutText}
          >
            Comics
          </C.CategoryText>

          <C.CategoryText>Creators</C.CategoryText>
          <C.Banner></C.Banner>

          <C.CategoryText>Events</C.CategoryText>

          <C.CategoryText>Series</C.CategoryText>

          <C.CategoryText>Stories</C.CategoryText>
        </C.SubHeader>
      </C.Header>

      {/* <button onClick={teste2}>teste</button> */}
    </C.MainContainer>
  );
};
export default Home;
