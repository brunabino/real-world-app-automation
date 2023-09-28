# Real World App Automation

## Project Description
This project is an automation script built using the [Real World App](https://github.com/cypress-io/cypress-realworld-app/) repository from cypress-io. It automates various interactions with the Real World App to test its functionality. Please note that this project is **not compatible with Yarn Modern** (version 2 and later).

## Prerequisites

Before you begin, ensure you have met the following requirements:

- **Node.js:** This project requires Node.js. If you don't have it installed, you can download it from [here](https://nodejs.org/).

- **Yarn Classic:** To manage dependencies, you'll need Yarn Classic. You can install it globally by running the following command:

    ```shell
    npm install yarn@latest -g
    ```
     Note: This project is not compatible with Yarn Modern (version 2 and later).    

- **ChanceJs:** ChanceJs is used to generate random data for testing. You can install it by running:

    ```shell
    npm install chance
    ```
## Installation

 
   ```shell
    yarn
   ```



- **Mac Users with M-series Chips:** If you are using a Mac with an M-series chip, you will need to set the PUPPETEER_SKIP_CHROMIUM_DOWNLOAD environment variable to true before installing dependencies.

    ```shell
    PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true yarn install
    ```



## Running the App
   
  ```shell
  yarn dev
  ```
## Running Cypress Tests

  ```
  yarn cypress:open
  ```

### Automation Test Order

For now, the automation needs to run in the following order:

1. login-sign-up
2. main-fist-access
3. main

Please note that the automation it's not finished yet, stay tuned for new updates. 🚀



