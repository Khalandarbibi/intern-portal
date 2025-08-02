const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

app.use(cors());

const internData = {
  name: "Sannu",
  referralCode: "sannu2025",
  totalDonations: 5230,
  rewards: ["Bronze Badge", "Silver Badge"],
  leaderboard: [
    { name: "Aarya Mehta", amount: 6200 },
    { name: "Sannu ", amount: 5230 },
    { name: "Devansh Tiwari", amount: 4900 }
  ]
};

app.get('/api/intern', (req, res) => {
  res.json(internData);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});