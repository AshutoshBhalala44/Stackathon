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
    imageURL: "data:image/png;base64,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",
    role: "Software Developer",
    description: "Constructed database models for several components of the application such as the user, product, cart, and order models," + 
    " which resulted in fully connecting database structures that helped organize the backend of the program" +
    " Using CSS, I was able to style the program’s page to a very user-friendly display, which resulted in a unique and visually appealing webpage.",
    link: "https://github.com/AmericoneGrizzly/graceshopper-project",
  },
  {
    name: "Junior Phase Final Project",
    imageURL: "https://res.cloudinary.com/practicaldev/image/fetch/s--4nVcu5jx--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://cdn.dribbble.com/users/722835/screenshots/4082720/bot_icon.gif",
    role: "Sole Software Developer",
    description: "Wired up all the routes and components in order to make this web page fully functional to the point where multiple robots and multiple" + 
    " projects could coincide and be assigned to one another, as well as all other notable features for the web page.",
    link: "https://github.com/AshutoshBhalala44/2106-FSA-RM-WEB-FT-JPFP",
  },
  {
    name: "Stackathon",
    imageURL: "https://www.shareicon.net/data/256x256/2015/10/25/661733_paper_512x512.png",
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
