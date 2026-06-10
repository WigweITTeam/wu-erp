export const environment = {
  production: true,
  // When deploying with Nginx reverse proxy, use relative path to avoid CORS entirely.
  // Nginx proxies /api/* -> backend:8080/*
  apiUrl: '/api',
  microsoftAuth: {
    tenantId: 'c9a98a3d-152f-4eb3-b93f-9b26fdd08495',
    clientId: 'a695dca1-f7eb-40ea-8890-cf2bf5f68ad7',
    redirectUri: 'https://erp.uat.wigweuniversity.edu.ng/auth/microsoft-callback',
  },
};
