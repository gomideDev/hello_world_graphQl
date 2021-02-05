import {ApolloServer, PubSub} from 'apollo-server';
import mongoose from 'mongoose';
import sequelize from './database' 
import clientModel from './models/MClient';
import User from './models/User';

function startServer({typeDefs, resolvers}){
    mongoose.connect('mongodb://localhost:27017/graphql', {
      useNewUrlParser: true,
      useUnifiedTopology: true  
    })
    // console.log('MongoDb is connected!')
    // sequelize.authenticate().then(()=>{
    //   console.log('Database is connected with successfuly!')
    //   }).catch((err)=>{
    //       console.log('Database is not connected! Error: ', err)
    // })

    //clientModel.sync({force: true})
    //User.sync({force: true})

    const pubsub = new PubSub();

    const server = new ApolloServer({typeDefs, resolvers, context: {pubsub}});

    server.listen().then(({url})=>console.log(`Server started at ${url}`));
}

export default startServer;