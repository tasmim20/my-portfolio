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
            <Link   to='/' className='text-decoration-none text-white px-3 my-2'>Portfolio</Link>
            <Link to='/aboutMe' className='text-decoration-none text-white px-3 my-2'  >About me</Link>
            <Link to='/contactMe'  className='text-decoration-none text-white px-3 my-2' >Contact me</Link>
            <Link  to='/service' className='text-decoration-none text-white px-3 my-2' >Service</Link>
            <Link  to='/blog'  className='text-decoration-none text-white px-3 my-2'>blog</Link>
          
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navber;