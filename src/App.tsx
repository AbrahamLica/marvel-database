import { Fragment, useState } from "react";
import { GlobalStyle } from "./AppGlobalStyles";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import HomeCharacters from "./Components/Characters/HomeCharacters/HomeCharacters";
import DetailsCharacters from "./Components/Characters/DetailsCharacters/DetailsCharacters";

function App() {
  return (
    <Fragment>
      <GlobalStyle />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pagecharacters" element={<HomeCharacters />} />
          <Route path="/detailsCharacters" element={<DetailsCharacters />} />
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
