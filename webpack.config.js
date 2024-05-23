const Dotenv = require('dotenv-webpack');

module.exports = {
  // Other webpack configuration settings...
  plugins: [
    new Dotenv()
  ]
};
