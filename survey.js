const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('What\'s your name? Nicknames are also acceptable :)', (answer1) => {
    const name = answer1;

    rl.question('What\'s an activity you like doing?', (answer2) => {
        const hobby = answer2;

        rl.question('What do you listen to while doing that?', (answer3) => {
            const music = answer3;

            rl.question('Which meal is your favourite (eg: dinner, brunch, etc.)', (answer4) => {
                const meal = answer4;

                rl.question('What\'s your favourite thing to eat for that meal?', (answer5) => {
                    const food = answer5;

                    rl.question('Which sport is your absolute favourite?', (answer6) => {
                        const sport = answer6;

                        rl.question('What is your superpower? In a few words, tell us what you are amazing at!', (answer7) => {
                            const superpower = answer7;

                            console.log(`Hi my name is ${name} and I like to ${hobby}. I often listen to ${music} when I ${hobby}. My favorite meal is ${meal} and I like to eat ${food}. I also like to play ${sport}. My suprtpower is ${superpower}!`);
                            rl.close();
                        })
                    })
                })
            })
        })
    })
});










