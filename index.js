require('dotenv').config();

const app = require('express')();
const PORT = process.env.PORT;

app.use('/home', (req, res) => {
  res.json({ message: 'Hello from Server' });
});

app.listen(PORT, () => {
  console.log(`Server listening on PORT: ${PORT}`);
});
