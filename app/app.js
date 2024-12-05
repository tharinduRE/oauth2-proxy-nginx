const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const port = 3000;

app.use((req, res, next) => {
    const user = req.headers['x-user'] || 'Guest';
    const token = req.headers['x-access-token'] || 'No token provided';

    res.locals.user = user;
    res.locals.token = token;
    next();
});

app.get('/', (req, res) => {
    const htmlFilePath = path.join(__dirname, 'index.html');
    
    fs.readFile(htmlFilePath, 'utf-8', (err, data) => {
        if (err) {
            res.status(500).send('Error reading HTML file');
            return;
        }
        
        const htmlContent = data.replace('{{user}}', res.locals.user)
                                 .replace('{{token}}', res.locals.token);

        res.send(htmlContent);
    });
});

app.listen(port, () => {
    console.log(`App running at http://localhost:${port}`);
});
