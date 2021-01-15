const express = require('express'),
    app = express();

app.get('/', (req, res) => {
    res.send('Mee Heroku app.');
});

app.listen(5000, () => {
    console.log('Server running in port 5000');
});



