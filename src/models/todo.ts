import mongoose from 'mongoose';

interface ITodo{
    title:string;
    description:string;
}

interface TodoModelInterface extends mongoose.Model<any>{
    build(attr:ITodo):TodoDoc
}

interface TodoDoc extends mongoose.Document{
    title:string;
    description:string;
}

const todoSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    }
})

todoSchema.statics.build = (attr:ITodo)=>{
    return new Todo(attr)
}

const Todo = mongoose.model<any,TodoModelInterface>('Todo',todoSchema);

const build = (attr:ITodo)=>{
    return new Todo(attr)
}

Todo.build({
    title:'title',
    description:'something'
})

/* build({
    titl:'some title',
    description:'Some Description'
})

build({
    title:44,
    description:'Some description'
})

build({
    title:'some title',
    description:'Some Description',
    hour:1
}) */

export {Todo}