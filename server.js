const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const cors = require("cors");

dotenv.config();
connectDB();

const app = express();
app.use(express.json());
app.use(cors({ origin: ["https://infinitepreparation.netlify.app"] }));

// Routes
app.use("/api/vocabulary", require("./routes/vocabularyRoutes"));
app.use("/api/idioms", require("./routes/idiomRoutes"));
app.use("/api/phrasal-verbs", require("./routes/phrasalVerbRoutes"));
app.use("/api/onewordsubs", require("./routes/oneWordSubRoutes")); // fixed path

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
