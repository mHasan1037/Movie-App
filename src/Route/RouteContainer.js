import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import FooterContainer from '../Components/Footer/FooterContainer'
import HeaderContainer from '../Components/Header/HeaderContainer'
import AboutApp from '../Container/About/AboutApp'
import HomeContainer from '../Container/Home/HomeContainer'
import MoviesContainer from '../Container/Movies/MoviesContainer'
import SeriesContainer from '../Container/Series/SeriesContainer'
import DetailsContainer from '../Container/Details/DetailsContainer'

const RouteContainer = () => {
  return (
    <>
       <BrowserRouter basename='/movie-app'>
          <HeaderContainer />
          <Routes>
             <Route path="/" element={ <HomeContainer /> } />
             <Route exact path="/movie-app" element={ <HomeContainer /> } />
             <Route path="/movies" element={ <MoviesContainer /> } />
             <Route path="/series" element={ <SeriesContainer /> } />
             <Route path="/About" element={ <AboutApp /> } />
             <Route path="/details/:movieid/:mediatype" element={ <DetailsContainer /> } />
          </Routes>
          <FooterContainer />
       </BrowserRouter>
    </>
  )
}

export default RouteContainer