import mongoose from "mongoose";

(async () => {
  try {
    await mongoose.connect(process.env.MONGODB);
    console.log("Connectado com DB");
  } catch (error) {
    console.log(error);
  }
})();