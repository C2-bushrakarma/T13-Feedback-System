const express = require("express");
const cors = require("cors");
const db = require("./db/db");
const app = express();
app.use(express.json());
app.use(cors());

const adminRouter = require("./routers/routes/admin");
const userRouter = require("./routers/routes/user");
const loginRouter = require("./routers/routes/login");

app.use("/login", loginRouter);
app.use("/admin", adminRouter);
app.use("/user", userRouter);

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server On ${PORT}`);
});