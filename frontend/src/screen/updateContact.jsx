

import React, { useState, useEffect } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { toast } from "react-toastify";

const UpdateContact = () => {
    const { id } = useParams();// Extracting contact ID from URL
    console.log("id...", id)
  const [formData, setFormData] = useState({
    firstName: "",
    surname: "",
    gender: "M",
    dateOfBirth: "",
    telephoneNumber: "",
    email: "",
    city: "London",
  });

  useEffect(() => {

    const fetchContact = async () => {
        try {
            const response = await fetch(`http://localhost:8080/getContact/${id}`);
            const contact = await response.json();
            setFormData({
                firstName: contact.first_name,
                surname: contact.surname,
                gender: contact.gender,
                dateOfBirth: contact.date_of_birth,
                telephoneNumber: contact.telephone_number,
                email: contact.email,
                city: contact.city,
            });
        } catch (error) {
            console.error("Error fetching contact:", error);
        }
    };

    fetchContact();
}, [id]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`http://localhost:8080/updateContact/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Contact updated:", data);
        toast.success("Updated contact successfully");
      })
      .catch((error) => {
        console.error("Error updating contact:", error);
        toast.error(error?.data?.message || error.messages);
      });
  };

  return (
    <Container>
      <Row className="my-2 text-center">
        <Link className="btn btn-light my-3" to="/allcontacts">
          Go Back
        </Link>
        <h2>
          <u>Update Contact Detail</u>
        </h2>
      </Row>
      <Form className="fome" onSubmit={handleSubmit}>
        <Row>
          <Col md={6}>
            <Form.Group controlId="firstName" className="mb-3">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter first name"
                className="fieldz"
                value={formData.firstName}
                onChange={handleChange}
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="surname" className="mb-3">
              <Form.Label>Surname</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter surname"
                className="fieldz"
                value={formData.surname}
                onChange={handleChange}
              />
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col md={4}>
            <Form.Group controlId="gender" className="mb-3 fieldz">
              <Form.Label>Gender</Form.Label>
              <Form.Select  value={formData.gender} onChange={handleChange}>
                <option value="M">Male</option>
                <option value="F">Female</option>
              </Form.Select>
            </Form.Group>
          </Col>
          <Col md={8}>
            <Form.Group controlId="dateOfBirth" className="mb-3">
              <Form.Label>Date of Birth</Form.Label>
              <Form.Control
                type="date"
                placeholder="Enter date of birth"
                className="fieldz"
                value={formData.dateOfBirth}
                onChange={handleChange}
              />
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col md={6}>
            <Form.Group controlId="telephoneNumber" className="mb-3">
              <Form.Label>Telephone Number</Form.Label>
              <Form.Control
                type="tel"
                placeholder="Enter telephone number"
                className="fieldz"
                value={formData.telephoneNumber}
                onChange={handleChange}
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="email" className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                value={formData.email}
                placeholder="Enter email address"
                className="fieldz"
                onChange={handleChange}
              />
            </Form.Group>
          </Col>
        </Row>

        <Form.Group controlId="city" className="mb-3 fieldz">
          <Form.Label>City</Form.Label>
          <Form.Select  value={formData.city} onChange={handleChange}>
            <option value="London">London</option>
            <option value="New York">New York</option>
            <option value="Tokyo">Tokyo</option>
          </Form.Select>
        </Form.Group>

        <Button variant="primary" type="submit" className="mt-3 fieldz">
          Update Contact
        </Button>
      </Form>
    </Container>
  );
};

export default UpdateContact;
