import winston from 'winston';
import fs from 'fs';
import path from 'path';

// Get absolute path to the logs directory
const __dirname = path.resolve(); // Get the current directory
const logsDir = path.join(__dirname, 'logs');

// Ensure the logs directory exists
if (!fs.existsSync(logsDir)) {
    fs.mkdirSync(logsDir, { recursive: true }); // Create logs directory if it doesn't exist
}    

// Create a logger instance
// This logger will log messages to the console with a timestamp and log level
const logger = winston.createLogger({
    level: 'info',
    format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.printf((
            {
            timestamp,
            level,
            message
        }
    ) => {
        return `${timestamp} ${level.toUpperCase()}: ${message}`;
    })
    ),
    transports: [
        new winston.transports.Console(), // Log to console
        new winston.transports.File({filename: path.join(logsDir, 'error.log'), 
            level: 'error'}), // Log error messages to a file
        new winston.transports.File({filename: path.join(logsDir, 'combined.log')}) // Log all messages to a file
    ]
});

export default logger;