const { User, Section, Assessment } = require('../models');
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        me: async (parent, args, context) => {
            if (context.user) {
                const userData = await User.findOne({ _id: context.user._id })
                .select('-__v -password')
                .populate('section')
                .populate('assessment');
                
                return userData;
            }
            throw new AuthenticationError('Not logged in');
        },
        section: async (parent, { username }) => {
            const params = username ? { username }: {};
            return Section.find(params)
        },
        section: async (parent, { _id }) => {
            return Section.findOne({_id});
        },
        //get all users
        users: async () => {
                return User.find()
                .select('-__v -password')
                .populate('assessment')
                .populate('section');
        },
        //get a user by user_id
        user: async (parent, { user_id }) => {
                return User.findOne({ user_id })
                .select('-__v -password')
                .populate('assessment')
                .populate('section');
        }
    },
    Mutation: {
        addUser: async (parent, args) => {
            const user = await User.create(args);
            const token = signToken(user);

            return { token, user };
        },
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });
            if (!user) {
                throw new AuthenticationError('Incorrect Credentials');
            }

            const correctPw = await user.isCorrectPassword(password);
            if(!correctPw) {
                throw new AuthenticationError('Incorrect Credentials');
            }
            const token = signToken(user);
            return { token, user};
        },
        addSection: async (parent, args, context) => {
            if (context.user) {
              const section = await Section.create({ ...args, user_id: context.user.user_id });
          
              await User.findByIdAndUpdate(
                { _id: context.user._id },
                { $push: { section: section._id } },
                { new: true }
              );
          
              return section;
            }
          
            throw new AuthenticationError('You need to be logged in!');
          }
    }
};

module.exports = resolvers;