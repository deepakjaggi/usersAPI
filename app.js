const express = require('express');
const app = express();
const port = 3000;
const userRoutes = require('./routes/userRoutes');
const printRoutes = require('./utils/printRoutes');

app.use(express.json());
app.use('/users', userRoutes);

app.listen(port, () => {
    const baseUrl = `http://localhost:${port}`;
    console.log(`Users API listening at ${baseUrl}`);
    printRoutes(app, baseUrl); // Pass the base URL to printRoutes
});