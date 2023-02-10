const express = require("express");
const app = express();
const PORT = 3000;
const userRouter = require("./routers/userRouter");


app.use(express.json({ limit: "10kb" }));
app.use(express.urlencoded({ limit: "10kb", extended: false }));

app.use("/users", userRouter);

app.listen(PORT, () => {
  console.log("Server is listening on port " + PORT);
});
