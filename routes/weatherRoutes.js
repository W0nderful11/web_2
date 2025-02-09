const express = require('express');
const weatherController = require('../controllers/weatherController');

const router = express.Router();

router.get('/weather/:city', weatherController.getWeather);

module.exports = router;
/**
 * @swagger
 * /weather/{city}:
 *   get:
 *     summary: Получить погоду для указанного города
 *     parameters:
 *       - in: path
 *         name: city
 *         required: true
 *         schema:
 *           type: string
 *         description: Название города
 *     responses:
 *       200:
 *         description: Успешный ответ
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 city:
 *                   type: string
 *                 temperature:
 *                   type: string
 *                 condition:
 *                   type: string
 *       400:
 *         description: Город не найден
 */

