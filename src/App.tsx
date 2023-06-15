import { Fragment, useState } from 'react'
import { GlobalStyle } from './AppGlobalStyles'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomeCharacters from './Components/Characters/HomeCharacters/HomeCharacters'
import DetailsCharacters from './Components/Characters/DetailsCharacters/DetailsCharacters'
import Home from './Components/Home/Home'

function App() {
  

  return (
    <Fragment>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/homeCharacters" element={<HomeCharacters />} />
          <Route path="/detailsCharacters" element={<DetailsCharacters />} />
        </Routes>
      </BrowserRouter>
    </Fragment>
  )
}

export default App
