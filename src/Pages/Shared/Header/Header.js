import React, { useContext } from 'react';
import { Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { AuthCoontext } from '../../../contexts/AuthProvider/AuthProvider';
import LeftSideNav from '../LestSideNav/LeftSideNav';
import { FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Header = () => {

  const {user, logOut} = useContext(AuthCoontext);

  const handleLogOut = () =>{
    logOut()
      .then( () => {})
  }

    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="/courses">Courses</Nav.Link>
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="/login">
              {
                user?.uid?
                <>
                  <span>{user?.displayName}</span>
                  <Link onClick={handleLogOut} >Sign Out</Link>
                </>
                :
                <>
                  <Link to='/login'>Log In</Link>
                <Link to='/register'>Register</Link>
                </>
              }
            </Nav.Link>
            <Nav.Link>
              {
                user?.photoURL?
                  <Image style={{height: 'width: 10px'}} src={user.photoURL}></Image>
                  :
                  <FaUser></FaUser>
              }
            </Nav.Link>
            {/* <Nav.Link eventKey={2} href="/login">
              Login
            </Nav.Link> */}
          </Nav>
          <div className='d-lg-none'>
            <LeftSideNav></LeftSideNav>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
};

export default Header;