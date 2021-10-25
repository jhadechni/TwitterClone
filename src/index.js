import React from 'react';
import { render } from 'react-snapshot';
import { Routes } from "./components/routes"
import reportWebVitals from './reportWebVitals';
import GlobalStyle from "./globalstyles";

const RoutesApp = () => {
  return (
    <>
      <GlobalStyle />
      <Routes />
    </>
  )
};
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
render(<RoutesApp />, document.getElementById('root'))
reportWebVitals();
