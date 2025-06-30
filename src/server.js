import { server } from './app.js';
import { getEnvVar } from './utils/getEnvVar.js';


const PORT = getEnvVar('PORT') || 5000;


// immediately invoked function expression (IIFE) to handle any startup logic
(() => {
  server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
})();