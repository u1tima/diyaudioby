import React from 'react';
import css from './Caption.module.css';

const Caption = ({ caption }) => (
  <tr>
    <td className={css.caption} colSpan='8'>{caption.name}</td>
  </tr>
);

export default Caption;
