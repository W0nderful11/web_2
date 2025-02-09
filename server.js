const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const bookRoutes = require('./routes/bookRoutes');

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

// Подключение к MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB', err));

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
swaggerSetup(app);