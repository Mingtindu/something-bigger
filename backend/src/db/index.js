import mongoose from 'mongoose';
import DB_NAME from '../constant.js';

const connectDB = async () => {
    try {
        const connectionString = `${process.env.MONGODB_URL}/${DB_NAME}`;
        console.log(connectionString)
        const connectionInstance = await mongoose.connect(connectionString, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('MongoDB connected successfully');
    } catch (error) {
        console.error("MONGODB connection FAILED ", error);
        process.exit(1);
    }
};

export default connectDB;
