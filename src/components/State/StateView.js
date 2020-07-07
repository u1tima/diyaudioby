import React from 'react';
import { Button, IconButton, Icon, InputNumber } from 'rsuite';
import css from './StateView.module.css';

export const PartNumber = ({ partNumber, manufacture }) => (
  <td>
    <div>{partNumber}</div>
    <div>{manufacture.name}</div>
  </td>
)

export const PartName = ({ name, manufacture }) => (
  <td>
    <div>{name}</div>
    <div>{manufacture.name}</div>
  </td>
)

export const PartPosition = ({ pos }) => <td>{pos}</td>

export const Info = () => <td><Icon icon="cog" size="lg" /></td>

export const AsmQuantity = ({ qnt, onAsmQntClick }) => (
  <td>
    <div className={css.asmQnt} onClick={() => onAsmQntClick(qnt)}>
      {qnt}
    </div>
  </td>
)

export const TechData = ({ data }) => {
  return data.map((tech, index) => (
    <td key={index}>{tech.value}</td>
  ))
}

export const PriceData = ({ data, onQntClick }) => (
  <td className={css.price}>
    {data.map((item, index) => (
      <div key={index} className={css.row}>
        <div className={css.item} onClick={() => onQntClick(index)}>{`${item.qnt}+`}</div>
        <div>{`${item.unitPrice.toFixed(2)} р`}</div>
      </div>
    ))}
  </td>
)

export const OrderInput = ({ step, value, onChange, onBlur }) => (
  <td className={css.control}>
    <InputNumber
      size='sm'
      step={step}
      value={value}
      onChange={(e) => onChange(e)}
      onBlur={(e) => onBlur(e)} />
  </td>
)

export const TotalPrice = ({ total }) => <td>{total} p</td>

export const ButtonAddToCart = ({ isActive, onAdd }) => (
  <td>
    <Button size='sm' appearance="primary" disabled={isActive} onClick={onAdd}>
      В корзину
      </Button>
  </td>
)

export const ButtonRefreshCart = ({ onRefresh }) => (
  <td>
    <IconButton onClick={onRefresh} size='sm' color="green" icon={<Icon icon="refresh" />} />
  </td>
)

export const ButtonRemoveFromCart = ({ onRemove }) => (
  <td>
    <IconButton onClick={onRemove} size='sm' color="red" icon={<Icon icon="close" />} />
  </td>
)

export const ButtonsChangeCart = ({ onRefresh, onRemove }) => (
  <td>
    <div className={css.buttons}>
      <IconButton onClick={onRefresh} size='sm' color="green" icon={<Icon icon="refresh" />} />
      <IconButton onClick={onRemove} size='sm' color="red" icon={<Icon icon="close" />} />
    </div>
  </td>
)

