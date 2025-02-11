# EpicBet Sportsbook Test Automation Project

## Overview

This project implements automated testing for the EpicBet sportsbook web application (https://epicbet.com/et/sport/) using Playwright. The test suite focuses on critical functionality, accessibility, and user experience across different devices and browsers.

## Test Cases

Based on exploratory testing findings, three critical test cases were selected:

### 1. Accessibility - Font Size Compliance

**Objective**: Ensure all text meets minimum font size requirements (10pt/13px) for accessibility

**Implementation**: 
* Tests all visible text elements on the page
* Generates detailed reports grouping elements by CSS classes
* Helps developers easily identify areas needing improvement

**Business Impact**: Critical for user experience and accessibility compliance

### 2. Mobile Dropdown Menu Functionality

**Objective**: Verify proper behavior of market types menu in mobile view

**Implementation**:
* Tests menu visibility and positioning during scrolling
* Verifies interaction with menu items

**Business Impact**: Affects mobile users' ability to navigate and place bets

### 3. Search Result Prioritization

**Objective**: Verify search results prioritize exact matches

**Implementation**:
* Tests search functionality with various queries
* Verifies result ordering and relevance

**Business Impact**: Directly affects users' ability to find and bet on desired events

## Project Structure

```
├── tests/
│   ├── specs/
│   │   ├── accessibility.spec.js
│   │   ├── mobile-dropdown.spec.js
│   │   └── search.spec.js
│   ├── pages/
│   │   ├── BasePage.js
│   │   ├── AccessibilityPage.js
│   │   ├── SearchPage.js
│   │   └── SportPage.js
│   ├── utils/
│   │   ├── constants.js
│   │   ├── helpers.js
│   │   ├── logger.js
│   │   └── accessibilityHelper.js
│   └── reporters/
│       └── custom.js
├── Exploratory testing/
├── logs/
├── screenshots/
├── playwright-report/
├── test-results/
├── playwright.config.js
└── README.md
```

## Architecture Decisions

### 1. Page Object Pattern
* Implemented for improved maintainability and scalability
* Each page type has its own class with relevant selectors and methods

### 2. Custom Reporting
* HTML reports with screenshots on failure
* Custom accessibility reports grouped by CSS classes
* Detailed logging for debugging and monitoring

### 3. Cross-browser Testing
* Tests run on multiple browsers and devices
* Configured in playwright.config.js

## Setup and Running Tests

### Prerequisites
* Node.js (v14 or higher)
* npm

### Installation

```bash
# Clone the repository
git clone [repository-url]

# Install dependencies
npm install

# Install Playwright browsers
npx playwright install
```

### Running Tests

```bash
# Run all tests
npm test

# Run specific test file
npx playwright test tests/specs/accessibility.spec.js

# Run tests in specific browser
npx playwright test --project="Desktop Chrome"
```

## Reporting

* HTML reports are generated in `playwright-report/`
* Accessibility reports are saved in `logs/`
* Screenshots of failures are saved in `test-results/`

## Notes

* In real life the test benchmarks would be discussed with other team members to understand better the business case and other requirements
* Tests are performed in an unauthenticated state as per requirements
* Test cases were selected based on exploratory testing findings
* Focus is on scalability and maintainability for a real working environment


## Author

Anni Müüripeal
anni.myyripeal@gmail.com
+372 53034950