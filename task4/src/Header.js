import React, { Component } from 'react';
import MainMenu from "./MainMenu";
import SignBlock from "./SignBlock";
import logo from './logo.png';

class Header extends Component {
    render() {
        return (
            <div className="row">

                <nav className="navbar navbar-expand-lg navbar-light bg-light col-sm-12 border border-info">
                    <a className="navbar-brand" href="#">
                        <img src={logo} width="30" height="30" alt="logo" />
                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navContent"
                            aria-controls="navContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navContent">
                        <ul className="navbar-nav mr-auto col-sm-6">
                            <MainMenu linkHref="#" linkTitle="Home"/>
                            <MainMenu linkHref="#" linkTitle="Link"/>
                            <MainMenu linkHref="#" linkTitle="Link"/>
                            <MainMenu linkHref="#" linkTitle="Link"/>
                        </ul>
                        <SignBlock/>
                    </div>
                </nav>

            </div>
        );
    }
}

export default Header;