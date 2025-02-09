const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const swaggerOptions = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'API Documentation',
      version: '1.0.0',
      description: 'Документация API для проекта',
    },
    servers: [
      {
        url: 'http://localhost:3000',
      },
    ],
    components: {
      schemas: {
        Book: {
          type: 'object',
          properties: {
            title: { type: 'string' },
            author: { type: 'string' },
            year: { type: 'integer' },
            genre: { type: 'string' },
          },
          required: ['title', 'author', 'year', 'genre'],
        },
      },
    },
  },
  apis: ['./routes/*.js'], 
};

const swaggerDocs = swaggerJSDoc(swaggerOptions);

module.exports = { swaggerUi, swaggerDocs };
