import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Layout from './components/Layout';
import { BrowserRouter } from "react-router-dom";
import { StateContext } from './context/stateContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <StateContext>
        <Layout>
          <App />
        </Layout>
      </StateContext>
    </BrowserRouter>
  </React.StrictMode>
);


