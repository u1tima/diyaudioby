import React, { Component } from 'react';
import css from './Part.module.css';
import State from '../State/State';
import { Icon } from 'rsuite';

const Part = ({ part }) => {

  const { comp, asmQnt } = part;

  const showPartName = () => (
    <td>
      <div>{comp.name}</div>
      <div>{comp.manufacture.name}</div>
    </td>
  )

  const showFullInfo = () => (
    <td>
      <Icon icon="cog" size="lg"/>
    </td>
  )

  const showPosition = () => (
    <td>
      {part.position}
    </td>
  )

  return (
    <>
      {showPosition()}
      {showPartName()}
      {showFullInfo()}
      <State comp={comp} asmQnt={asmQnt} />
    </>
  );
}

export default Part;
