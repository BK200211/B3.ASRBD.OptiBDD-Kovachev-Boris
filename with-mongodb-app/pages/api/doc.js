// pages/api/doc.js

import { withSwagger } from 'next-swagger-doc';

const swaggerHandler = withSwagger({
  openApiVersion: '3.0.0',
  title: 'Movie API Documentation',
  version: '1.0.0',
  apiFolder: 'pages/api',
  paths: {
    '/api/movies': {
      get: {
        summary: 'Get all movies',
        responses: {
          200: {
            description: 'Successful response',
            content: {
              'application/json': {
                schema: {
                  type: 'array',
                  items: {
                    $ref: '#/components/schemas/Movie',
                  },
                },
              },
            },
          },
        },
      },
    },
    '/api/movies/{id}': {
      get: {
        summary: 'Get a movie by ID',
        parameters: [
          {
            name: 'id',
            in: 'path',
            required: true,
            schema: {
              type: 'string',
            },
          },
        ],
        responses: {
          200: {
            description: 'Successful response',
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Movie',
                },
              },
            },
          },
          404: {
            description: 'Movie not found',
          },
        },
      },
    },
  },
  components: {
    schemas: {
      Movie: {
        type: 'object',
        properties: {
          title: {
            type: 'string',
          },
          year: {
            type: 'integer',
          },
        },
      },
    },
  },
});

export default swaggerHandler();
