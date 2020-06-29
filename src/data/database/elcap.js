const data = [
  {
    id: 10,
    name: 'Panasonic FC 100uF x 16V',
    partNumber: 'EEUFC1C101',
    body: '',
    manufacture: {
      id: 12,
      name: 'Panasonic'
    },
    category: {
      id: 123,
      name: 'Электролиты',
    },
    techData: [
      { name: 'Серия', value: 'FC', units: '', factor: 0 },
      { name: 'Емкость', value: 100, units: 'uF', factor: 1e-6 },
      { name: 'Напряжение', value: 16, units: 'V', factor: 0 },
      { name: 'Диаметр', value: 6.3, units: 'мм', factor: 0 },
      { name: 'Высота', value: 12, units: 'мм', factor: 0 },
      { name: 'Шаг', value: 2.5, units: 'мм', factor: 0 },
    ],
    // storaqe: [
    //   { id: 1, name: 'C-23', qnt: 230 },
    //   { id: 23, name: 'B-29', qnt: 12 },
    // ],
    stockQnt: 242,
    sellPrice: [
      { qnt: 10, unitPrice: 10 },
      { qnt: 25, unitPrice: 8 },
      { qnt: 50, unitPrice: 5 },
    ],
    // buyPrice: 40,
    // priceStory: [
    //   { date: '12-03-2007', qnt: 100, unitPrice: 1 },
    //   { date: '12-03-2007', qnt: 100, unitPrice: 10 },
    // ],
    minOrder: 10, //минимальное количество
  },
  {
    id: 20,
    name: 'Panasonic FC 220uF x 50V',
    partNumber: 'EEUFC1H221',
    body: '',
    manufacture: {
      id: 12,
      name: 'Panasonic'
    },
    category: {
      id: 123,
      name: 'Электролиты',
    },
    techData: [
      { name: 'Серия', value: 'FC', units: '', factor: 0 },
      { name: 'Емкость', value: 220, units: 'uF', factor: 1e-6 },
      { name: 'Напряжение', value: 50, units: 'V', factor: 0 },
      { name: 'Диаметр', value: 10, units: 'mm', factor: 0 },
      { name: 'Высота', value: 20, units: 'mm', factor: 0 },
      { name: 'Шаг', value: 5, units: 'mm', factor: 0 },
    ],
    // storaqe: [
    //   { id: 1, name: 'C-23', qnt: 230 },
    //   { id: 23, name: 'B-29', qnt: 12 },
    // ],
    stockQnt: 242,
    sellPrice: [
      { qnt: 10, unitPrice: 10 },
      { qnt: 25, unitPrice: 8 },
      { qnt: 50, unitPrice: 5 },
    ],
    // buyPrice: 40,
    // priceStory: [
    //   { date: '12-03-2007', qnt: 100, unitPrice: 1 },
    //   { date: '12-03-2007', qnt: 100, unitPrice: 10 },
    // ],
    minOrder: 10,
  },
  {
    id: 30,
    name: 'Panasonic FC 470uF x 35V',
    partNumber: 'EEUFC1V471B',
    body: '',
    manufacture: {
      id: 12,
      name: 'Panasonic'
    },
    category: {
      id: 123,
      name: 'Электролиты',
    },
    techData: [
      { name: 'Серия', value: 'FC', units: '', factor: 0 },
      { name: 'Емкость', value: 470, units: 'uF', factor: 1e-6 },
      { name: 'Напряжение', value: 35, units: 'V', factor: 0 },
      { name: 'Диаметр', value: 10, units: 'мм', factor: 1e-3 },
      { name: 'Высота', value: 22, units: 'мм', factor: 1e-3 },
      { name: 'Шаг', value: 5, units: 'мм', factor: 1e-3 },
    ],
    // storaqe: [
    //   { id: 1, name: 'C-23', qnt: 230 },
    //   { id: 23, name: 'B-29', qnt: 12 },
    // ],
    stockQnt: 242,
    sellPrice: [
      { qnt: 10, unitPrice: 10 },
      { qnt: 25, unitPrice: 8 },
      { qnt: 50, unitPrice: 5 },
    ],
    // buyPrice: 40,
    // priceStory: [
    //   { date: '12-03-2007', qnt: 100, unitPrice: 1 },
    //   { date: '12-03-2007', qnt: 100, unitPrice: 10 },
    // ],
    minOrder: 10,
  },
  {
    id: 40,
    name: 'Panasonic FC 1000uF x 50V',
    partNumber: 'EEUFC1H102',
    body: '',
    manufacture: {
      id: 12,
      name: 'Panasonic'
    },
    category: {
      id: 123,
      name: 'Электролиты',
    },
    techData: [
      { name: 'Серия', value: 'FC', units: '', factor: 0 },
      { name: 'Емкость', value: 1000, units: 'uF', factor: 1e-6 },
      { name: 'Напряжение', value: 50, units: 'V', factor: 0 },
      { name: 'Диаметр', value: 16, units: 'мм', factor: 1e-3 },
      { name: 'Высота', value: 25, units: 'мм', factor: 1e-3 },
      { name: 'Шаг', value: 7.5, units: 'мм', factor: 1e-3 },
    ],
    // storaqe: [
    //   { id: 1, name: 'C-23', qnt: 230 },
    //   { id: 23, name: 'B-29', qnt: 12 },
    // ],
    stockQnt: 242,
    sellPrice: [
      { qnt: 10, unitPrice: 10 },
      { qnt: 25, unitPrice: 8 },
      { qnt: 50, unitPrice: 5 },
    ],
    // buyPrice: 40,
    // priceStory: [
    //   { date: '12-03-2007', qnt: 100, unitPrice: 1 },
    //   { date: '12-03-2007', qnt: 100, unitPrice: 10 },
    // ],
    minOrder: 10,
  },
  {
    id: 1,
    name: 'Panasonic FC 4700uF x 16V',
    partNumber: 'EEUFC1C472',
    body: '',
    manufacture: {
      id: 12,
      name: 'Panasonic'
    },
    category: {
      id: 123,
      name: 'Электролиты',
    },
    techData: [
      { name: 'Серия', value: 'FC', units: '', factor: 0 },
      { name: 'Емкость', value: 4700, units: 'uF', factor: 1e-6 },
      { name: 'Напряжение', value: 16, units: 'V', factor: 0 },
      { name: 'Диаметр', value: 16, units: 'мм', factor: 1e-3 },
      { name: 'Высота', value: 32, units: 'мм', factor: 1e-3 },
      { name: 'Шаг', value: 7.5, units: 'мм', factor: 1e-3 },
    ],
    // storaqe: [
    //   { id: 1, name: 'C-23', qnt: 230 },
    //   { id: 23, name: 'B-29', qnt: 12 },
    // ],
    stockQnt: 242,
    sellPrice: [
      { qnt: 10, unitPrice: 10 },
      { qnt: 25, unitPrice: 8 },
      { qnt: 50, unitPrice: 5 },
    ],
    // buyPrice: 40,
    // priceStory: [
    //   { date: '12-03-2007', qnt: 100, unitPrice: 1 },
    //   { date: '12-03-2007', qnt: 100, unitPrice: 10 },
    // ],
    minOrder: 10,
  },
]

export default data;