import express from 'express';
import mongoose from 'mongoose';
import { json } from 'body-parser';
import { todoRouter } from './routes/todo';

mongoose.connect('mongodb://localhost:27017/todo',{
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true
},()=>{
    console.log('connected to database')
})

const app = express();
app.use(json())
app.use(todoRouter)

app.listen(3000, () => {
    console.log('server is listening at 3000');
})