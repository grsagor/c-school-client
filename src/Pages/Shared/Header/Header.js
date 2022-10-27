import React, { useContext } from 'react';
import { Button, Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { AuthCoontext } from '../../../contexts/AuthProvider/AuthProvider';
import LeftSideNav from '../LestSideNav/LeftSideNav';
import { FaUser } from 'react-icons/fa';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

const Header = () => {

  const { user, logOut } = useContext(AuthCoontext);

  // const navigate = useNavigate();

  const handleLogOut = () => {
    logOut()
      .then(() => {

      })
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
          </Nav>
          <Nav>

              {
                user?.uid ?
                  <>
                    {/* <span>{user?.displayName}</span> */}
                    <Nav.Link href='/login' onClick={handleLogOut} >Sign Out</Nav.Link>
                  </>
                  :
                  <>
                    <Nav.Link href='/login'>Log In</Nav.Link>
                    <Nav.Link href='/register'>Register</Nav.Link>
                  </>
              }

            <Nav.Link>
              {
                user?.photoURL ?
                  <>

                    <OverlayTrigger
                      key={'bottom'}
                      placement={'bottom'}
                      overlay={
                        <Tooltip id={`tooltip-${'bottom'}`}>{user.displayName}</Tooltip>
                      }
                    >

                      <Button className='bg-transparent border border-0 p-0'><Image className='rounded-circle' style={{ height: '30px' }} src={user.photoURL}></Image></Button>
                    </OverlayTrigger>
                  </>
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