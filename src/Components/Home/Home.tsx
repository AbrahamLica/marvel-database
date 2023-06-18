import * as C from "./AppStyles";
import logo from "../../Media/logo.png";
import { useEffect, useState } from "react";
import bannercharacters from "../../Media/characters.png";
import bannercomics from "../../Media/comics.png";
import bannercreators from "../../Media/creators.png";
import bannerevents from "../../Media/events.png";
import bannerseries from "../../Media/series.png";
import bannerstories from "../../Media/stories.png";

const Home = () => {
  const [isHoverText, setIsHoverText] = useState(false);
  const [isHoverBanner, setIsHoverBanner] = useState(false);
  const [banner, setBanner] = useState<string>();
  const [bannerajustado, setBannerajustado] = useState<string>();

  useEffect(() => {
    teste();
  }, [banner]);

  function handleMouseOverText(banner: string) {
    setIsHoverText(true);
    setBanner(banner);
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

  function teste() {
    if (banner == "characters") {
      return setBannerajustado(bannercharacters);
    } else if (banner == "comics") {
      return setBannerajustado(bannercomics);
    } else if (banner == "creators") {
      return setBannerajustado(bannercreators);
    } else if (banner == "events") {
      return setBannerajustado(bannerevents);
    } else if (banner == "series") {
      return setBannerajustado(bannerseries);
    } else if (banner == "stories") {
      return setBannerajustado(bannerstories);
    }
  }

  return (
    <C.MainContainer>
      <C.Header>
        <C.Logo src={logo} />
        <C.SubHeader>
          <C.CategoryText
            onMouseOver={() => handleMouseOverText("characters")}
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
            <C.ImgBanner src={bannerajustado}></C.ImgBanner>
          </C.Banner>

          <C.CategoryText
            onMouseOver={() => handleMouseOverText("comics")}
            onMouseOut={handleMouseOutText}
          >
            Comics
          </C.CategoryText>

          <C.CategoryText
            onMouseOver={() => handleMouseOverText("creators")}
            onMouseOut={handleMouseOutText}
          >
            Creators
          </C.CategoryText>
          <C.Banner></C.Banner>

          <C.CategoryText
            onMouseOver={() => handleMouseOverText("events")}
            onMouseOut={handleMouseOutText}
          >
            Events
          </C.CategoryText>

          <C.CategoryText
            onMouseOver={() => handleMouseOverText("series")}
            onMouseOut={handleMouseOutText}
          >
            Series
          </C.CategoryText>

          <C.CategoryText
            onMouseOver={() => handleMouseOverText("stories")}
            onMouseOut={handleMouseOutText}
          >
            Stories
          </C.CategoryText>
        </C.SubHeader>
      </C.Header>

    </C.MainContainer>
  );
};
export default Home;
