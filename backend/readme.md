# Posts Application Backend

## How to install and run

Once this code is on your computer, open the **backend** folder in the terminal and run the following commands:

- npm install
- npm start

## How to use it

Having executed those commands above, the REST API will be running on port 8080 to be utilized by the frontend.

### REST Client

In this repository, there is a file called **routes.rest**. This file is here to provide an easy way to test all of the API endpoints in this application.

- Install the VS Code Extension [REST Client](https://marketplace.visualstudio.com/items?itemName=humao.rest-client)
- Restart VS Code
- Open the **routes.rest** file in VS Code.
- Click the _send request_ button that is included above each route in the file.

### Running Tests

Tests have been written that test each API endpoint in this project. To run these tests, execute the following command:

- npm run test

## Other Notes

To check the code for errors, the following command may be executed:

- npm run lint
