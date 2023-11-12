const express = require('express');
const app = express();
const port = process.env.PORT || 3000; // Use the port you prefer

// Serve static files from the 'client' directory
app.use(express.static('client'));

app.listen(port, () => {
    console.log(`App is running on port ${port}`);
});
