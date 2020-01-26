import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const cars = [
  {name: 'Ford', year: 2018},
  {name: 'Audi', year: 2016},
  {name: 'BMW', year: 2018},
  {name: 'Porsche', year: 2020}
];

ReactDOM.render(<App cars={cars} />, document.getElementById('root'));
registerServiceWorker();
