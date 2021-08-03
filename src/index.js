import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import LogIn from "./menu/LogIn";
import SignUp from "./menu/SignUp";
import Header from "./components/Header";
import Footer from "./components/Footer";
import DetailBrg from "./menu/DetailBrg";
import Profil from "./menu/Profil";
import Beli from "./menu/Beli";
import Cart from "./menu/Cart";
import Payment from "./menu/Payment";
import FormAlmt from "./form/FormAlmt";
import style from "./style.css";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
const Routing = () => {
  return(
    <Router>
      <div className="body">
      <Header/>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/login" component={LogIn} />
        <Route path="/register" component={SignUp} />
        <Route path="/detail" component={DetailBrg}/>
        <Route path="/profil" component={Profil}/>
        <Route path="/beli" component={Beli}/>
        <Route path="/pay" component={Payment}/>
        <Route path="/cart" component={Cart}/>
        <Route path="/formalmt" component={FormAlmt}/>
      </Switch>
      <Footer/>
      </div>
    </Router>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <Routing/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
