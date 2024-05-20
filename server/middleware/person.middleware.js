const { check, validationResult } = require('express-validator');

const personValidationRules = [
  check('name').notEmpty().withMessage('Name is required'),
  check('age').isDecimal().withMessage('Age must be a decimal'),
  check('nationalityID')
    .isInt()
    .withMessage('Nationality ID must be an integer'),
  check('birthDate')
    .isISO8601()
    .toDate()
    .withMessage('Birth Date must be a valid date'),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];
module.exports = personValidationRules;
