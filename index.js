const express = require('express');
const cors = require('cors');
const compression = require('compression');
const winston = require('winston');

const app = express();

// Use environment variables for configuration
const port = process.env.PORT || 5000;

// Set up logging
const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  defaultMeta: { service: 'my-app' },
  transports: [
    new winston.transports.Console({
      format: winston.format.combine(
        winston.format.colorize(),
        winston.format.simple()
      )
    })
  ]
});

// Log requests
app.use((req, res, next) => {
  logger.info(`${req.method} ${req.url}`);
  next();
});

// Use CORS middleware
app.use(cors());

// Use compression middleware
app.use(compression());

// Serve food images
const images = [
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTN7bDnJVbfQ_N52cD0unbPRK2AKkYrlUmc4g&usqp=CAU',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaYul47fTXRdDh_myA3AE4EatqgdpRoDlMjQ&usqp=CAU',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZbyECFuZDULLZETvPGugsOm1R-gpxCmlMEA&usqp=CAU',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQq1_2E_2UXVksVkyWHfwNOFhyFfKVERZfwg&usqp=CAU',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStPW7Jr8ESW46xM0x4V0nfpOEdTm2D2KLs9g&usqp=CAU',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThR8gzk9gZt4Gu91s5ymXLDNR_geSfXzRGyQ&usqp=CAU',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJNCvDhJrzR_mwOTqskIjGytem3llNkoFF9g&usqp=CAU',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTctgOVpE-gMOXnbgQsCM8rmD6i3Ql3mu3FCA&usqp=CAU',
  'https://t3.ftcdn.net/jpg/03/60/06/94/360_F_360069497_x5lTY09pn6AuhUHcjdOkQr0LzU7pMrr9.jpg',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3OfE55BBBQl1GGuwDB2Jrg5_D_FXBFF4gVg&usqp=CAU',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQr8uz8cgnnJzoa_jXHCoREmj28Fqx-4HtijA&usqp=CAU',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVXESa_sqAp1I7xPvok6srKCIGQLZs0crYjg&usqp=CAU',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAl7i8UdYX0H4dZ3Ab91uFU5nbpoNig8reZQ&usqp=CAU',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcbcU_pUOkJbGEXy4LJjVZlTXGuAfBwz5wqg&usqp=CAU',
 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuP3Bt1sbWY6Z_S-j8Udqark6qgqQ0x2t-hQ'
 ]
 
 app.get('/', (req, res) => {
  res.send('Server is running');
});

// Endpoint to serve food images
app.get('/images', (req, res) => {
  res.json(images);
});

// Start the server
app.listen(port, 'localhost', () => {
  logger.info(`Server is running on http://localhost:${port}`);
});