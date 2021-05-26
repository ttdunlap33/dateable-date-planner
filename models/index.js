const User = require('./users');
const Food = require('./food');
const Indoor = require('./Indoor');
const Outdoor = require('./Outdoor');
const Home = require('./Home');

// User.hasMany(Food, Indoor, Outdoor, Home, {
//   foreignKey: 'user_id',
//   onDelete: 'CASCADE'
// });
User.hasMany(Food, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
  });

User.hasMany(Indoor, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
  });

  User.hasMany(Outdoor, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
  });

  User.hasMany(Home, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
  });


Food.belongsTo(User, {
  foreignKey: 'user_id'
});
Indoor.belongsTo(User, {
  foreignKey: 'user_id'
});
Outdoor.belongsTo(User, {
  foreignKey: 'user_id'
});
Home.belongsTo(User, {
  foreignKey: 'user_id'
});

module.exports = { User, Indoor, Outdoor, Home, Food };
