const fs = require('fs');
const path = require('path');
const { LOG_DIR } = require('./constants');
const { getTimestamp } = require('./helpers');

// Ensure log directory exists
const ensureLogDirExists = () => {
    if (!fs.existsSync(LOG_DIR)) {
        fs.mkdirSync(LOG_DIR, { recursive: true });
    }
};

// Generate a log file with the given content
const saveLog = (content) => {
    ensureLogDirExists();
    const timestamp = getTimestamp();
    const logFilePath = path.join(LOG_DIR, `font-size-report-${timestamp}.txt`);
    fs.writeFileSync(logFilePath, content);
    console.log(`Report saved to: ${logFilePath}`);
    return logFilePath;
};

module.exports = {
    saveLog,
};