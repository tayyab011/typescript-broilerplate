import mongoose from "mongoose";
import { app } from "./index.js";
import { MONGODB_CONNECTION } from "./config/config.js";
const PORT = process.env.PORT || 5050;
mongoose
    .connect(MONGODB_CONNECTION)
    .then(() => console.log("MongoDB Connected"))
    .catch((err) => console.log(err));
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
