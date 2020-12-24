import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import TopSection from './components/TopSection';

function Welcome(props){
  return (<h1>
    hello guys my name is, {props.name}
  </h1>);
}

// const element = <TopSection work="yess"/>
// const element = <Welcome name="yusuf"/>;

ReactDOM.render(
  // <TopSection work="yes yesy"/>,
  <App/>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
