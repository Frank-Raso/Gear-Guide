const express = require("express");
const bodyParser = require("body-parser");
require("dotenv").config();

const app = express();
const cloudinary = require("./utils/cloudinary");
const sessionMiddleware = require("./modules/session-middleware");
const passport = require("./strategies/user.strategy");

// Route includes
const userRouter = require("./routes/user.router");
const gearPostRouter = require("./routes/gearPost.router");
const getProfileRouter = require("./routes/getProfile.router.js");
const getAllRouter = require("./routes/getAll.router.js");
const getAmpsRouter = require("./routes/getAmps.router.js");
const getGuitarsRouter = require("./routes/getGuitars.router.js");
const getAccessoriesRouter = require("./routes/getAccessories.router.js");
const editGearRouter = require("./routes/editGear.router.js");
const uploadImageRouter = require("./routes/uploadImage.router.js");
const uploadEditImageRouter = require("./routes/uploadEditImage.router.js");
const editPutImageRouter = require("./routes/editPutImage.router.js");
const collectionRouter = require("./routes/collection.router.js");
// Body parser middleware

// app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));
// Passport Session Configuration //
app.use(sessionMiddleware);

// start up passport sessions
app.use(passport.initialize());
app.use(passport.session());

/* Routes */
app.use("/api/user", userRouter);
app.use("/api/AddGear", gearPostRouter);
app.use("/api/profile", getProfileRouter);
app.use("/api/all", getAllRouter);
app.use("/api/amps", getAmpsRouter);
app.use("/api/guitars", getGuitarsRouter);
app.use("/api/accessories", getAccessoriesRouter);
app.use("/api/edit", editGearRouter);
app.use("/api/uploadImage", uploadImageRouter);
app.use("/api/uploadEditImage", uploadEditImageRouter);
app.use("/api/edit/putimage", editPutImageRouter);
app.use("/api/collection", collectionRouter);

app.get("/api/images", async (req, res) => {
  const { resources } = await cloudinary.search
    .expression("folder: Prime")
    .sort_by("public_id", "desc")
    .max_results(10)
    .execute();

  const publicIds = resources.map((file) => file.public_id);
  res.send(publicIds);
});

// Serve static files
app.use(express.static("build"));

// App Set //

/** Listen * */
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
