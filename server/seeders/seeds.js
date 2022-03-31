const faker = require('faker');

const db = require('../config/connection');
const { Section, Assessment, User } = require('../models');

db.once('open', async () => {
  await Section.deleteMany({});
  await Assessment.deleteMany({});

  // create user data
  const userData = [];

  for (let i = 0; i < 50; i += 1) {
    let user_id = faker.datatype.number({ max: 1000 });
    const email = faker.internet.email();
    const password = faker.internet.password();

    userData.push({ user_id, email, password });
  }

  // create sections
  const sectionData = [];

  for (let i = 0; i < 100; i += 1) {
    let section_id = faker.datatype.number({ min: 10, max: 100, precision: 0 });
    const section_name = faker.name.jobType();
    const section_description = faker.lorem.sentence(5);

    sectionData.push({ section_id, section_name, section_description });

  }

  // create assessment
  const assessmentData = [];

  for (let i = 0; i < 100; i += 1) {
    const assessment_id = faker.datatype.number({ max: 1000 });
    const assessment_name = faker.commerce.product();
    const assessment_start_date = faker.date.recent();
    const assessment_end_date = faker.date.soon();

    assessmentData.push({ assessment_id, assessment_name, user_id, section_id, assessment_start_date, assessment_end_date });
  }
  
  return { userData, sectionData, assessmentData };

});
