const User = require('./User')
const Food = require('./Food');
const Indoor = require('./indoor');
const Outdoor = require('./outdoor');
const Home = require('./home');

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
