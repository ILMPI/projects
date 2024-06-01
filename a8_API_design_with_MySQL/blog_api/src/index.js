const express = require('express');
const authorRoutes = require('./routes/authorRoutes');
const postRoutes = require('./routes/postRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/authors', authorRoutes);
app.use('/api/posts', postRoutes);

app.listen(PORT, () => {
    console.log(`Server is waiting for you being fully prepeared on port ${PORT}`);
});
