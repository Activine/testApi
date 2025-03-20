const express = require("express");
const app = express();
const PORT = process.env.PORT || 4000;

app.get("/", (req, res) => {
  res.json({
    name: "CARBONCOIN Certificate #9",
    description: "Carbon Offset Project",
    tokenAddress: "0xF6636D8e4d22715124Cb5a02703dA0827833ad30",
    txHash:
      "https://amoy.polygonscan.com/tx/0x9f4fe5d9f78d2a5293082d5157a08a1ee09da3be39fa13eb6ec44b12ea771bb0",
    image: "ipfs://Qmbr67MgmCBSRbXJoCsNZ2oeznMXwwqxEpfKbWHeueNPb3",
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
