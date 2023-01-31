import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import MovieCart from '../../Component/MovieCart/MovieCart';

const HomeContainer = () => {
  const [content, setContent] = useState([])
  const [pageno, setPageno] = useState(1)
  const [paginationNo, setPaginationNo] = useState(0)

  const API_KEY = process.env.REACT_APP_NOT_SECRET_CODE

  const fetchData = async() =>{
    const { data } = await axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}&page=${pageno}`)
    setContent(data.results)
  }

  useEffect(()=>{
    fetchData()
  }, [])

  return (
    <>
       <Container>
          <Row>
              <Col className='col-12 text-center py-2'>
                 <h1>Trending movies</h1>
              </Col>
              {
                content && content.length > 0 ? content.map((item)=>{
                  const {id} = item

                  return(
                     <MovieCart key={item.id} data={item} />
                  )
                 }): 'Loading...'
              }
          </Row>
       </Container>
    </>
  )
}

export default HomeContainer