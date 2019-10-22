// Completed by pair programming between Sam Rush and Chris Mastel
// The program asks for user through questions and 
// returns a cool bio based on the answers

//stores the library readline
const readline = require('readline');

//stores createInterface as a variable
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

//asks questions and stores the answers
rl.question('What is your name? Nicknames are also acceptable. ', (answer1) => {
  rl.question("What's an activity you like doing? ", (answer2) => {
    rl.question("What do you listen to while doing that? ", (answer3) => {
      rl.question("Which meal is your favorite? eg. Dinner, brunch, etc... ", (answer4) => {
        rl.question("What's your favorite thing to eat for that meal? ", (answer5) => {
          rl.question("what sport is your absolute favorite? ", (answer6) => {
            rl.question("What is your superpower? In a few words tell us what you are amazing at. ", (answer7) => {
              // outputs the answers as a bio
              console.log(`${answer1} loves listening to ${answer3} while ${answer2}, devouring ${answer5} for ${answer4}, prefers ${answer6} over any other sport, and is amamzing at ${answer7}.`);
              //closes the rl variable
              rl.close();
            })
          })
        })
      })
    })
  }) 
});
