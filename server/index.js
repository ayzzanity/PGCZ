const express = require("express");
const app = express();
const PORT = 8081;

app.use("/api/pokemon", require("./routes/pokemon"));
app.listen(PORT, () => console.log(`Backend running on PORT ${PORT}`));
