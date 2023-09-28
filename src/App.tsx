import { Fragment, useState } from "react";
import { GlobalStyle } from "./AppGlobalStyles";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home/Home";
import HomeSeries from "./Components/Home/LoadedItems/LoadedItems";
import Details from "./Components/Details/Details";

function App() {
  return (
    <Fragment>
      <GlobalStyle />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details" element={<Details />} />
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
