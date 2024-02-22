import { app } from "./app.js";
import { connectDB } from "./data/database.js";

// Database conncted
connectDB();

app.listen(process.env.port, () => {
  console.log(
    `Server is working on port: ${process.env.PORT} in ${process.env.NODE_ENV} mode`
  );
});
