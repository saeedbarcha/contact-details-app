import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  const currentYear = new Date().getFullYear()
  return (
    <>
      <footer className="bg-dark" >
      <Row className="m-0 p-0">
        <Col className="text-center " >
          <p style={{color:"#fff"}}>Contact Directory App &copy; {currentYear} </p>
        </Col>
      </Row>
      </footer> 
   
    </>
  );
};

export default Footer;