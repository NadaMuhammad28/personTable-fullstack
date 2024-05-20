const PersonModel = require('../models/person.model');
class PersonController {
  static addPerson = async (req, res) => {
    try {
      const personId = await PersonModel.addPerson(req.body);

      res.status(200).json({ success: true, personId });
    } catch (e) {
      console.log(e);
      res.status(500).json({ success: false });
    }
  };

  static getAllPersons = async (req, res) => {
    try {
      const persons = await PersonModel.getAllPersons();
      res.status(200).json({ success: true, persons });
    } catch (e) {
      console.log(e);
      res.status(500).json({ success: false, error: e.message });
    }
  };
}

module.exports = PersonController;
