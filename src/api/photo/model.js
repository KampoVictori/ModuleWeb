import {Schema, model } from 'mongoose';

const photoSchema = new Schema({
    author: String,
    name: String,
    description: String,
    url: String,
    hashtag: String,
    date: Date,
    count_like: Number,
    list_comment: String
});

const Photo = model("photo", photoSchema);

export default Photo;