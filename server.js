const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const bookRoutes = require('./routes/bookRoutes');

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

// Подключение к MongoDB
mongoose.connect('mongodb://localhost:27017/dbname');

// Middleware
app.use(bodyParser.json());

// Маршруты
app.use('/api', bookRoutes);

// Запуск сервера
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

const weatherRoutes = require('./routes/weatherRoutes');
app.use('/api', weatherRoutes);

const swaggerSetup = require('./swagger');
// swaggerSetup(app);

app.get('/', (req, res) => {
  res.send('API is running!');
});