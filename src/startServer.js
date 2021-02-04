import {ApolloServer, PubSub} from 'apollo-server';
import mongoose, { mongo } from 'mongoose';

function startServer({typeDefs, resolvers}){
    mongoose.connect('mongodb://localhost:27017/graphql', {
      useNewUrlParser: true,
      useUnifiedTopology: true  
    })
    console.log('Database is connected!')

    const pubsub = new PubSub();

    const server = new ApolloServer({typeDefs, resolvers, context: {pubsub}});

    server.listen().then(({url})=>console.log(`Server started at ${url}`));
}

export default startServer;