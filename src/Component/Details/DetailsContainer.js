import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { AiFillStar } from 'react-icons/ai'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './style.css'

import { img_300, img_not_available } from '../../Config';

const DetailsContainer = () => {
    const [content, setContent] = useState()
    const [video, setVideo] = useState()
    const params = useParams()

    const API_KEY = process.env.REACT_APP_NOT_SECRET_CODE

    const _media_type = params && params.mediatype && params.mediatype !== '' ? params.mediatype.toLocaleLowerCase() : ''
    const id = params.movieid || ''
    const titleName = content && content.name && content.name !== '' ? content.name : content && content.title && content.title !='' ? content.title : '';

    const detailsData = async() =>{
        try{
            const {data} = await axios(`https://api.themoviedb.org/3/${_media_type}/${id}?api_key=${API_KEY}&language=en-US`)
            setContent(data)
          }catch(error){
            console.error(error)
        }
    }

    const fetchVidoe = async() =>{
        try{
           const { data } = await axios.get(`https://api.themoviedb.org/3/${_media_type}/${id}/videos?api_key=${API_KEY}&language=en-US`)
           setVideo(data.results[0].key)
        }catch(error){
          console.log(error)
        }
    }

    useEffect(()=>{
        detailsData()
        fetchVidoe()
    }, [])

    const movieDetailData = () =>{
       const ImageURL = content.poster_path ? img_300 + content.poster_path : img_not_available;
       const movieName = content.original_title ? content.original_title : content.name
       const tagline = content.tagline
       const genres = content.genres && content.genres.length > 0 ? content.genres.slice(0, 3).map((item, idx)=> <span key={idx}>{item.name}</span>) : '';
       const overview = content.overview
       const vote_average = parseInt(content.vote_average)
       const release_date = content.release_date ? content.release_date : content.first_air_date
       const language = content.original_language
       const original_country = content.original_country && content.original_country[0] ? content.original_country[0] : content.production_countries && content.production_countries[0]
       const budget = content.budget || '';

      return(
        <div>
            <div className='d-flex  gap-3'>
                <img src={ImageURL} />
                <div className='d-flex flex-wrap align-content-between'>
                      <div>
                          <div className='d-flex gap-3'>
                              <div className='d-flex align-items-center'>
                                  <span><AiFillStar /></span>
                                  {vote_average}
                              </div>
                              <div>
                                  <span>{language.toUpperCase()}</span>
                              </div>
                          </div>
                          <div style={{display: 'flex', gap: '10px'}}>
                            Genre:-
                            {genres}
                          </div>
                          <div>Release date:- {release_date}</div>
                          <div>Type:- {_media_type.toUpperCase()}</div>
                      </div>
                      <div>
                        <h2>{movieName}</h2>
                        <p>{overview}</p>
                      </div>
                </div>
            </div>
        </div>
      )
    }

   

  return (
    <>
       <Container className='my-3'>
          <Row>
              <Col className='col-xl-7 col-md-12'>
                   {titleName && titleName !=='' ? movieDetailData() : 'Details not found...'}
              </Col>
              <Col className='col-xl-5 p-2 col-md-12 d-flex justify-content-center align-items-center'>
                 <iframe width="560" height="315" src={`https://www.youtube.com/embed/${video}`} title="YouTube video player" allowFullScreen></iframe>
              </Col>
          </Row>
       </Container>
    </>
  )
}

export default DetailsContainer