import React, { useState, useEffect } from "react";
import { Container, Table, Row, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import { BsFillTrashFill } from "react-icons/bs";
import { FaEdit } from "react-icons/fa";
const AllContacts = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:8080/getInfo");
      const responseData = await response.json();
      setData(responseData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleDelete = async (id) => {
    try {
      const response = await fetch(
        `http://localhost:8080/deleteContact/${id}`,
        { method: "DELETE" }
      );
      const responseData = await response.json();
      console.log(responseData);
      fetchData();
    } catch (error) {
      console.error("Error deleting data:", error);
    }
  };

  const handleUpdate = (id) => {
    navigate(`/updatecontact/${id}`);
  };

  const iconStyle = {
    width: "15px",
    height: "15px",
  };
  return (
    <Container>
      <Table striped bordered hover style={{ width: "100%" }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Surname</th>
            <th>Gender</th>
            <th>Date of Birth</th>
            <th>Telephone Number</th>
            <th>Email</th>
            <th>City</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {data.map((contact) => (
            <tr key={contact.id}>
              <td>{contact.first_name}</td>
              <td>{contact.surname}</td>
              <td>{contact.gender}</td>
              <td>{contact.date_of_birth}</td>
              <td>{contact.telephone_number}</td>
              <td>{contact.email}</td>
              <td>{contact.city}</td>
              <td>
                <Button variant="warning" onClick={() => handleUpdate(contact.id)}>
                  {" "}
                  <FaEdit style={{ width: "20px", height: "20px" }} />
                </Button>
              </td>
              <td>
                <Button variant="danger" onClick={() => handleDelete(contact.id)}>
                  <BsFillTrashFill style={{ width: "20px", height: "20px" }} />
                </Button>
              </td>
            </tr>
          ))}
        
        </tbody>
      </Table>
    </Container>
  );
};

export default AllContacts;
