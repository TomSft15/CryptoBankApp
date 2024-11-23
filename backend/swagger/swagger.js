const swaggerUi = require('swagger-ui-express');

// Définition de la documentation Swagger en JavaScript
const swaggerDoc = {
  openapi: '3.0.0',
  info: {
    title: 'CryptoBank API',
    version: '1.0.0',
    description: 'API documentation for CryptoBank',
  },
  paths: {
    '/api/auth/register': {
      post: {
        summary: 'Register a new user',
        requestBody: {
          required: true,
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  username: { type: 'string' },
                  firstName: { type: 'string' },
                  lastName: { type: 'string' },
                  email: { type: 'string' },
                  password: { type: 'string' },
                },
                required: ['username', 'firstName', 'lastName', 'email', 'password'],
              },
            },
          },
        },
        responses: {
          201: { description: 'User created successfully' },
          400: { description: 'Bad Request' },
        },
      },
    },
    '/api/auth/login': {
      post: {
        summary: 'Login a user',
        requestBody: {
          required: true,
          content: {
            'application/json': {
              schema: {
                properties: {
                  username: { type: 'string' },
                  password: { type: 'string' },
                },
                required: ['username', 'password'],
              },
            },
          },
        },
        responses: {
          200: { description: 'Login successful' },
          401: { description: 'Invalid credentials' },
        },
      },
    },
    '/api/users': {
      get: {
        summary: 'Retrieve all users',
        responses: {
          200: {
            description: 'A list of users',
            content: {
              'application/json': {
                schema: {
                  type: 'array',
                  items: {
                    $ref: '#/components/schemas/User',
                  },
                },
              },
            },
          },
        },
      },
    },
    '/api/users/{id}': {
      get: {
        summary: 'Get user by ID',
        parameters: [
          {
            name: 'id',
            in: 'path',
            description: 'ID of the user to retrieve',
            required: true,
            schema: {
              type: 'integer',
            },
          },
        ],
        responses: {
          200: {
            description: 'User found',
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/User',
                },
              },
            },
          },
          404: { description: 'User not found' },
        },
      },
      put: {
        summary: 'Update a user by ID',
        parameters: [
          {
            name: 'id',
            in: 'path',
            description: 'ID of the user to update',
            required: true,
            schema: {
              type: 'integer',
            },
          },
        ],
        requestBody: {
          required: true,
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/User',
              },
            },
          },
        },
        responses: {
          200: { description: 'User updated' },
          404: { description: 'User not found' },
        },
      },
      delete: {
        summary: 'Delete a user by ID',
        parameters: [
          {
            name: 'id',
            in: 'path',
            description: 'ID of the user to delete',
            required: true,
            schema: {
              type: 'integer',
            },
          },
        ],
        responses: {
          204: { description: 'User deleted' },
          404: { description: 'User not found' },
        },
      },
    },
  },
  components: {
    schemas: {
      User: {
        type: 'object',
        properties: {
          id: { type: 'integer' },
          username: { type: 'string' },
          firstName: { type: 'string' },
          lastName: { type: 'string' },
          email: { type: 'string' },
          password: { type: 'string' },
        },
      },
    },
  },
};

module.exports = { swaggerUi, specs: swaggerDoc };
