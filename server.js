const express = require("express");
const app = express();
const PORT = process.env.PORT || 4000;

app.get("/", (req, res) => {
  res.json({ ipfs: "ipfs://QmSUMUHbMxHVksmzPTo8XqG5anDFs8sZ5cxz4ajfDUT14y" });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
