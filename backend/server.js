const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

let users = [
  { name: "Priya Sharma", referralCode: "priya2025", donations: 82000 },
  { name: "Rahul Mehta", referralCode: "rahul2025", donations: 65000 },
  { name: "Aditya Sutar", referralCode: "aditya2005", donations: 31000 },
  { name: "Sneha Patil", referralCode: "sneha2025", donations: 28000 },
  { name: "Rohan Verma", referralCode: "rohan2025", donations: 19000 },
];

function generateUniqueReferralCode(name, existingUsers) {
  let code;
  do {
    const randomNum = Math.floor(1000 + Math.random() * 9000);
    code = name.toLowerCase().replace(/\s+/g, "") + randomNum;
  } while (existingUsers.some((user) => user.referralCode === code));
  return code;
}

app.post("/user", (req, res) => {
  const { name } = req.body;
  const referralCode = generateUniqueReferralCode(name, users);
  const newUser = {
    name,
    referralCode,
    donations: Math.floor(Math.random() * 100000), // Random donations for demo
  };

  users.push(newUser);

  res.status(201).json(newUser);
});

app.get("/user/:referralCode", (req, res) => {
  const { referralCode } = req.params;
  const user = users.find((u) => u.referralCode === referralCode);

  if (!user) {
    return res.status(404).json({ error: "User not found" });
  }
  res.json(user);
});

app.get("/leaderboard", (req, res) => {
  const sortedUsers = [...users].sort((a, b) => b.donations - a.donations);
  res.json(sortedUsers);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
