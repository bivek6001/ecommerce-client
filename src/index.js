import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Toaster } from "react-hot-toast"
import {Provider} from "react-redux"
import store from "./redux/store.js"
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>  {/* Wrap your app with Provider to access the store */}
       <Toaster
  position="top-center"
  reverseOrder={false}
/>
    <App />
    </Provider>
  </React.StrictMode>
);

