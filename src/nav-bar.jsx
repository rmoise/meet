import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import './nav-bar.css';

function MyNavbar() {
  return (
    <>
      <Navbar>
        <Container>
          <Navbar.Brand className=' fw-bold mx-auto' href="#home">Meet App</Navbar.Brand>
        </Container>
      </Navbar>
      <br />
    </>
  );
}

export default MyNavbar;
