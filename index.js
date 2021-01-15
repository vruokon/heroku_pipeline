const express = require('express'),
    app = express(),
    port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Mee Heroku app.');
});

app.listen(port, () => {
    console.log(`Server running in port ${port}`);
});



