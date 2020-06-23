import React from 'react';
import css from './wrapper.module.css';
import { Provider } from 'react-redux';
import createStore from '../../store/store';

const Wrapper = ({ children }) => {

  const store = createStore();

  return (
    <Provider store={store} >
      <div className={css.wrapper}>
        {children}
      </div>
    </Provider>
  )
}


export default Wrapper;
