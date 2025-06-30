import dotenv from 'dotenv';

dotenv.config();

// Function to get environment variables
// takes a key and returns the value of the environment variable

export function getEnvVar(key) {
  const value = process.env[key];
  if (value === undefined) {
    throw new Error(`Environment variable ${key} is not defined`);
  }
  return value;
}
