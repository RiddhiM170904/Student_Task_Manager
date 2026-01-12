import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI, {
      serverSelectionTimeoutMS: 5000, // Timeout after 5s instead of 30s
    });
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`MongoDB Connection Error: ${error.message}`);
    console.error('\n⚠️  IMPORTANT: Make sure your IP address is whitelisted in MongoDB Atlas');
    console.error('   Visit: https://cloud.mongodb.com/ → Network Access → Add IP Address\n');
    process.exit(1);
  }
};

export default connectDB;
