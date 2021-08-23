const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

const dbConnection = require('./src/helpers/db');
const errorHandler = require('./src/helpers/errorHandler');

dotenv.config({ path: './src/config/config.env' });
dbConnection();

const AuthRoute = require('./src/routes/auth.route');
const UserRoute = require('./src/routes/user.route');

const app = express();

app.use(express.json());
app.use(cors());

app.use('/api/auth', AuthRoute);
app.use('/api/user', UserRoute);

app.use(errorHandler);

const PORT = 4000;

const server = app.listen(PORT, () => console.log(`Server running in port ${PORT} in ${process.env.NODE_ENV} mode`));

process.on('unhandledRejection', (err, Promise) => {
    console.log(`Error: ${err.message}`);

    // Close the server
    server.close(() => process.exit(1));
})