import express from "express";
import cors from "cors";

const app = express();


const { PORT } = process.env;

app.use(cors());

app.get("/", (req, res) => {
  // redirect to the /test route
  res.status(302).redirect("http://localhost:8001/test");
});

app.get("/test", (req, res) => {
  console.log(req.headers);
  res.send("Hello from the test route");
});

app.listen(PORT, () => {
  console.log("Server is running on port", PORT);
});
