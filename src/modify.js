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
