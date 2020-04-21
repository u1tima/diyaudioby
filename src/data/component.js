const component = {
  id: 1,
  name: 'RES SMD 0805 10k 1/8W 1%',
  partNumber: 'partNumber',
  body: '0805',
  manufacture: {
    id: 12,
    name: 'Yageo'
  },
  category: {
    id: 123,
    name: 'Резисторы',
  },
  techData: [
    { name: 'Сопротивление', value: 10, units: 'кОм', factor: 1e3 },
    { name: 'Точность', value: 5, units: '%', factor: 0 },
  ],
  storaqe: [
    { id: 1, name: 'C-23', qty: 230 },
    { id: 23, name: 'B-29', qty: 12 },
  ],
  totalQty: 242,
  sellPrice: [
    {qty: 10, unitPrice: 10},
    {qty: 25, unitPrice: 8},
    {qty: 50, unitPrice: 5},
  ],
  buyPrice: 40,
  priceStory: [
    {date: '12-03-2007', qty: 100, unitPrice: 1},
    {date: '12-03-2007', qty: 100, unitPrice: 10},
  ],
  minOrder: 10,
}