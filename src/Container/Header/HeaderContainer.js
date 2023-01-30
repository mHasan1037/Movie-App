import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import HomeContainer from '../Home/HomeContainer';

const HeaderContainer = () => {
  return (
    <>
        <Navbar bg="dark" expand="lg">
        <Container>
            <Navbar.Brand href="#home" className='white-text'>Movie-App</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto" >
                <Nav.Link to="/"  className='white-text'>Home</Nav.Link>
                <Nav.Link href="#link" className='white-text'>Movie</Nav.Link>
                <Nav.Link href="#link" className='white-text'>Series</Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    </>
  )
}

export default HeaderContainer