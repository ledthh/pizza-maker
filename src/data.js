export default {
  dough: [
    {
      id: 'americano',
      name: 'Американо',
      src: require('@/assets/img/dough/americano.png')
    },
    {
      id: 'italiano',
      name: 'Италиано',
      src: require('@/assets/img/dough/italiano.png')
    },
    {
      id: 'hotdog',
      name: 'Хот-дог',
      src: require('@/assets/img/dough/hotdog.png')
    }
  ],
  sizes: [
    {
      id: 'size-small',
      src: require('@/assets/img/size/small.png'),
      size: 20,
      price: 50
    },
    {
      id: 'size-medium',
      src: require('@/assets/img/size/medium.png'),
      size: 30,
      price: 100
    },
    {
      id: 'size-large',
      src: require('@/assets/img/size/large.png'),
      size: 40,
      price: 150
    }
  ],
  sauces: [
    {
      id: 'garlic',
      name: 'Гарлик',
      src: require('@/assets/img/sauce/garlic.png')
    },
    {
      id: 'salsa',
      name: 'Сальса',
      src: require('@/assets/img/sauce/salsa.png')
    },
    {
      id: 'bbq',
      name: 'Барбекю',
      src: require('@/assets/img/sauce/bbq.png')
    },
    {
      id: 'ranch',
      name: 'Ранч',
      src: require('@/assets/img/sauce/ranch.png')
    },
  ],
  ingredients: {
    meat: [
      {
        id: 'bacon',
        name: 'Бекон',
        price: 40,
        src: require('@/assets/img/ingredients/meat/bacon.png'),
        count: 0
      },
      {
        id: 'beef',
        name: 'Говядина (фарш)',
        price: 40,
        src: require('@/assets/img/ingredients/meat/beef.png'),
        count: 0
      },
      {
        id: 'chicken',
        name: 'Курица гриль',
        price: 40,
        src: require('@/assets/img/ingredients/meat/chicken.png'),
        count: 0
      },
      {
        id: 'ham',
        name: 'Ветчина',
        price: 40,
        src: require('@/assets/img/ingredients/meat/ham.jpg'),
        count: 0
      },
      {
        id: 'pork',
        name: 'Свинина (фарш)',
        price: 40,
        src: require('@/assets/img/ingredients/meat/pork.jpg'),
        count: 0
      },
      {
        id: 'salami',
        name: 'Салями',
        price: 40,
        src: require('@/assets/img/ingredients/meat/salami.png'),
        count: 0
      },
    ],
    veg: [
      {
        id: 'black_olives',
        name: 'Маслины',
        price: 30,
        src: require('@/assets/img/ingredients/муп/black_olives.jpg'),
        count: 0
      },
      {
        id: 'champignon',
        name: 'Шампиньоны',
        price: 30,
        src: require('@/assets/img/ingredients/муп/champignon.jpg'),
        count: 0
      },
      {
        id: 'corn',
        name: 'Кукуруза',
        price: 30,
        src: require('@/assets/img/ingredients/муп/corn.jpg'),
        count: 0
      },
      {
        id: 'cucumber',
        name: 'Огурец маринованый',
        price: 30,
        src: require('@/assets/img/ingredients/муп/cucumber.jpg'),
        count: 0
      },
      {
        id: 'olives',
        name: 'Оливки',
        price: 30,
        src: require('@/assets/img/ingredients/муп/olives.jpg'),
        count: 0
      },
      {
        id: 'onion',
        name: 'Лук',
        price: 30,
        src: require('@/assets/img/ingredients/муп/onion.jpg'),
        count: 0
      },
      {
        id: 'parsley',
        name: 'Петрушка',
        price: 30,
        src: require('@/assets/img/ingredients/муп/parsley.jpg'),
        count: 0
      },
      {
        id: 'pepper',
        name: 'Перец болгарский',
        price: 30,
        src: require('@/assets/img/ingredients/муп/pepper.jpg'),
        count: 0
      },
      {
        id: 'semsame',
        name: 'Кунжут',
        price: 30,
        src: require('@/assets/img/ingredients/муп/semsame.jpg'),
        count: 0
      },
      {
        id: 'tomatoe',
        name: 'Помидор',
        price: 30,
        src: require('@/assets/img/ingredients/муп/tomatoe.jpg'),
        count: 0
      },
    ],
    cheese: [
      {
        id: 'cheddar',
        name: 'Чеддер',
        price: 35,
        src: require('@/assets/img/ingredients/cheese/cheddar.jpg'),
        count: 0
      },
      {
        id: 'dor_blue',
        name: 'Дор блю',
        price: 35,
        src: require('@/assets/img/ingredients/cheese/dor_blue.jpg'),
        count: 0
      },
      {
        id: 'feta',
        name: 'Фета',
        price: 35,
        src: require('@/assets/img/ingredients/cheese/feta.jpg'),
        count: 0
      },
      {
        id: 'parmesan',
        name: 'Пармезан',
        price: 35,
        src: require('@/assets/img/ingredients/cheese/parmesan.jpg'),
        count: 0
      },
      {
        id: 'philadelphia',
        name: 'Филадельфия',
        price: 35,
        src: require('@/assets/img/ingredients/cheese/philadelphia.jpg'),
        count: 0
      },
    ],
  },
}