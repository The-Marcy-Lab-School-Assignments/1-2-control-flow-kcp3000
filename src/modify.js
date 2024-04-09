/** FEEDBACK: The functionality should not have changed meaning that the return should have stayed the same. However you are using a guard clause so good job! Remember that a guard clause is a condition when met will exit a function!
 * This is what your code could have looked like instead: 
 * 
const wildlyBiasedReview = (location) => {
  if (location !== 'NYC') return console.log('Yea that place is cool I guess');
  console.log('THE GREATEST CITY IN THE WORLD');
  console.log('THE CITY THAT NEVER SLEEPS');
  console.log('WOW WHAT A CITY');
};
 */
const wildlyBiasedReview = (location) => {
  // let prompts = ['THE CITY THAT NEVER SLEEPS', 'WOW WHAT A CITY', 'THE GREATEST CITY IN THE WORLD']
  // let random = prompts[Math.floor(Math.random() * prompts.length)];
  // Look at my suffering
  if (typeof location !== 'string') return null
  //return random
  if (location === 'NYC') {
    console.log('THE GREATEST CITY IN THE WORLD')
    console.log('THE CITY THAT NEVER SLEEPS')
    console.log('WOW WHAT A CITY')
  } else {
    console.log('Yea that place is cool I guess')
  };

};

console.log(wildlyBiasedReview('NYC'))
module.exports = {
  wildlyBiasedReview,
};
