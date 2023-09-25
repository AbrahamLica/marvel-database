import { Fragment, useState } from "react";
import { GlobalStyle } from "./AppGlobalStyles";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import HomeCharacters from "./Components/HomeCharacters/HomeCharacters";
import Details from "./Components/Details/Details";
import HomeComics from "./Components/HomeComics/HomeComics";
import HomeSeries from "./Components/HomeSeries/HomeSeries";

function App() {
  return (
    <Fragment>
      <GlobalStyle />

      <BrowserRouter >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pagecharacters" element={<HomeCharacters />} />
          <Route path="/pagecomics" element={<HomeComics />} />
          <Route path="/pageseries" element={<HomeSeries />} />
          <Route path="/details" element={<Details />} />
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
