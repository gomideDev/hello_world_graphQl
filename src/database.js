import {Sequelize} from 'sequelize';

const sequelize = new Sequelize('graphql', 'root', '#@dev#1996', {
    host: '4.tcp.ngrok.io',
    port: 14003,
    dialect: 'mysql'
});

export default sequelize;