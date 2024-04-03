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

const rounderSwitch = () => {
};

module.exports = {
  measureRainSwitch,
  rounderSwitch,
};
