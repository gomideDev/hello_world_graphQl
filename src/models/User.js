import sequelize from '../database';
import {DataTypes, STRING} from 'sequelize';

const User = sequelize.define('users',{
    _id:{
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    firstname:{
        type: DataTypes.STRING,
        allowNull: false
    },
    lastname:{
         type: DataTypes.STRING,
         allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    active:{
        type: DataTypes.BOOLEAN,
        allowNull: false
    }
})

export default User

// import mongoose from 'mongoose';

// const userSchema = new mongoose.Schema({
//     firstname: {
//         type: String,
//         required: true
//     },
//     lastname: {
//         type: String,
//         required: true
//     },
//     email: String,

//     active: {
//         type: Boolean,
//         required: true
//     },
// })

// export default mongoose.model('User', userSchema);