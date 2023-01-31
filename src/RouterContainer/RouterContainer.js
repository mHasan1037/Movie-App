import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HeaderContainer from '../Container/Header/HeaderContainer'
import HomeContainer from '../Container/Home/HomeContainer'
import FooterContainer from '../Container/Footer/FooterContainer'
import MovieContainer from '../Container/Movie/MovieContainer'
import SeriesContainer from '../Container/Series/SeriesContainer'
import DetailsContainer from '../Component/Details/DetailsContainer'

const RouterContainer = () => {
  return (
    <BrowserRouter>
       <HeaderContainer />
       <Routes>
           <Route path='/' element={ <HomeContainer /> } />
           <Route path='/movies' element={ <MovieContainer /> } />
           <Route path='/series' element={ <SeriesContainer /> } />
           <Route path='*' element={ <HomeContainer /> } />
           <Route path="/details/:movieid/:mediatype" element={ <DetailsContainer />} />
       </Routes>
       <FooterContainer />
    </BrowserRouter>
  )
}

export default RouterContainer