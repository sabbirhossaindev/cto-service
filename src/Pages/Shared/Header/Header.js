import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import './Header.css';
import cto from '../../../Images/cto-logo.png';


const Header = () => {
    return (
      <div id='home'>
        <Navbar className='nav-ber' collapseOnSelect expand="lg">
        <Container>
          <Navbar.Brand><Link className=' nav-link' to='/'><h3 className='text-primary'><strong><img src={cto} alt="cto logo" className='cto'/></strong></h3></Link></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto my-nav">
                <a className='menu-link' href="#home"><span className='mx-2 nav-link text-secondary'>Home</span>
                </a>

                <a className='menu-link' href="#about"><span className='mx-2 nav-link text-secondary'>About </span>
                </a>
                
                <a className='menu-link' href="#contact"><span className='mx-2 nav-link text-secondary'>Contact</span>
                </a>
            </Nav>  
          </Navbar.Collapse>
        </Container>
        </Navbar>
      </div>
    );
};

export default Header;