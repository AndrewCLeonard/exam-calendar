//import the gql tagged template function
const { gql } = require('apollo-server-express');

//create our time defs
const typeDefs = gql`
    type Section {
        _id: ID,
        section_id: String
        section_name: String
        section_description: String
    }

    type Assessment {
        _id: ID
        assessment_id: String
        assessment_name: String
        user_id: String
        section_id: String
        assessment_start_date: String
        assessment_end_date: String
    }
    

    type User {
        _id: ID
        user_id: String
        first_name: String
        last_name: String
        email: String
        role: String
    }

    type Query {
        me: User
        users: [User]
        user(user_id: String!): User
        assessments(user_id: String): [Assessment]
        assessment(_id: ID!): Assessment
        sections(user_id: String): [Section]
        section(_id: ID!): Section
    }

    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(user_id: String!, email: String!, password: String!): Auth
        addSection(section_name: String!): Section
        addAssessment(section_id: ID!, assessment_id: String!): Section
    }

    type Auth {
        token: ID!
        user: User
    }
`;

//export the typeDefs
module.exports = typeDefs;