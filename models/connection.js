const mongoClient = require('mongodb').MongoClient;

const connection = () =>
  mongoClient
    .connect(process.env.MONGO_DB_URL || 'mongodb://127.0.0.1:27017', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 1000,
    })
    .then((conn) => conn.db(process.env.DB || 'cookMasterV2'));

module.exports = connection;
