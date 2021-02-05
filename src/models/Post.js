import sequelize from '../database';
import {DataTypes} from 'sequelize';

const Post = sequelize.define('posts', {
    _id:{
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    title:{
        type: DataTypes.STRING,
        allowNull: false
    },
    content: {
        type: DataTypes.STRING,
        allowNull: false
    },
    author: {
        type: DataTypes.INTEGER,
        allowNull: false
        
    }
});

export default Post;

// import mongoose from 'mongoose';

// const postSchema = new mongoose.Schema({
//     title: {
//         type: String,
//         required: true
//     },
//     content: {
//         type: String,
//         required: true
//     },
//     author: {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: 'User',
//         required: true
//     },

// })

// export default mongoose.model('Post', postSchema);