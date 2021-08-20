# SelehannTest

## PRE - Requirements

- Install npm
[npm installation](https://medium.com/javascript-comunidad/c%C3%B3mo-instalar-node-js-y-npm-en-mac-9d80f26fb88d)

## GENERAL INFO - Automated Test cases
```bash
{{your_directory_path}}/TestSelehann/cypress/integration/selehann/*.spec.js
``` 

## Installation

- Clone the project
- Go to the base directory `{{your_directory_path}}/TestSelehann/`
- Execute `npm install`
- Up Cypress `./node_modules/.bin/cypress open`
> More documentation https://docs.cypress.io/guides/getting-started/testing-your-app#Step-1-Start-your-server
- A screen is displayed to select the test case and execute

## Execution
- Select test, browser and execute button

## Test Cases
in the folder TestSelehann/cypress/tc we have all test cases (18) using Gherkin

## Errors

- The lastname field is required and can be sent empty
- The form does not validate the email format
- The form does not validate the number of characters in any field
- The form does not validate special characters
