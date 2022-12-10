import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Navber() {
  return (
    <Navbar   fixed="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home" className='my-2 text-2xl' > Tasmim Rahman</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
         
          </Nav>
          <Nav className='text-decoration-none'>
            <Link className='text-decoration-none text-white px-3 my-2' to='/'>Portfolio</Link>
            <Link className='text-decoration-none text-white px-3 my-2'  to='/aboutMe'>About me</Link>
            <Link className='text-decoration-none text-white px-3 my-2' to='/contactMe'>Contact me</Link>
            <Link className='text-decoration-none text-white px-3 my-2' to='/service'>Service</Link>
            <Link className='text-decoration-none text-white px-3 my-2' to='/blog'>blog</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navber;