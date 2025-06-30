import express from 'express';
import helmet from 'helmet';
import  http from 'http';
import cors from 'cors';
import xss from 'xss-clean';
import hpp from 'hpp';
import morgan from 'morgan';
import logger from '../utils/logger.js';
import rateLimit from "express-rate-limit";
import { getEnvVar } from '../utils/getEnvVar.js';


// Middleware to limit repeated requests to public APIs and/or endpoints
export const rateLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // Limit each IP to 100 requests per windowMs
    standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
    legacyHeaders: false, // Disable the `X-RateLimit-*` headers
    message: {
        status: 429,
        error: "Too many requests, please try again later."
    }
});

// Morgan stream for production 
const morganStream = {
    write: (message) => logger.info(message.trim())
};

// export middleware function
export const applySecurityMiddleware = (app) => {
    // Middleware to enhance security
    app.use(helmet());
    app.use(cors());
    app.use(rateLimiter);
    app.use(xss());
    app.use(hpp());

    // Logging middleware
    if (getEnvVar('NODE_ENV') === 'production') {
        app.use(morgan('combined', { stream: morganStream }));
    } else {
        app.use(morgan('dev'));
    }
    
    // Parse JSON bodies
    app.use(express.json());
    
    // Parse URL-encoded bodies
    app.use(express.urlencoded({ extended: true }));
}

