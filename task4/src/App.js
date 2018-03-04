import React, { Component } from 'react';
import './App.css';
import Header from "./Header";
import RegisterForm from "./RegisterForm";
import AuthForm from "./AuthForm";
import Sidebar from "./Sidebar";
import Content from "./Content";
import Footer from "./Footer";

class App extends Component {
  render() {
    return (
        <div>
      <div className="container">
        <Header/>
          <RegisterForm/>
          <AuthForm/>
          <br/>
          <div className="row">
              <Sidebar/>
              <Content/>
          </div>
      </div>
            <div className="container">
                <Footer/>
            </div>
        </div>
    );
  }
}

export default App;
