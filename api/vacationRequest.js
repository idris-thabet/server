/* const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const Vacation = require('./../models/Vacation'); 


async function VacRequest(req, res) {
    const { start, end,type } = req.body;

    const newVacation = new User({
        start,
        end,
        type,
        createdBy : {
            email: User.email 
        }
      });
      await newVacation.save();









}

module.exports = VacRequest; */



//


// vacationRequest.js
const jwt = require('jsonwebtoken');
const Vacation = require('./../models/Vacation');

async function vacRequest(req, res) {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: 'Authorization token is missing' });
  }

  try {
    const decodedToken = jwt.verify(
      token.replace(/^Bearer\s/, ""),
      "idrsthabet"
    );
    const userEmail = decodedToken.email;

    const { start, end, type } = req.body;
    const newVacation = new Vacation({
      start,
      end,
      type,
      createdBy: {
        email: userEmail
      }
    });

    await newVacation.save();

    res.status(201).json({ message: 'Vacation created successfully' });
  } catch (error) {
    console.error('Error posting vacation:', error);
    res.status(500).json({ error: 'Server error' });
  }
}

module.exports = vacRequest;
