const router = require('express').Router();
const PersonController = require('../controllers/person.controller');
const PersonValidators = require('../middleware/person.middleware');
router.post('', PersonValidators, PersonController.addPerson);
router.get('', PersonController.getAllPersons);
module.exports = router;
