import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { FaFunnelDollar } from "react-icons/fa";

export default function Navigation() {
  return (
    <Navbar bg="primary" expand="md" className="sticky-top">
      <Container>
        <Navbar.Brand
          className="text-white fs-3 fw-bold"
          href="/"
        >
          <FaFunnelDollar /> SalesFunnel
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link className="text-white" href="#home">
              Dashboard
            </Nav.Link>
            <Nav.Link className="text-white" href="#link">
              Deals
            </Nav.Link>
            <Nav.Link className="text-white" href="#link">
              New Deal
            </Nav.Link>
            <NavDropdown
              className="text-white"
              title="Account"
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item href="#action/3.1">
                Login
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.2">
                Register
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.3">
                Logout
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
