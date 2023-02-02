import React from 'react'
import { Link } from 'react-router-dom'

import { img_300, img_not_available } from '../../Config';

const MovieCart = ({data}) => {
    const {id, media_type, title,name, original_title, poster_path, release_date, vote_average, first_air_date, original_language} = data

    const API_KEY = process.env.REACT_APP_NOT_SECRET_CODE

    const ImageURL = poster_path ? img_300 + poster_path : img_not_available
    const movieName = original_title ? original_title : title ? title : name
    const vote = parseInt(vote_average)
 

  return (
    <>
       <div className='col-xl-2 col-md-3 col-sm-6 col-6'>
           <Link to={`/details/${id}/${media_type}`} className='movie-box'>
               <div className='img-container'>
                  <img src={ImageURL} alt={title} style={{width: '100%', height: '100%'}}/>
                  <div className='type-rating'>
                      <div>
                        <span className='poster-media-type'>{media_type.toUpperCase()}</span>
                        <span className='poster-language'>{original_language.toUpperCase()}</span>
                      </div>
                      <span className='poster-vote'>{vote}</span>
                  </div>
               </div>
               <div className='release-date d-flex justify-content-between  my-2'>
                   <p>Release Data</p>
                   {release_date ? release_date : first_air_date ? first_air_date : '--'}
               </div>
               <h6>{movieName}</h6>
           </Link>
       </div>
    </>
  )
}

export default MovieCart