import {Sequelize} from 'sequelize';

const sequelize = new Sequelize('graphql', 'root', '#@dev#1996', {
    host: 'localhost',
    dialect: 'mysql'
});

export default sequelize;