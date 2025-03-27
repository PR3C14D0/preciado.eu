import mongoose from 'mongoose';

if(process.env.DB_USERNAME && process.env.DB_PASSWORD && process.env.DB_URI) {
    const username: string = process.env.DB_USERNAME;   
    const password: string = process.env.DB_PASSWORD;
    const uri: string = process.env.DB_URI;

    mongoose.set('strictQuery', false);
    mongoose.connect(`mongodb+srv://${username}:${password}@${uri}/preciado?retryWrites=true&w=majority`).then(() => console.log('DB Connected successfully'));
}
