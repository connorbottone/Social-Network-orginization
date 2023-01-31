const { connect, connection } = require('mongoose');

connect('mongodb://localhost/Socialnetwork', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = connection;