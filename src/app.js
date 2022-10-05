/* Importing the express and morgan modules. */
import express from "express";
import morgan from "morgan";

/* Importing the routes from the index.routes file. */
import productRoutes from "./routes/index.routes"


/* Creating an instance of the express module. */
const app = express();

/* Setting the port to 4000. */
app.set("port",4000);


/* middleware  */
app.use(morgan("dev"));
app.use(express.json());



/* Telling the app to use the routes from the productRoutes file. */
app.use("/api-restful/products",productRoutes);

/* Exporting the app variable so that it can be used in other files. */
export default app;
