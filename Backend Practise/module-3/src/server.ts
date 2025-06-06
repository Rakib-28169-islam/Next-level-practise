import { MongoClient, ServerApiVersion } from "mongodb";
import app from "./app";
import { client } from "./config/mongodb.config";
const port = 3000;


const runServer = async () => {
  try {
    await client.connect();
    console.log("Connected to MongoDB");
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    //   console.log(collection);
    });
  } catch (error) {
    console.error("Error starting the server:", error);
  }
};
runServer();
