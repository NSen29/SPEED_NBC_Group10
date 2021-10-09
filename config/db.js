const mongoose = require('mongoose');
  //const config = require('config');
  const db = 'mongodb+srv://Chris:groupten@cluster0.3e6jh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

const connectDB = async () => {
  try {
    await mongoose.connect( 
        db,{
      useUnifiedTopology: true,
      useNewUrlParser: true,

    }
    );

    console.log(`MongoDB Connected: ${mongoose.connection.host}`)
  } catch (error) {
    console.error(`Error: ${error.message}`)
    process.exit(1)
  }
}

module.exports = { connectDB }
