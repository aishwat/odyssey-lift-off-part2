import {ApolloServer} from "@apollo/server";
import {startStandaloneServer} from "@apollo/server/standalone";

const typeDefs = require('/schema');
const resolvers = require('./resolvers');
const TrackAPI = require('./datasources/track-api');

async function startApolloServer() {
    const server = new ApolloServer({
        typeDefs,
        resolvers,
    });
    const {url} = await startStandaloneServer(server, {
        context: async () => {
            return
        }
    });
    console.log(`
    🚀  Server is running!
    📭  Query at ${url}
  `);
}

startApolloServer();
