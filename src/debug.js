const getRandomIntInRange = (min, max) => {
  if (min > max) throw new Error('min must be less than max');
  let random = Math.random() * (max - min) + min
  return Math.floor(random);
};
//console.log(getRandomIntInRange(5, 120))
const coolnessGauge = (numOfFridges) => {
  return numOfFridges >= 4 ? 'You are downright chilly!' : 'You need more fridges.';
};

//console.log(coolnessGauge(4))

const funkoPopAddictionLevel = (numOfFunkoPops) => {
  if (numOfFunkoPops === 0) console.log('No pops? Maybe try one.');
  if (numOfFunkoPops > 20 && numOfFunkoPops <= 30) console.log('You need help!');
  if (numOfFunkoPops > 10 && numOfFunkoPops <= 20) console.log('You have a problem.');
  if (numOfFunkoPops >= 1 && numOfFunkoPops <= 10) console.log('Only a few? Keep having fun!')
  if (numOfFunkoPops > 30) console.log('You need an intervention!!!')

};

//console.log(funkoPopAddictionLevel(20))

const getWeatherReport = (temperature) => {
  let weatherReport = ''
  if (typeof temperature !== "number") return null
  if (temperature >= 90) {
    weatherReport = "It's hot and gross out.";
    console.log(weatherReport);
    console.log('And that\'s your report!')
  } else if (temperature >= 70) {
    weatherReport = "At least it's a dry heat.";
    console.log(weatherReport);
    console.log('And that\'s your report!')
  } else if (temperature >= 32) {
    weatherReport = 'It\'s not too bad!'
    console.log(weatherReport);
    console.log('And that\'s your report!')
  } else if (temperature < 32) {
    weatherReport = "Wow, it's cold out.";
    console.log(weatherReport);
    console.log('And that\'s your report!')
  }
  //console.log('And that\'s your report!')

  //console.log("And that's your report!");
  return weatherReport;
};

console.log(getWeatherReport(100))

/** FEEDBACK: It is really cool that you got this nested ternary to work however you should only be using one. Your code could look like this: 
const returnPositiveNegativeZero = (num) => {
  if (num === 0) return 'Zero';
  return (num < 1) ? 'Negative' : 'Positive';
};
 */
const returnPositiveNegativeZero = (num) => {
  return num < 0 ? "Negative"
    : num === 0 ? "Zero"
      : "Positive";
};
//console.log(returnPositiveNegativeZero(0))

module.exports = {
  getRandomIntInRange,
  coolnessGauge,
  funkoPopAddictionLevel,
  getWeatherReport,
  returnPositiveNegativeZero,
};
