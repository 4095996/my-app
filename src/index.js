import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import './index.css';
import {Table} from "./components/Table";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Table />
  </React.StrictMode>
);
