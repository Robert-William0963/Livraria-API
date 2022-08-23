import mongoose from "mongoose";

const password = 'NYTJjoVpT5q7qIB3';

mongoose.connect(`mongodb+srv://Alura-Node:${password}@alura.ga1iqzh.mongodb.net/alura-node`);

let db = mongoose.connection;

export default db;