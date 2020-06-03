import React from 'react';
import css from './PartCaption.module.css';

const PartCaption = (props) => {
  return (
    <tr>
      <td className={css.caption} colSpan='8'>{props.caption.name}</td>
    </tr>
  );
}

export default PartCaption;
