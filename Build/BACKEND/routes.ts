import express from "express";
import cors from "cors";

const app = express();
app.use(cors());

app.get("/test", (req, res) => {
  res.json({ message: "Connection successful" });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
