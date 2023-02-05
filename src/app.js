const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());

app.get('/', (req, res) => {
    console.log('Ji');
    res.status(500).json({message_error: 'Hi'});
})

const contactsRoute = require('./routes/contactsRoute');
app.use('/contacts', contactsRoute)

app.listen(3000);