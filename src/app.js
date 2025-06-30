import { applySecurityMiddleware } from './middlewares/security.middleware.js';
import express from 'express';
import http from 'http';

const app = express();
const server = http.createServer(app);

// Middleware to enhance security
applySecurityMiddleware(app);
// sample route
app.get('/', (req, res) => {
  res.send('Hello, Middleware suite active!');
})


export {app, server};