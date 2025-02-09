const axios = require('axios');

exports.getWeather = async (req, res) => {
  const { city } = req.params;
  const apiKey = process.env.OPENWEATHER_API_KEY;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await axios.get(url);
    const { name, main, weather } = response.data;
    res.status(200).json({
      city: name,
      temperature: `${main.temp}°C`,
      condition: weather[0].description,
    });
  } catch (err) {
    res.status(400).json({ message: 'Город не найден' });
  }
};