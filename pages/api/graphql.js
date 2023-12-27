// @flow
import { makeExecutableSchema } from '@graphql-tools/schema';
import { graphqlHTTP } from 'express-graphql';

// $FlowFixMe[cannot-resolve-module]
import  typeDefs  from './schema.graphql';
import * as products from './products/index.js';


// Viewer
const viewer = {
  me: () => ({
    id: 9287364982716489723,
    name: 'James',
    surname: 'Bond',
    companyName: 'Agency 007',
    role: 'SPY',
    createdAt: '2024-12-31T00:00:00Z',
  }),
  products: () => products.get(),
};

// Resolvers
const resolvers = {
  Query: {
    viewer: () => viewer,
  },
  Mutation: {
    addProduct: (_, { input }) => products.add(input),
    updateProduct: (_, { id, edits }) => products.update(id, edits),
  }
};

// schema
const schema = makeExecutableSchema({ typeDefs, resolvers });

// handler
const handler =  (req: NextApiRequest, res: NextApiResponse<any>) => {
  return graphqlHTTP({
    schema,
    graphiql: true,
    customFormatErrorFn: (error) => ({
      message: error.message,
      locations: error.locations,
      stack: error.stack ? error.stack.split('\n') : [],
      path: error.path,
    }),
  })(req, res);
};

export default handler;
