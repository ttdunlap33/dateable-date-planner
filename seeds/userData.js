const { User } = require('../models');

const userData = [
  {
    name: "martin_bour",
    email: "martin_b@gmail.com",
    password: "p@ssword1"
  },
  {
    name: "matt_b",
    email: "mathew_b@gmail.com",
    password: "p@ssword2"
  },
  {
    name: "shaun_c",
    email: "shaun_c@gmail.com",
    password: "p@ssword3"
  },
  {
    name: "lee_n",
    email: "lee_n@gmail.com",
    password: "p@ssword4"
  },
  {
    name: "priya_r",
    email: "priya_r@gmail.com",
    password: "p@ssword5"
  },
  {
    name: "pooja",
    email: "pooja@gmail.com",
    password: "p@ssword6"
  }
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;