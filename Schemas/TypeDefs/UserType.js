const graphql = require("graphql");
const { GraphQLObjectType, GraphQLInt, GraphQLString } = graphql;

const UserType = new GraphQLObjectType({
  name: "User",
  fields: () => ({
    // id: { type: GraphQLInt },
    // firstName: { type: GraphQLString },
    // lastName: { type: GraphQLString },
    // email: { type: GraphQLString },
    // password: { type: GraphQLString },
    name: { type: GraphQLString },
    address: { type: GraphQLString },
    email: { type: GraphQLString },
    phone: { type: GraphQLString },
  }),
});

module.exports = UserType;