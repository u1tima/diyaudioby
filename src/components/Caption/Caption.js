import React from 'react';
import css from './Caption.module.css';

const Caption = ({ caption }) => (
  <td className={css.caption} colSpan='8'>{caption.name}</td>
);

export default Caption;
