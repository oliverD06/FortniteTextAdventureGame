// Text Adventure Game

const start = `Welcome to the Fortnite Text Adventure Game. Click 'OK' to start the game.`;

const enter = "Please enter 1 or 2 for your answer";

const gameOver = "ELIMINATED!";

const q1 = `You are on the battle bus. Do you...
1. Hot drop
or....
2. Land at Lonely Lodge
${enter}`;

const gameOver1 = `You land at the watchtower in Lonely Lodge, but someone knocks it down!${gameOver}`;

const q2 = `You land at the clock tower, but only one chest spawned and you're contested! Do you...
1. Spam the interact button and hope to God you pick up the weapon first
or.....
2. Start bludgeoning him with your pickaxe
${enter}`;

const gameOver2 = `You are hitting the button as fast as you can, but the other player is a loser who is using a macro. They pick up the weapon and 200 pump you.${gameOver}`;

const q3 = `Just as he picks up the weapon you deliver the final blow. The weapon he picked up was a Legendary Pump Shotgun. Lucky You! As you load the shells, the first zone appears on your map. It is on Wailing Woods. Do you...
1. Continue to fight the other players in Tilted Towers to hopefully secure some high tier loot
or....
2. Rotate to loot lake and head to the safe zone
${enter}`;

const gameOver3 = `As you go to exit Tilted Towers, a sniper on Trump Tower makes quick work of you. ${gameOver}`;

const q4 = `You hear sniper shots being fired from Trump Tower and hear the familiar sound of a chug jug being used, and loot falling to the ground. Do you...
1. Sneak to the top of the tower and eliminate the sniper from behind
or...
2. Go to the sound of the chug jug
${enter}`;

const gameOver4 = `The player using the chug jug heard you approach, and ambushed you with a P90. ${gameOver}`;

const q5 = `You sneak to the top of the tower only to discover another player looting the sniper's items! You absolutely demolish him and you are left at 68 HP. He dropped some Mini Shields, a common Assault Rifle, and a rare Bolt-Action Sniper Rifle. But the storm is right behind you! Do you...
1. Use the mini shields
or...
2. Start moving to zone
${enter}`;

const gameOver5 = `The storm unfortunately overtook you. ${gameOver}`;

const gameOver6 = `You head over to the supply drop, but right as you open it, a player in the bush starts spraying you with a minigun. ${gameOver}`

const win = `You approach Ninja. Hearing your footsteps he immediately starts cranking 90s. You respond with the same. After a long and arduous 1v1, Ninja runs out of materials, so you pull out the common Assault Rifle, destroy his wall, and 200 pump him. YOU HAVE ACHIEVED THE #1 VICTORY ROYALE!!!!!!`;

const q6 = `You make the perilous journey and escape the zone with just three HP remaining. You spot a supply drop landing close to a bush nearby. Do you...
1. Head over to the supply drop and hope for a med kit or a chug jug
or....
2.Use the mini shields you found from the player you eliminated at the top of Trump Tower
${enter}`

const q7 = `You open the supply drop and you start being sprayed! Luckily, that players aim was not very good and you were able to tank a couple hits before hitting a no-scope with your Sniper Rifle. You also looted a chug jug from the supply drop so you now have max health. You look at the amount of remaining players and it quickly drops from 3 to 2 as you hear a shotgun shot to your right. You then look at the kill feed and read, to your absolute horror: "Ninja shotgunned Anonymous(263)". Do you...
1. Push the location where you heard the fatal shot
or...
2. Climb a nearby tree and hide
${enter}`

const gameOver7 = `His wood supply exhausted, Ninja destroys your tree for more materials, and you fall to your doom. ${gameOver}`


//
alert(start)

let userInput = prompt(q1)

if (userInput == 1) {
    userInput = prompt(q2)
    if (userInput == 2) {
        userInput = prompt(q3)
        if (userInput == 1) {
            userInput = prompt(q4)
            if (userInput == 1) {
                userInput = prompt(q5)
                if (userInput == 2) {
                userInput = prompt(q6)
                if (userInput == 2) {
                    prompt(q7)
                    if (userInput == 2) {
                        alert(win)
                    } else {
                        alert(gameOver7)
                    }
                }else {
                    alert(gameOver6)
                }
            }
                
                else{
                    alert(gameOver5)
                }
            }
            else {
                alert(gameOver4)
            }
        }
        else{
            alert(gameOver3)
        }
    }
    else {
        alert(gameOver2)
    }
}
else {
    alert(gameOver1)
}