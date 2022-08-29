import mongoose from 'mongoose';
import app from './app'
const PORT = 8000;

mongoose
    .connect(`${process.env.MONGO_URI}`)
    .then(() => {
        console.log('Connect successful to DB MONGO');
    })
    .catch((err) => {
        console.log(`MongoDb connection error. Please make sureDb is running. ${err}`);
    });

app.listen(PORT, () => {
    console.log(`⚡️  Server is running at http://localhost:${PORT}`);
});
