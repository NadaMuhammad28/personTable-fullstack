const db = require('../config/db');
const moment = require('moment');
class Personmodel {
  static addPerson = async (person) => {
    const { name, age, nationalityID, birthDate } = person;
    const formattedBirthDate = moment(birthDate).format('YYYY-MM-DD HH:mm:ss');
    const query =
      'INSERT INTO Person (name, age, nationalityID, birthDate) VALUES (?, ?, ?, ?)';

    try {
      const [result] = await db.query(query, [
        name,
        age,
        nationalityID,
        formattedBirthDate,
      ]);
      return result.insertId;
    } catch (error) {
      throw error;
    }
  };

  static getAllPersons = async () => {
    try {
      const [rows] = await db.query('SELECT * FROM Person');
      return rows;
    } catch (error) {
      throw error;
    }
  };
}

module.exports = Personmodel;
