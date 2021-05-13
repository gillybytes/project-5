const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

module.exports = connectDataBase = asynch() => {
  try {
    const databaseConnection = await mongoose.connect(process.env.DB, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
    });
    console.log(`Database connected ::: ${databaseConnection.connection.host}`);
  } catch (err) {
    console.error(`Error ::: ${err.message}`);
    process.exit(1);
  }
};