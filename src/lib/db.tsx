import mongoose from 'mongoose';

const connection :any = {};
const url = process.env.MONGO_URI as string



async function connect() {
    if (connection.isConnected) {
        return;
    }
    if (mongoose.connections.length > 0) {
        connection.isConnected = mongoose.connections[0].readyState;
        if (connection.isConnected === 1) {
            return;
        }
        await mongoose.disconnect();
    }
    const db = await mongoose.connect(url);
    connection.isConnected = db.connections[0].readyState;
}

async function disconnect() {
    if (connection.isConnected) {
        if (process.env.NODE_ENV === 'production') {
            await mongoose.disconnect();
            connection.isConnected = false;
        }
    }
}
const db = { connect, disconnect };
export default db;







// import mongoose from "mongoose";

// const connectDB = async () => {
// const url = process.env.MONGO_URI as string

//   try {
//     if (mongoose.connection.readyState === 0) {
//       await mongoose.connect(process.env.MONGO_URI);
//       console.log("db connected");
//     }
//   } catch (error) {
//     console.log(error);
//   }
// };

// export default connectDB;











// import mongoose from "mongoose";

// let connection: typeof mongoose;
// const url = process.env.MONGO_URL as string

// const connect = async () => {
//   // if(mongoose.connection[0].readyState) return
//   try {
    
//     if(!connection) connection = await mongoose.connect(url);
//     return connection;
//      console.log("mongo is successfully connected");
     
      
//   } catch (error) {
//     throw new Error("Error connecting to database")
//   }
//   }
 
// export default connect;
