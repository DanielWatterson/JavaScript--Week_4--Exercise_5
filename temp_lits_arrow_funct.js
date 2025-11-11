console.log("==== Welcome to the Error Handling exercise! ====")
console.log("---------------------------------------------------------------- \n");

console.log("==== This is a multiline string using template literals ====\n");
// TODO: Create a multiline string using template literals
const multilineString = `
    Begone foul demon!
    You shall not pass! `
;

console.log(multilineString)

console.log("---------------------------------------------------------------- \n");

console.log("==== This is a function that uses template literals for HTML generation ====\n");

// TODO: Create a function that uses template literals for HTML generation
function generateSuperHero(hero){
    const {heroName, heroAge, heroRole, heroRank} = hero;

    return `
    <div class="hero-profile">
    <h2>${heroName}</h2>
    <p>Age: ${heroAge}</p>
    <p>Role: ${heroRole}</p>
    <p>Rank: ${heroRank}</p>
    </div>
    `
}

const heroData = {
    heroName: "Mega Man",
    heroAge: 100,
    heroRole: "Super Hero",
    heroRank: 1
};

const userHTML = generateSuperHero(heroData);
console.log(userHTML);

console.log("---------------------------------------------------------------- \n");

console.log("==== This converts regular functions to arrow functions. ====\n");

// TODO: Convert regular functions to arrow functions

function smack() {
    return "Smack!, Smack!, Smack!";
}   
 
const smackArrow = () => "Smack!";

console.log (smackArrow());
console.log (smack());

console.log("---------------------------------------------------------------- \n");

console.log("==== This converts regular functions to arrow functions. ====\n");
// TODO: Use arrow functions with array methods
