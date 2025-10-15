const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('<h1>Hello from Jenkins server + Docker Web App 🚀</h1>');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`✅ App is running on http://localhost:${PORT}`);
});
