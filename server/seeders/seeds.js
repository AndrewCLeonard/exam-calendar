const faker = require('faker');

const db = require('../config/connection');
const { Section, Assessment, User } = require('../models');

db.once('open', async () => {
  await Section.deleteMany({});
  await Assessment.deleteMany({});

  // create user data
  const userData = [];

  for (let i = 0; i < 50; i += 1) {
    const user_id = faker.datatype.number({ max: 1000 });
    const email = faker.internet.email();
    const password = faker.internet.password();

    userData.push({ user_id, email, password });
  }

  const createdUsers = await User.collection.insertMany(userData);


  // create thoughts
  let createdSections = [];
  for (let i = 0; i < 100; i += 1) {
    const sectionText = faker.datatype.number({ min: 10, max: 100, precision: 0 });

    const createdSection = await Section.create({ sectionText });

    createdSection.push(createdSection);
  }

  // create reactions
  for (let i = 0; i < 100; i += 1) {
    const reactionBody = faker.lorem.words(Math.round(Math.random() * 20) + 1);

    const randomUserIndex = Math.floor(Math.random() * createdUsers.ops.length);
    const { username } = createdUsers.ops[randomUserIndex];

    const randomThoughtIndex = Math.floor(Math.random() * createdThoughts.length);
    const { _id: thoughtId } = createdThoughts[randomThoughtIndex];

    await Thought.updateOne(
      { _id: thoughtId },
      { $push: { reactions: { reactionBody, username } } },
      { runValidators: true }
    );
  }

  console.log('all done!');
  process.exit(0);
});
