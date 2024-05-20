const experss = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const PersonRoutes = require('./routes/person.routes');

const app = experss();

app.use(cors());
app.use(bodyParser.json());

const port = process.env.PORT;


//routes
app.use('/api/person', PersonRoutes);
app.listen(port, () => console.log('http://localhost:' + port));
