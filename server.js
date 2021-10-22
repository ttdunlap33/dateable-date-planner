const express = require('express');
const path = require('path')
const session = require('express-session');
const routes = require('./controllers');
const handlebars = require('express-handlebars');
const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
var compression = require('compression')
const app = express();
const PORT = process.env.PORT || 3001;

const sess = {
  secret: 'Super secret secret',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

//test//
app.use(compression())
app.use(session(sess));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.engine("handlebars", handlebars());
app.set("view engine", "handlebars");

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('\n----- DATABASE SYNCED -----\n');
  
    await seedHome();
    console.log('\n----- HOME SEEDED -----\n');
  
    await seedIndoor();
    console.log('\n----- INDOOR SEEDED -----\n');
  
    await seedFood();
    console.log('\n----- FOOD SEEDED -----\n');
  
    await seedOutdoor();
    console.log('\n----- OUTDOOR SEEDED -----\n');
  
    process.exit(0);
  };
  
  seedAll();
  app.listen(PORT, () => console.log('Now listening'));
}).catch((err) => {console.error(err)})
