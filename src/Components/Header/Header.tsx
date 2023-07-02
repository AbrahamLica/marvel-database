import * as C from "./AppStyles";
import logo from "../../Media/logo.png";
import { useContext, useEffect, useState } from "react";
import { Context } from "../../Context/Context";
import bannercharacters from "../../Media/characters.png";
import bannercomics from "../../Media/comics.png";
import bannerseries from "../../Media/series.png";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const { state, dispatch } = useContext(Context);
  const [isHoverText, setIsHoverText] = useState(false);
  const [isHoverBanner, setIsHoverBanner] = useState(false);
  const [banner, setBanner] = useState<string>();
  const [bannerajustado, setBannerajustado] = useState<string>();
  const usenavigate = useNavigate();

  useEffect(() => {
    setNameBanner();
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
  }

  function handleMouseOutBanner() {
    setIsHoverBanner(false);
    setIsHoverText(false);
  }

  function setNameBanner() {
    if (banner == "characters") {
      return setBannerajustado(bannercharacters);
    } else if (banner == "comics") {
      return setBannerajustado(bannercomics);
    } else if (banner == "series") {
      return setBannerajustado(bannerseries);
    }
  }

  function pageCharacters(page: string) {
    usenavigate(`/page${page}`);
    dispatch({
      type: "CLEAR_ALL_INFORMATIONS_2",
      payload: {
        id: 0,
        name: "",
        description: "",
        detailsCharacterOpen: false,
        detailsComicsOpen: false,
        detailsCreatorsOpen: false,
        detailsEventsOpen: false,
        detailsSeriesOpen: false,
        detailsStoriesOpen: false,
        img: "",
        homePage: true,
        openPageSelectedCategory: true,
        selectedCategory: "",
        currentPage: 0,
        loading: false,
        series: [],
        url: "",
        creators: [],
        dates: [],
        pageCount: "",
        variants: [],
      },
    });
  }

  function backHome() {
    dispatch({
      type: "BACK_HOME",
      payload: {
        id: 0,
        name: "",
        description: "",
        anythingOpen: false,
        img: "",
        series: [],
        creators: [],
        dates: [],
        pageCount: "",
        variants: [],
        detailsCharacterOpen: false,
        openPageSelectedCategory: true,
        currentPage: 0,
      },
    });
    usenavigate("/");
  }

  return (
    <C.Header>
      <C.TopHeader>
        <C.Logo src={logo} onClick={backHome} />
      </C.TopHeader>

      <C.BottomHeader>
        <C.CategoryText
          onMouseOver={() => handleMouseOverText("characters")}
          onMouseOut={handleMouseOutText}
        >
          Characters
        </C.CategoryText>

        <C.CategoryText
          onMouseOver={() => handleMouseOverText("comics")}
          onMouseOut={handleMouseOutText}
        >
          Comics
        </C.CategoryText>

        <C.CategoryText
          onMouseOver={() => handleMouseOverText("series")}
          onMouseOut={handleMouseOutText}
        >
          Series
        </C.CategoryText>
      </C.BottomHeader>

      <C.Banner
        onMouseOver={handleMouseOverBanner}
        onMouseOut={handleMouseOutBanner}
        style={{
          height: isHoverText || isHoverBanner ? "75vh" : "0%",
        }}
      >
        <C.ImgBanner
          onClick={() => pageCharacters(`${banner}`)}
          src={bannerajustado}
        ></C.ImgBanner>
      </C.Banner>

    </C.Header>
  );
};
export default Header;
