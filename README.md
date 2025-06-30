**_ A production-grade Express.js security middleware suite, implementing real-world best practices to protect your API from common web vulnerabilities. _**

# Features Included

- ✅ Helmet – Secure HTTP headers
- ✅ CORS – Cross-origin resource protection
- ✅ Rate Limiting – Brute-force & DoS defense
- ✅ XSS Clean – Sanitize user input (XSS)
- ✅ HPP – Prevent HTTP Parameter Pollution
- ✅ Morgan + Winston – Smart request & error logging
- ✅ Modular Middleware – Clean and scalable architecture
- ✅ Environment-aware configuration (dev vs prod)

# Tech Stack

- Node.js

- Express.js

- Helmet, CORS, XSS-Clean, HPP

- express-rate-limit

- Morgan for HTTP logging

- Winston for file & console logging

- ESM (type: module)

# 📁 Project Structure

Security-Middleware-Suite/
│--- Logs # Ignored in Git (runtime logs)
├── src/
│  
│ ├── middleware/
│ │ └── security.middleware.js # All security middleware
│ └── utils/
│ └── logger.js # Winston logger config
|\_\_ getEnvVar.js # Environmental variables
│

│
├── .env # Environment variables
├── .gitignore
└── README.md

# Usage

**_ Clone the repo _**

- git clone https://github.com/your-username/Security-Middleware-Suite.git
  cd Security-Middleware-Suite

# Install dependencies

- npm install

# Create a .env file

- PORT=
- NODE_ENV=development

# Run the server

- npm run dev

# Visit http://localhost:5000

# Notes

- The logs/ directory is auto-created by Winston if it doesn't exist.

- Logging behavior differs by NODE_ENV:

- development: console logging only

- production: writes to combined.log and error.log

# Designed For

- This project is ideal for:

- Mid-level backend devs practicing secure API structure

- Teams building a foundational Express.js setup

- Real-world Node.js applications (REST APIs)
