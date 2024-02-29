# Coding Exercise

All tests are stored in master branch.

## Execute Cypress tests locally
1) Make sure that you have already installed [NodeJS](https://nodejs.org/uk/download/) on your computer
2) Clone repository https
3) Open terminal window and switch to directory: ./codingExercise
4) Execute `npm install`
5) Execute the following commands:
       `npm run test:debug` in order to open Cypress runner in debug mode.
       `test:report:chrome` in order to run Cypress tests on Chrome browser in headless mode.
       `test:report:electron` in order to run Cypress tests in headless mode.

## Reports

Mochawesome simple reporter is used. Simple run one of the test:report scripts in your terminal. It will generate an index.html file under "reports/html" derictory. Locate this folder in your directory and open this file in order to observe the report. 
