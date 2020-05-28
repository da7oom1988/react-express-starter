const express = require('express');

const app = express();

const PORT = 5000;

app.get('/api/customers', (req, res) => {
    const custumers = [
        { id: 1, firstName: 'Abdulrahman' },
        { id: 2, firstName: 'Mohamed' },
        { id: 3, firstName: 'Abeer' }
    ]

    res.json(custumers);
})

app.listen(PORT, (err) => {
    if (err) return console.log(err);
    console.log(`SERVER is Running in PORT ${PORT}`);
})