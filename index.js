const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

app.get('/data', (req, res) => {
    const d = new Date();
    const data = {
        email: "danlewismuriuki2@gmail.com",
        current_datetime: d.toISOString(),
        github_url: "https://github.com/danlewismuriuki/HNG12-task0"
    };
    res.json(data);
});

const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});