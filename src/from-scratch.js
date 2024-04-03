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

const funTypes = () => {
};

const rounder = () => {
};

const fizzBuzzish = () => {
};

module.exports = {
  measureRain,
  happyBirthdayPet,
  funTypes,
  rounder,
  fizzBuzzish,
};
