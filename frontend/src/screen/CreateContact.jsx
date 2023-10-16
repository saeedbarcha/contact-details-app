import React, { useState } from 'react'; 
import { Form, Button } from "react-bootstrap";
import { Container, Row, Col } from "react-bootstrap";
import { toast } from "react-toastify";

const CreateContact = () => {
    const currentDate = new Date().toISOString().slice(0, 10);

    const [formData, setFormData] = useState({
        firstName: "",
        surname: "",
        gender: "M",
        dateOfBirth: currentDate,
        telephoneNumber: "",
        email: "",
        city: "London"
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if(formData.firstName ===""){
            toast.error("Name is required");
        }else if(formData.surname ===""){
            toast.error("Surname is required");
        }else if(formData.gender ===""){
            toast.error("Gender is required");
        }else if(formData.email ===""){
            toast.error("Email is required");
        }else if(!formData.email.includes("@") ){
            toast.error("Email fromat is incorrect");
        }
        else{

       

        fetch('http://localhost:8080/addContact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
            .then(response => response.json())
            .then(data => {
                toast.success("Contact Detail added successfully");
                console.log('Contact added:', data);
            })
            .catch((error) => {
                console.error('Error adding contact:', error);
                toast.error(error?.data?.message || error.messages);
            });
    };
}

//   const addContact = () => {
//     console.log("contack added");
//   };
  const currentYear = new Date().getFullYear();

  return (
    <Container>
      <Row className="my-2 text-center">
        <h2><u>Add A new Contact Detail</u></h2>
      </Row>
      <Form className='fome' onSubmit={handleSubmit}>
    <Row>
        <Col md={6}>
            <Form.Group controlId="firstName" className='mb-3'>
                <Form.Label>First Name</Form.Label>
                <Form.Control type="text" placeholder="Enter first name" className='fieldz' onChange={handleChange}/>
            </Form.Group>
        </Col>
        <Col md={6}>
            <Form.Group controlId="surname" className='mb-3'>
                <Form.Label>Surname</Form.Label>
                <Form.Control type="text" placeholder="Enter surname" className='fieldz' onChange={handleChange} />
            </Form.Group>
        </Col>
    </Row>

    <Row>
        <Col md={4}>
            <Form.Group controlId="gender" className='mb-3 fieldz'>
                <Form.Label>Gender</Form.Label>
                <Form.Select onChange={handleChange}>
                    <option value="M">Male</option>
                    <option value="F">Female</option>
                </Form.Select>
            </Form.Group>
        </Col>
        <Col md={8}>
            <Form.Group controlId="dateOfBirth" className='mb-3'>
                <Form.Label>Date of Birth</Form.Label>
                <Form.Control type="date" placeholder="Enter date of birth" className='fieldz' onChange={handleChange} />
            </Form.Group>
        </Col>
    </Row>

    <Row>
        <Col md={6}>
            <Form.Group controlId="telephoneNumber" className='mb-3'>
                <Form.Label>Telephone Number</Form.Label>
                <Form.Control type="tel" placeholder="Enter telephone number" className='fieldz' onChange={handleChange} />
            </Form.Group>
        </Col>
        <Col md={6}>
            <Form.Group controlId="email" className='mb-3'>
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter email address" className='fieldz' onChange={handleChange}/>
            </Form.Group>
        </Col>
    </Row>

    <Form.Group controlId="city" className='mb-3 fieldz'>
        <Form.Label>City</Form.Label>
        <Form.Select onChange={handleChange}>
            <option value="London">London</option>
            <option value="New York">New York</option>
            <option value="Tokyo">Tokyo</option>
        </Form.Select>
    </Form.Group>

    <Button variant="primary" type="submit" className='mt-3 fieldz'>
        Add Contact
    </Button>
</Form>

    </Container>
  );
};

export default CreateContact;
