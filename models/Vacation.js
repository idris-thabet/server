/* const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const VacationSchema = new Schema({
    start: Date,
    end: Date,
    type: String,
});

const Vacation = mongoose.model('Vacation', VacationSchema);
module.exports = Vacation;
 */


// models/Restaurant.js

const mongoose = require("mongoose");

const vacationSchema = new mongoose.Schema({
  start: {
    type: Date,
    required: true,
  },
  end: {
    type: Date,
    required: true,
  },
    type: {
    type: String,
    required: true,
  },

  
  createdBy: {
    email: {
      type: String,
      required: true,
    },
  },
});

module.exports = mongoose.model("Vacation", vacationSchema);