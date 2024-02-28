/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Themes',
      [
        {
          theme_name: 'Еда',
        },
        {
          theme_name: 'Транспорт',
        },
        {
          theme_name: 'Знакомство',
        },
      ],
      {},
    );
    await queryInterface.bulkInsert(
      'Cards',
      [
        {
          word_eng: 'banana',
          word_rus: 'банан',
          theme_id: 1,
        },
        {
          word_eng: 'pie',
          word_rus: 'пирог',
          theme_id: 1,
        },
        {
          word_eng: 'cake',
          word_rus: 'торт',
          theme_id: 1,
        },
        {
          word_eng: 'tea',
          word_rus: 'чай',
          theme_id: 1,
        },
        {
          word_eng: 'candy',
          word_rus: 'конфета',
          theme_id: 1,
        },
        {
          word_eng: 'bread',
          word_rus: 'хлеб',
          theme_id: 1,
        },
        {
          word_eng: 'bike',
          word_rus: 'велосипед',
          theme_id: 2,
        },
        {
          word_eng: 'car',
          word_rus: 'автомобиль',
          theme_id: 2,
        },
        {
          word_eng: 'airplane',
          word_rus: 'самолет',
          theme_id: 2,
        },
        {
          word_eng: 'ship',
          word_rus: 'корабль',
          theme_id: 2,
        },
        {
          word_eng: 'scooter',
          word_rus: 'самокат',
          theme_id: 2,
        },
        {
          word_eng: 'motorbike',
          word_rus: 'мотоцикл',
          theme_id: 2,
        },
        {
          word_eng: 'Hello',
          word_rus: 'Привет',
          theme_id: 3,
        },
        {
          word_eng: 'How are you',
          word_rus: 'Как дела',
          theme_id: 3,
        },
        {
          word_eng: 'What is your name',
          word_rus: 'Как тебя зовут',
          theme_id: 3,
        },
        {
          word_eng: 'My name is ...',
          word_rus: 'Меня зовут ...',
          theme_id: 3,
        },
        {
          word_eng: 'Nice to meet you',
          word_rus: 'Приятно познакомиться',
          theme_id: 3,
        },
        {
          word_eng: 'Goodbye',
          word_rus: 'До свидания',
          theme_id: 3,
        },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Themes', null, {});
    await queryInterface.bulkDelete('Cards', null, {});
  },
};
