import { useState } from "react";
import { Container } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
// Comps
import Login from "../../LoginSystem/Login/Login";
import SignUp from "../../LoginSystem/SignUp/SignUp";
import "./MainHeader.css";

const MainHeader = () => {
  const [show, setShow] = useState(false);
  const [modalType, setModalType] = useState(""); 

  const handleShow = (NavItem) => {
    setModalType(NavItem);
    setShow(true);
  };

  const handleClose = () => {
    setShow(false);
    setModalType("");
  };

  return (
    <header className="sticky-top">  {/*to make the navbar always up*/}
      <Navbar expand="lg" className="ms-auto">
        <Container fluid className="ms-1 me-1">
          <Navbar.Brand href="/">
            <img src="images/logo.png" alt="logo" />
            TheHomeless.org
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse>
            <Nav className="nav">
              <Nav.Link className="navlink" href="#manage-rentals">
                Manage Rentals
              </Nav.Link>
              {["Sign In", "Register"].map((NavItem) => (
                <Nav.Link
                  key={NavItem}
                  className="navlink"
                  onClick={() => handleShow(NavItem)}
                >
                  {NavItem}
                </Nav.Link>
              ))}
              <Button  onClick={() => handleShow('Register')} variant="dark" className="ms-2">
                Add Property
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{modalType}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {modalType === "Sign In" && (
            <Login />
          )}
          {modalType === "Register" && (
            <SignUp />
          )}
        </Modal.Body>
      </Modal>
    </header>
  );
};

export default MainHeader;
