import mongoose from 'mongoose';

const uri = 'mongodb://ds213645.mlab.com:13645/ntnuikite';

const options = {
  user: process.env.DB_USER,
  pass: process.env.DB_PASSWORD
};

const connectToDB = () => {
  mongoose.connect(uri, options);

  const db = mongoose.connection;
  db.once("open", () => console.log("connected to the database"));

  db.on("error", console.error.bind(console, "MongoDB connection error:"));
};

export default connectToDB;
