const express = require('express');
const path = require('path');
const app = express();

const PORT = 5000;

app.use(express.static(path.join(__dirname, 'client/build')));

app.get('/api/customers', (req, res) => {
    const custumers = [
        { id: 1, firstName: 'Abdulrahman' },
        { id: 2, firstName: 'Mohamed' },
        { id: 3, firstName: 'Abeer' }
    ]

    res.json(custumers);
})

app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });

app.listen(PORT, (err) => {
    if (err) return console.log(err);
    console.log(`SERVER is Running in PORT ${PORT}`);
})