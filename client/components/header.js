import Link from 'next/link';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';

const Header = ({ currentUser }) => {
  const links = [
    !currentUser && { label: 'Sign Up', href: '/auth/signup' },
    !currentUser && { label: 'Sign In', href: '/auth/signin' },
    currentUser && { label: 'Sign Out', href: '/auth/signout' }
  ]
    .filter(linkConfig => linkConfig)
    .map(({ label, href }) => {
      return (
        <Nav.Item key={href}>
          <Link href={href}>
            <Nav.Link>{label}</Nav.Link>
          </Link>
        </Nav.Item>
      );
    });

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Link href="/">
          <Navbar.Brand>
            <Nav.Link>
              MicroTix
            </Nav.Link>
          </Navbar.Brand>
        </Link>

        <Nav className="ms-auto">
          {links}
        </Nav>
      </Container>
    </Navbar>
  );
};


export default Header;