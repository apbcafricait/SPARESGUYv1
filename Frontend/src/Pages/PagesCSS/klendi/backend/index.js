import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.json({message: "API is running..."});
});
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});