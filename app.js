const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// Placeholder route
app.get('/', (req, res) => {
    res.json({ message: 'MindfulSpace backend running!' });
});

app.listen(PORT, () => {
    console.log(`MindfulSpace backend running on http://localhost:${PORT}`);
}); 