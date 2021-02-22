import {ApolloServer, PubSub} from 'apollo-server';
import mongoose from 'mongoose';
import sequelize from './database' 
import Client from './models/Client';
import User from './models/User';
import Post from './models/Post';

function startServer({typeDefs, resolvers}){
    // mongoose.connect('mongodb://localhost:27017/graphql', {
    //   useNewUrlParser: true,
    //   useUnifiedTopology: true  
    // })
    // console.log('MongoDb is connected!')
    // sequelize.authenticate().then(()=>{
    //   console.log('Database is connected with successfuly!')
    //   }).catch((err)=>{
    //       console.log('Database is not connected! Error: ', err)
    // })

    // Client.sync({force: true})
    // User.sync({force: true})
    // Post.sync({force: true})

    const pubsub = new PubSub();

    const server = new ApolloServer({typeDefs, resolvers, context: {pubsub}});
    server.listen({port: process.env.PORT || 4000}).then(({url})=>console.log(`Server started at ${url}`));
}

export default startServer;