import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import CardMovies from '../../Components/CardMovies/CardMovies'
import PaginationContainer from '../../Components/Pagination/PaginationContainer';

import axios from 'axios'

const HomeContainer = () => {
  const [content, setContent] =  useState([])
  const [pageno, setPageno] = useState(1)
  const [paginationNo, setPaginationNo] = useState(0)

  const API_KEY = process.env.REACT_APP_NOT_SECRET_CODE

  const GetDataTrending = async ()=>{
    const {data} = await axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}&page=${pageno}`)
    setContent(data.results)
    setPaginationNo(data.total_pages)
  }

  useEffect(()=>{
    GetDataTrending()
  }, [pageno])

  const handleClick = (number) =>{
    setPageno(number)
  }

  useEffect(()=>{
    GetDataTrending()
  }, [])

  return (
    <main className='homePage'>
         <Container>
            <Row>
                <Col className='col-12'>
                   <section className='text-center py-2'>
                       <h1>Trandings</h1>
                   </section>
                </Col>  
                {
                  content && content.length > 0 ? content.map((item)=>{
                    return(
                      <CardMovies key={item.id} data={item} mediaType="Tv" />
                    )
                  }) : 'No movies found...'
                } 
                {
                  paginationNo && paginationNo > 1 ? <PaginationContainer maxnum={paginationNo} activenum={pageno} handleClick={handleClick} /> : ''
                }
            </Row>
         </Container>
    </main>
  )
}

export default HomeContainer