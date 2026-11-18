const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// We can use Chrome Devtools protocol or run a puppeteer-like command if we have playwright or simple cdp.
// Let's check if we can run CDP script.
