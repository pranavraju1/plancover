import "./styles.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
const NavigationBar = () => {
  return (
    <Navbar
      expand="lg"
      className="bg-body-tertiary-dark navigation navigationbar"
      sticky="top"
    >
      <Container>
        <Navbar.Brand className="logo" href="#home">
          <img src="logo.png" alt="" />
          <span>Logo</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav ">
          <Nav className="me-auto links">
            <Nav.Link className="link" style={{color:"#eb5971"}} href="#home">Home</Nav.Link>
            <Nav.Link className="link" href="#page">Page</Nav.Link>
            <Nav.Link className="link" href="#features">Features</Nav.Link>
            <Nav.Link className="link" href="#howitworks">How It Works</Nav.Link>
            <Nav.Link className="link" href="#screenshots">Screenshot</Nav.Link>
            <Nav.Link className="link" href="#pricing">Pricing</Nav.Link>
            <Nav.Link className="link">
              <Button className="navbtn" >Download</Button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
