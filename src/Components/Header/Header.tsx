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

  useEffect(() => {}, [banner]);

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
        <C.CategoryText onClick={() => pageCharacters(`characters`)}>
          Characters
        </C.CategoryText>

        <C.CategoryText onClick={() => pageCharacters(`comics`)}>
          Comics
        </C.CategoryText>

        <C.CategoryText onClick={() => pageCharacters(`series`)}>
          Series
        </C.CategoryText>
      </C.BottomHeader>
    </C.Header>
  );
};
export default Header;
