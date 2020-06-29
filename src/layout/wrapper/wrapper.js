import React from 'react';
import css from './Wrapper.module.css';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from '../../store/rootReducer';

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

const Wrapper = ({ children }) => {
  return (
    <Provider store={store} >
      <div className={css.wrapper}>
        {children}
      </div>
    </Provider>
  )
}

export default Wrapper;
