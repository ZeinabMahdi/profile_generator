const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let userProfile = "";

rl.question("What's your name? Nicknames are also acceptable :) ", (answer) => {
  userProfile += `I'm ${answer} and `;
  console.log(`Thank you for your valuable feedback: ${answer}`);
  rl.question("What's an activity you like doing? ", (answer) => {
    userProfile += `I love to ${answer}`;
    console.log(`nice! I enjoy ${answer} too.`);
    rl.question("What do you listen to while doing that? ", (answer) => {
      userProfile += `while listening to ${answer}. \n`;
      console.log(`nice! I love ${answer} music.`);
      rl.question("Which meal is your favourite (eg: dinner, brunch, etc.) ", (answer) => {
        userProfile += `My favorite meal is undoubtedly ${answer} `;
        console.log(`nice! ${answer} is also my fav meal of the day.`);
        rl.question("What's your favourite thing to eat for that meal? ", (answer) => {
          userProfile += `which always includes ${answer}. \n`;
          console.log(`nice! ${answer} tastes delicious. `)
          rl.question("Which sport is your absolute favourite? ", (answer) => {
            userProfile += `I love playing ${answer} `;
            console.log(`nice! ${answer} is lots of fun.`);
            rl.question("What is your superpower? In a few words, tell us what you are amazing at! ", (answer) => {
              userProfile += `and I would say I'm quite good at ${answer} `;
              console.log(`nice! I enjoy ${answer} too.`);
              rl.close();
              console.log(userProfile);
            });
          });
        });
      });
    });
  });
});
