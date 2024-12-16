const mongoose = require('mongoose');
const { MongoClient } = require('mongodb');
// MongoDB connection URI
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/vast-challenge';

// Function to connect to MongoDB
const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });

      const client = new MongoClient(MONGO_URI);
    
      try {
        // Connect to MongoDB
        await client.connect();
    
        // Access the database
        const db = client.db('vast-challenge');
    
        // List all collections
        const collections = await db.listCollections().toArray();
      } catch (err) {
        console.error('Error:', err);
      } finally {
        // Close the connection
        await client.close();
      }
    console.log('MongoDB Connected...');
  } catch (err) {
    console.error(`Error: ${err.message}`);
    process.exit(1); // Exit process with failure
  }
};

module.exports = connectDB;
