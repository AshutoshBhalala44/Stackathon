'use strict'

const {db, models: {User, Project} } = require('../server/db')

const Users = [
  {
    username: "bhalala@wisc.edu",
    password: "Ashutosh44",
  },
  {
    username: "helen@aol.com",
    password: "helen123",
  },
  {
    username: "billy@aol.com",
    password: "billy123",
  },
  {
    username: "sam@aol.com",
    password: "sam123",
  },
  {
    username: "roger@aol.com",
    password: "roger123",
  },
  {
    username: "angie@aol.com",
    password: "ANGIE123",
  },
  {
    username: "Gary@aol.com",
    password: "Gary123",
  },
  {
    username: "William@aol.com",
    password: "William123",
  },
  {
    username: "Stacey@aol.com",
    password: "Stacey123",
  },
  {
    username: "Travis@aol.com",
    password: "Travis123",
  },
];

const Projects = [
  {
    name: "Grace Shopper",
    imageURL: "https://toppng.com//public/uploads/preview/shopping-cart-icon-transparent-background-shopping-cart-icon-11553461269twqdfb9nnw.png",
    role: "Software Developer",
    description: "Constructed database models for several components of the application such as the user, product, cart, and order models," + 
    " which resulted in fully connecting database structures that helped organize the backend of the program" +
    " Using CSS, I was able to style the program’s page to a very user-friendly display, which resulted in a unique and visually appealing webpage.",
    link: "https://github.com/AmericoneGrizzly/graceshopper-project",
  },
  {
    name: "Junior Phase Final Project",
    imageURL: "https://www.pngfind.com/pngs/m/55-551472_robot-cartoon-hd-png-download.png",
    role: "Sole Software Developer",
    description: "Wired up all the routes and components in order to make this web page fully functional to the point where multiple robots and multiple" + 
    " projects could coincide and be assigned to one another, as well as all other notable features for the web page.",
    link: "https://github.com/AshutoshBhalala44/2106-FSA-RM-WEB-FT-JPFP",
  },
  {
    name: "Stackathon",
    imageURL: "https://spng.pngfind.com/pngs/s/45-453454_png-50-px-inquiry-form-icon-png-transparent.png",
    role: "Sole Software Developer",
    description: "Created a web page where a list of personal projects can be displayed with links corresponding to the associated GitHub repos.",
    link: "https://github.com/AshutoshBhalala44/Stackathon",
  },
  
]

/**
 * seed - this function clears the database, updates tables to
 *      match the models, and populates the database.
 */
async function seed() {
  try{
    await db.sync({ force: true }); // clears db and matches models to tables
    console.log('db synced!');

    // Creating Users
    await Promise.all(
      Users.map((user) => {
        return User.create(user);
      })
    );

    await Promise.all(
      Projects.map((project) => {
        return Project.create(project);
      })
    );

    console.log(`seeded ${Users.length} users`);
    console.log(`seeded successfully`);
    console.log(`seeded ${Projects.length} projects`);
    console.log(`seeded successfully`);
  } catch (e) {
    console.log(e);
  }
}

/*
 We've separated the `seed` function from the `runSeed` function.
 This way we can isolate the error handling and exit trapping.
 The `seed` function is concerned only with modifying the database.
*/
async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

/*
  Execute the `seed` function, IF we ran this module directly (`node seed`).
  `Async` functions always return a promise, so we can use `catch` to handle
  any errors that might occur inside of `seed`.
*/
if (module === require.main) {
  runSeed()
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed
