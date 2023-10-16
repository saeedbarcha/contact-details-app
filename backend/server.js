const express = require('express');
const bodyParser = require('body-parser');
const { Pool } = require('pg');
const fs = require('fs');
const cors = require('cors');

const app = express();
const port = 8080;

app.use(cors());

const pool = new Pool({
  user: 'saeed',
  host: 'localhost',
  database: 'contactdetails',
  password: 'saeed1122',
  port: 5432,
});

// Error handling middleware
const handleErrors = (err, req, res, next) => {
    console.error('An error occurred:', err);
    res.status(500).send('Internal Server Error');
};

// Create table from schema
const schema = fs.readFileSync('./Model/Schema.sql').toString();
pool.query(schema)
    .then(() => {
        console.log('Table is successfully created');
    })
    .catch(err => {
        console.error('Error creating table:', err);
    });

app.use(bodyParser.json());

// API endpoint to add a contact
app.post('/addContact', async (req, res, next) => {
    try {
        const {
            firstName,
            surname,
            gender,
            dateOfBirth,
            telephoneNumber,
            email,
            city,
        } = req.body;

        console.log("contact added success")

        const query =
            'INSERT INTO contacts(first_name, surname, gender, date_of_birth, telephone_number, email, city) VALUES($1, $2, $3, $4, $5, $6, $7)';
        const values = [
            firstName,
            surname,
            gender,
            dateOfBirth,
            telephoneNumber,
            email,
            city,
        ];

        await pool.query(query, values);
        res.status(200).json('Contact added to the database');
     
       
    } catch (error) {
        next(error);
    }
});

//get data
app.get('/getInfo', async (req, res, next) => {
    try {
        const query = 'SELECT * FROM contacts';
        const result = await pool.query(query);
        const data = result.rows;
        res.status(200).json(data);
    } catch (error) {
        console.log("error")
        next(error);
    }
});

// get contact by ID
app.get('/getContact/:id', async (req, res, next) => {
  try {
      const { id } = req.params;
      const query = 'SELECT * FROM contacts WHERE id = $1';
      const result = await pool.query(query, [id]);
      const contact = result.rows[0];

      if (!contact) {
          return res.status(404).json({ message: 'Contact not found' });
      }

      res.status(200).json(contact);
  } catch (error) {
      console.log("error")
      next(error);
  }
});

// API endpoint to delete a contact
app.delete('/deleteContact/:id', async (req, res, next) => {
    try {
        const contactId = req.params.id;
        const query = 'DELETE FROM contacts WHERE id = $1';
        await pool.query(query, [contactId]);
        res.status(200).json(`Contact with ID ${contactId} deleted from the database`);
    } catch (error) {
        next(error);
    }
});

// API endpoint to update a contact
app.put('/updateContact/:id', async (req, res, next) => {
    try {
        const id = req.params.id;
        const {
            firstName,
            surname,
            gender,
            dateOfBirth,
            telephoneNumber,
            email,
            city
        } = req.body;

        const query = `
        UPDATE contacts 
        SET 
          first_name = $1, 
          surname = $2, 
          gender = $3, 
          date_of_birth = $4, 
          telephone_number = $5, 
          email = $6, 
          city = $7 
        WHERE id = $8
      `;

        const values = [
            firstName,
            surname,
            gender,
            dateOfBirth,
            telephoneNumber,
            email,
            city,
            id
        ];

        await pool.query(query, values);
        res.status(200).json(`Contact with ID ${id} has been updated`);
    } catch (error) {
        next(error);
    }
});


// Error handling middleware
app.use(handleErrors);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});