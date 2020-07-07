export const zeroState = {
  orderQnt: 0,
  unitPrice: 0,
  totalPrice: 0,
  inCart: false
}

export const getState = (cart, comp) => {
  const product = cart.find(product => product.id === comp.id);
  
  const initialState = product
    ? {
      orderQnt: product.orderQnt,
      unitPrice: product.unitPrice,
      totalPrice: product.totalPrice,
      inCart: true,
    }
    : zeroState;

  return initialState;
}

const getPrice = (qnt, priceArray) => {
  if (qnt <= 0) return 0;
  let unitPrice = priceArray[0].unitPrice;
  priceArray.forEach(item => {
    if (qnt >= item.qnt) unitPrice = item.unitPrice;
  });
  return unitPrice;
}