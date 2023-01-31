import React from 'react'
import { NavLink } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import HomeContainer from '../Home/HomeContainer';

const HeaderContainer = () => {
  return (
    <>
        <Navbar bg="dark" expand="lg">
        <Container>
            <Navbar.Brand className='white-text'>
               <NavLink to="/" className='brand'>Movie-App</NavLink>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto nav" >
                <NavLink to="/"  className='white-text'>Home</NavLink>
                <NavLink to="/movies" className='white-text'>Movie</NavLink>
                <NavLink to="/series" className='white-text'>Series</NavLink>
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    </>
  )
}

export default HeaderContainer