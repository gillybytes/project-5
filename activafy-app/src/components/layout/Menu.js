import { Nav, Navbar } from 'react-bootstrap'
import { FaRunning } from "react-icons/fa";


const NavLink = ({item}) => {
  const { link, label } = item;
  return (
    <>
      <Nav.Link href={link} className="active">{label}</Nav.Link>
    </>
  )
}


export const MenuBar = ({nav}) => {
  return (
    <>
      <Navbar fixed="top" collapseOnSelect expand="lg" bg="light">
        <Navbar.Brand>
          <Nav.Link href="/"><FaRunning className="icon"/></Nav.Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto"></Nav>
          <Nav>
            {nav.map(item => <NavLink key={item.id} item={item} /> )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}