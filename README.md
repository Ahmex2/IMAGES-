# Images-API

This is a simple Node.js application designed to serve food images and provide basic server functionalities. It utilizes Express.js for routing, CORS middleware for cross-origin requests, compression middleware for response compression, and Winston for logging.

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Install dependencies:
   ```
   npm install
   ```

## Usage

1. Start the server:
   ```
   npm start
   ```
2. Access the server at [http://localhost:5000](http://localhost:5000).

## Endpoints

- `GET /`: Returns a simple message indicating that the server is running.
- `GET /images`: Returns a JSON array of food image URLs.

## Dependencies

- [Express.js](https://expressjs.com/): Fast, unopinionated, minimalist web framework for Node.js.
- [CORS](https://github.com/expressjs/cors): Node.js CORS middleware.
- [Compression](https://github.com/expressjs/compression): Node.js compression middleware.
- [Winston](https://github.com/winstonjs/winston): A logger for just about everything.

## Configuration

The server port can be configured using the `PORT` environment variable. By default, the server runs on port `5000`.

## Logging

The application logs HTTP requests to the console using Winston logger.

## Contributing

Contributions are welcome! Please feel free to open a pull request.

🍔🥗🍰

Feel free to use and modify the code for personal or commercial use.