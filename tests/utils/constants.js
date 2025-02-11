const path = require('path');

// Accessibility benchmark constants
const MIN_FONT_SIZE_PT = 10;
const PT_TO_PX = 1.3333;
const MIN_FONT_SIZE_PX = MIN_FONT_SIZE_PT * PT_TO_PX; // ~13px
const FAIL_THRESHOLD = 0; // accessibility test with 0 is a strict test, a treshold of number of accepted small font texts can be set here

// Selector for visible elements inside <body>
const ELEMENT_SELECTOR = 'body *';

// Log directory path - using path.resolve to get absolute path to project root
const LOG_DIR = path.resolve(__dirname, '../../logs');

const SPORTS = {
    FOOTBALL: '1',
    //BASKETBALL: '2'  // Add others as needed
};

module.exports = {
    MIN_FONT_SIZE_PT,
    PT_TO_PX,
    MIN_FONT_SIZE_PX,
    FAIL_THRESHOLD,
    ELEMENT_SELECTOR,
    LOG_DIR,
    SPORTS,
};