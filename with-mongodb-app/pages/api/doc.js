// doc.js

import { withSwagger } from 'next-swagger-doc';

// Configuration de la documentation Swagger pour l'API
const swaggerHandler = withSwagger({
  openApiVersion: '3.0.0',
  title: 'Essaie',
  version: '1.0.0',
  apiFolder: 'pages/api',
  components: {
    schemas: {
      // Définition du schéma pour les 'Movies'
      Movies: {
        type: 'object',
        properties: {
          title: { type: 'string' },
          year: { type: 'integer' },
        },
      },
    },
  },
});

export default swaggerHandler();
