
// import "./Contact.css"


import React, { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";

const Home = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const addContact = () => {
    console.log("Contact added: ", { name, email, phone });
    // You can add code here to save the contact to your backend or state management system.
  };

  return (
    <Container className="main">
      <h2 className=" text-center">Welcome to Contact Directory</h2>
      <p>Lorem ipsum, doptducimus? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente incidunt necessitatibus omnis ullam excepturi dolorem labore itaque quam nemo corrupti expedita veritatis natus, cumque veniam ad, delectus iure placeat ducimus?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente incidunt necessitatibus omnis ullam excepturi dolorem labore itaque quam nemo corrupti expedita veritatis natus, cumque veniam ad, delectus iure placeat ducimus?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente incidunt necessitatibus omnis ullam excepturi dolorem labore itaque quam nemo corrupti expedita veritatis natus, cumque veniam ad, delectus iure placeat ducimus? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente incidunt necessitatibus omnis ullam excepturi dolorem labore itaque quam nemo corrupti expedita veritatis natus, cumque veniam ad, delectus iure placeat ducimus? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente incidunt necessitatibus omnis ullam excepturi dolorem labore itaque quam nemo corrupti expedita veritatis natus, cumque veniam ad, delectus iure placeat ducimus?</p>
    </Container>
  );
};

export default Home;
