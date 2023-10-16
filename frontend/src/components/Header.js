// import React from "react";

// const Header = () => {
//   return (
//     <>
//       <header className="bg-dark text-center p-1">
//         <h3 className="text-white text-center">PDF flie Editer app</h3>
//       </header>
//     </>
//   );
// };

// export default Header;

/////////////////////////////
import { Navbar, Nav, Container, Badge, NavDropdown } from "react-bootstrap";
import {  MdContacts, MdCreateNewFolder, MdHome} from "react-icons/md";
import { AiFillContacts} from "react-icons/ai";

import { LinkContainer } from "react-router-bootstrap";
import { useNavigate } from "react-router-dom";
const Header = () => {
  
  const iconStyle={
    width:"25px",
    height:"25px"
  }
  return (
    <header >
      <Navbar bg="dark" variant="dark" expand="lg" collapesonselect="true">
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>
             <AiFillContacts style={{width:"50px", height:"50px", color:"dark"}}/>
            <span style={{fontWeight:"bold", paddingLeft:"5px", paddingRight:"5px"}}>Contact</span><span>App</span>
            </Navbar.Brand>
          </LinkContainer>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <LinkContainer to="/">
                <Nav.Link>
                  <MdHome  style={iconStyle}/> Home
                </Nav.Link>
              </LinkContainer>

              <LinkContainer to="/createcontact">
                <Nav.Link>
                  <MdCreateNewFolder style={iconStyle} /> Create contact
                </Nav.Link>
              </LinkContainer>

              <LinkContainer to="/allcontacts">
                <Nav.Link>
                  <MdContacts style={iconStyle}/> All contacts
                </Nav.Link>
              </LinkContainer>{" "}
             
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
