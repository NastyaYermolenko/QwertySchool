import React, { Component } from 'react';

class SignBlock extends Component {
    render() {
        return (
            <div className="col-sm-6">
                <div className="form-row align-items-center" id="sign_buttons">
                    <div className="col-sm-12 nav justify-content-end">
                        <div className="btn-group mr-2" role="group">
                            <button className="btn btn-primary" id="SignUpButton"
                                    data-toggle="modal" data-target="#register_form">Sign up
                            </button>
                        </div>

                        <div className="btn-group mr-2" role="group">
                            <button className="btn btn-primary" id='SignInButton'
                                    data-toggle="modal" data-target="#auth_form">Sign in
                            </button>
                        </div>
                    </div>
                </div>
                <div className="col-sm-12 nav justify-content-end" id='greeting_for_user'>
                    <h2></h2>
                    <button className="btn btn-primary" id="SignOutButton">Sign Out</button>
                </div>
            </div>
        );
    }
}

export default SignBlock;