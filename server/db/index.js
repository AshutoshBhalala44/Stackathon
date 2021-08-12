//this is the access point for all things database related!

const db = require('./db')

const User = require('./models/User')
const Project = require('./models/Project')

//associations could go here!
User.hasMany(Project);
Project.belongsTo(User);

module.exports = {
  db,
  models: {
    User,
    Project
  },
}
