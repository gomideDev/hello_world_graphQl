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