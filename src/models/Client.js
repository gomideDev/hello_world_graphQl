import sequelize from '../database';
import {DataTypes} from 'sequelize';

const Client = sequelize.define('clients', {
    _id:{
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey:true
    },
    name:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    cpf: {
        type: DataTypes.TEXT,
        allowNull: false,
    }
})

export default Client;

// import mongoose, { mongo } from 'mongoose';

// const clientSchema = new mongoose.Schema({
//     name:{
//         type: String,
//         required: true
//     },
//     cpf:{
//         type: String,
//         required: true
//     },
//     address:{
//         type: String,
//         required: true
//     },
//     active:{
//         type: Boolean,
//         required: true
//     }
// });

// export default mongoose.model('Client', clientSchema);