const express = require("express");
const { PORT } = require("./utils/config");

const authRouter = require("./routes/auth");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//TOOD:use ZOD to check req datatypes

app.use("/auth", authRouter);

app.get("/*", (req, res) => {
  return res.json({ message: "This route does not exist" });
});

//global catch
app.use((err, req, res, next) => {
  console.log(err);
  return res.json({ message: "Seems like something went wrong from our side" });
});

app.listen(PORT, () => console.log("Listening on port", PORT));
