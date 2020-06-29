import React, { useState } from 'react';
import State from '../State/State';
import { Icon } from 'rsuite';

const Product = ({ comp }) => {

  const { qnt, price, total, minOrder, sellPrice } = comp;
  const view = "cart"

  const initialState = {
    qnt, price, total
  }

  return (
    <tr>

      <td>
        <div>EEUFC1C101</div>
        <div>Panasonic</div>
      </td>

      <td>
        <Icon icon="cog" size="lg" />
      </td>

      <State comp={comp} view={view} />

    </tr>
  );
}

export default Product;
