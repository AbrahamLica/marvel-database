import { Fragment, useState } from 'react'
import { GlobalStyle } from './AppGlobalStyles'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home/Home'

function App() {
  

  return (
    <Fragment>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </Fragment>
  )
}

export default App
