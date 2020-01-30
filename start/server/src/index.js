const { ApolloServer } = require('apollo-server');
const typeDefs = require('./schema');

const server = new ApolloServer({ typeDefs });

server.listen().then(({ url }) => {
    console.log(` Ground Controll to Major Tom, we have liftoff at ${url}`)
})