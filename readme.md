# AWS Cognito Hosted UI Node.js Sample App

- Landing page
- AWS Cognito Hosted UI

## Installation

    mkdir aws-cognito-hosted-ui-nodejs-sample-app
    cd aws-cognito-hosted-ui-nodejs-sample-app
    git clone git@github.com:mahmutbayri/aws-cognito-hosted-ui-nodejs-sample-app.git .
    npm install
    cp .env.example .env
    # edit your .env file, and difine CLIENT_ID, USERPOOL_ID, DOMAIN

## Test server
    
    PORT=9900 node index.js
    
http://localhost:9900

## Screenshots

### Landing page

![](screenshots/landing-page.jpg)

### Amazon Cognito Hosted UI - Login page

![](screenshots/hosted-ui-login-page.jpg)

### Amazon Cognito Hosted UI - Sign up page

![](screenshots/hosted-ui-sign-up-page.jpg)

### Amazon Cognito Hosted UI - Forgot password page

![](screenshots/hosted-ui-forgot-password-page.jpg)

### Amazon Cognito Hosted UI - Redirect page

![](screenshots/login-redirect-page.jpg)

### Landing page with a private content

![](screenshots/landing-page-with-private-content.jpg)

### Logout redirect page

![](screenshots/logout-redirect-page.jpg)
