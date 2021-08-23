const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config({ path: './src/config/config.env' });

const app = express();

app.use(express.json())
app.use(cors())

const PORT = 4000;

const server = app.listen(PORT, () => console.log(`Server running in port ${PORT} in ${process.env.NODE_ENV} mode`))

process.on('unhandledRejection', (err, Promise) => {
    console.log(`Error: ${err.message}`)

    // Close the server
    server.close(() => process.exit(1))
})