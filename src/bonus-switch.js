/** FEEDBACK: Great job with this bonus! */
const measureRainSwitch = (inc) => {
  switch (true) {
    case inc === 0:
      console.log('drought');
      break;
    case inc < 2:
      console.log(`dry`);
      break;
    case inc < 4:
      console.log(`average`);
      break;
    case inc < 6:
      console.log(`rainy`);
      break;
    case inc >= 6:
      console.log(`flood`);
      break;
    default:
      console.log(`what?`);
  };
};

const rounderSwitch = (float, round) => {
  // if (round === 'up') {
  //   return Math.ceil(float);
  // } else if (round === 'down') {
  //   return Math.floor(float);
  // } else if (round === 'honest') {
  //   return Math.round(float)
  // };
  switch (true) {
    case round === 'up':
      return Math.ceil(float);
      break;
    case round === 'down':
      return Math.floor(float);
      break;
    case round === 'honest':
      return Math.round(float)
      break;
  };
};

module.exports = {
  measureRainSwitch,
  rounderSwitch,
};
