import React from 'react'
import {LinkContainer} from 'react-router-bootstrap'
import {Navbar,Nav,Container} from 'react-bootstrap' 
const Header = () => {
    return (
        <header>
            <Navbar bg="light" expand="lg" collapseOnSelect>
        <Container>
          <LinkContainer to='/'>
       <Navbar.Brand >GamePlex</Navbar.Brand>
     </LinkContainer>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <LinkContainer to='/originals'>
      <Nav.Link >Originals</Nav.Link>
      </LinkContainer>
      <LinkContainer to='/Movies'>
      <Nav.Link> Movies</Nav.Link>
      </LinkContainer>
      <LinkContainer to='/videos'>
      <Nav.Link>Videos</Nav.Link>
      </LinkContainer>
      <LinkContainer to='/Music'>
      <Nav.Link> Music</Nav.Link>
      </LinkContainer>
      
    </Nav>
    <Nav className='mr-auto login'>
    <LinkContainer  to='/'>
      <Nav.Link><i className='fas fa-search fa-1x'></i> </Nav.Link>
      </LinkContainer>
      <LinkContainer  to='/'>
      <Nav.Link>Light </Nav.Link>
      </LinkContainer>
      <LinkContainer  to='/'>
      <Nav.Link><i className='fas fa-toggle-off fa-lg'></i> </Nav.Link>
      </LinkContainer>
   
      <LinkContainer  to='/'>
      <Nav.Link>Dark</Nav.Link>
      </LinkContainer>
   
    <LinkContainer  to='/login'>
      <Nav.Link><i className='fas fa-user'></i> Login</Nav.Link>
      </LinkContainer>      
    </Nav>
    </Navbar.Collapse>
  
    
   
    
  
  
      
  </Container>
</Navbar>
        </header>
    )
}

export default Header
