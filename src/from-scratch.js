const measureRain = (inc) => {
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

const happyBirthdayPet = (breed, age) => {
  switch (true) {
    case (breed === 'snake'):
      console.log('Hiss hiss!');
      break;
    case (breed === 'cat' && age < 5):
      console.log('Mew mew!');
      break;
    case (breed === 'dog' && age < 5):
      console.log('Arf arf!');
      break;
    case (breed === 'cat' && age <= 10 && age >= 5):
      console.log('Meow meow!');
      break;
    case (breed === 'dog' && age <= 9 && age >= 5):
      console.log('Woof woof!');
      break;
    case (breed === 'dog' && age <= 11):
      console.log('Boof!')
      break;
    default:
      console.log('Happy birthday!');
  };
}

const funTypes = (type) => {
  switch (true) {
    case typeof type === 'string':
      console.log(`That's just some text."`);
      break;
    case typeof type === 'number':
      console.log(`That's a good number.`)
      break;
    case typeof type === 'boolean':
      console.log('To bool, or not to bool?')
      break;
    case typeof type === 'undefined':
      console.log("Nothing, but I didn't set that.")
      break;
    case typeof null === 'object':
      console.log("Nothing, but I didn't set that.")
      break;
    case typeof type === 'object' && !Array.isArray(type) && type !== null:
      console.log('Anybody got the key?')
      break;

  }
};
//console.log(funTypes({}))

const rounder = (float, round) => {
  if (round === 'up') {
    return Math.ceil(float);
  } else if (round === 'down') {
    return Math.floor(float);
  } else if (round === 'honest') {
    return Math.round(float)
  };
}

const fizzBuzzish = (num) => {
  if (num % 5 === 0 && num % 3 === 0) {
    console.log('fizzBuzz!')
  } else if (num % 5 === 0) {
    console.log('buzz')
  } else if (num % 3 === 0) {
    console.log(`fizz`)
  } else {
    console.log(num);
  } ''
};

module.exports = {
  measureRain,
  happyBirthdayPet,
  funTypes,
  rounder,
  fizzBuzzish,
};
