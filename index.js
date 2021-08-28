const express = require('express');
const app = express();
const port = 5000;

app.use('/', express.static('./public'))

const api = require('./routes/api')
app.use('/api', api)

app.listen(port, () => console.log(`Server listening to port ${port}`))