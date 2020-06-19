import React from 'react';
import State from '../State/State';
import { Popover, Whisper } from 'rsuite';

const Comp = ({ comp }) => {

  const { partNumber, manufacture, techData } = comp;

  return (
    <>
      <td>
        <div>{partNumber}</div>
        <div>{manufacture.name}</div>
      </td>

      {techData.map((tech, index) => (
        <td key={index}>
          {tech.value}
        </td>
      ))}

      <State comp={comp} />
    </>
  );
}

export default Comp;
