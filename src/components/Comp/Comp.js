import React from 'react';
import State from '../State/State';
import { Popover, Whisper } from 'rsuite';

const Comp = ({ comp }) => {

  const { partNumber, manufacture, techData } = comp;
  const view = 'comp';

  return (
    <tr>
      <td>
        <div>{partNumber}</div>
        <div>{manufacture.name}</div>
      </td>

      {techData.map((tech, index) => (
        <td key={index}>
          {tech.value}
        </td>
      ))}

      <State comp={comp} view={view}/>
    </tr>
  );
}

export default Comp;
