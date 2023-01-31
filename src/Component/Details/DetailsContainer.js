import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useParams } from 'react-router-dom'

const DetailsContainer = () => {
    const [content, setContent] = useState()
    const {movieid, mediatype} = useParams()

    const API_KEY = process.env.REACT_APP_NOT_SECRET_CODE

    const _media_type = mediatype && mediatype !== '' ? mediatype.toLocaleLowerCase() : ''
    

    const detailsData = async() =>{
        try{
            const {data} = await axios(`https://api.themoviedb.org/3/${_media_type}/${movieid}?api_key=${API_KEY}&language=en-US`)
            setContent(data)
            console.log(data)
          }catch(error){
            console.error(error)
        }
    }

    useEffect(()=>{
        detailsData()
    }, [])

  return (
    <>
       <Container>
          <Row>
              <Col>
                   
              </Col>
          </Row>
       </Container>
    </>
  )
}

export default DetailsContainer