const cart = [
  {
    id: 1,
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
      { name: 'Полярность', value: 'Bipolar', units: '', factor: 0 },
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
      { qnt: 1, unitPrice: 20 },
      { qnt: 10, unitPrice: 15 },
      { qnt: 25, unitPrice: 10 },
    ],
    // buyPrice: 40,
    // priceStory: [
    //   { date: '12-03-2007', qnt: 100, unitPrice: 1 },
    //   { date: '12-03-2007', qnt: 100, unitPrice: 10 },
    // ],
    minOrder: 1,
    qnt: 100,
    price: 10,
    total: 1000,
  },
  {
    id: 1,
    name: 'Panasonic FC 220uF x 16V',
    partNumber: 'EEUFC1C101',
    body: 'TH',
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
      { name: 'Напряжение', value: 16, units: 'V', factor: 0 },
      { name: 'Полярность', value: 'Bipolar', units: '', factor: 0 },
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
      { qnt: 1, unitPrice: 20 },
      { qnt: 10, unitPrice: 15 },
      { qnt: 25, unitPrice: 10 },
    ],
    // buyPrice: 40,
    // priceStory: [
    //   { date: '12-03-2007', qnt: 100, unitPrice: 1 },
    //   { date: '12-03-2007', qnt: 100, unitPrice: 10 },
    // ],
    minOrder: 1,
    qnt: 50,
    price: 12,
    total: 600,
  },
  {
    id: 1,
    name: 'RES SMD 22k Ohm 1% 1/4W 1206',
    partNumber: 'RC1206FR-0722KL',
    body: '',
    manufacture: {
      id: 12,
      name: 'Yageo'
    },
    category: {
      id: 123,
      name: 'Электролиты',
    },
    techData: [
      { name: 'Серия', value: 'FC', units: '', factor: 0 },
      { name: 'Емкость', value: 100, units: 'uF', factor: 1e-6 },
      { name: 'Напряжение', value: 16, units: 'V', factor: 0 },
      { name: 'Полярность', value: 'Bipolar', units: '', factor: 0 },
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
      { qnt: 1, unitPrice: 20 },
      { qnt: 10, unitPrice: 15 },
      { qnt: 25, unitPrice: 10 },
    ],
    // buyPrice: 40,
    // priceStory: [
    //   { date: '12-03-2007', qnt: 100, unitPrice: 1 },
    //   { date: '12-03-2007', qnt: 100, unitPrice: 10 },
    // ],
    minOrder: 1,
    qnt: 10,
    price: 22,
    total: 220,
  },
  {
    id: 1,
    name: 'RES SMD 100k Ohm 1% 1/4W 1206',
    partNumber: 'RC1206FR-07100KL',
    body: 'TH',
    manufacture: {
      id: 12,
      name: 'Yageo'
    },
    category: {
      id: 123,
      name: 'Резисторы',
    },
    techData: [
      { name: 'Серия', value: 'FC', units: '', factor: 0 },
      { name: 'Емкость', value: 220, units: 'uF', factor: 1e-6 },
      { name: 'Напряжение', value: 16, units: 'V', factor: 0 },
      { name: 'Полярность', value: 'Bipolar', units: '', factor: 0 },
      { name: 'Диаметр', value: 6.3, units: 'мм', factor: 0 },
      { name: 'Высота', value: 12, units: 'мм', factor: 0 },
      { name: 'Шаг', value: 2.5, units: 'мм', factor: 0 },
    ],
    stockQnt: 242,
    sellPrice: [
      { qnt: 1, unitPrice: 20 },
      { qnt: 10, unitPrice: 15 },
      { qnt: 25, unitPrice: 10 },
    ],
    minOrder: 1,
    qnt: 150,
    price: 5,
    total: 750,
  },
]

export default cart;