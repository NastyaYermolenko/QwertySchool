import React, { Component } from 'react';

class AuthForm extends Component {
    render() {
        return (
            <div id="auth_form" className="modal fade" role="dialog">
                <div className="modal-dialog col-sm-12 col-md-8 col-lg-4">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Please enter your e-mail and password.</h5>
                            <hr/>
                        </div>
                        <div className="modal-body">
                            <div className="form-group row">
                                <label htmlFor="auth_login" className="col-sm-3 col-form-label"><b>Email</b></label>
                                <input type="text" placeholder="Enter Email" id="auth_login" className="col-sm-9 form-control"
                                       required/>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="auth_password" className="col-sm-3 col-form-label"><b>Password</b></label>
                                <input type="password" placeholder="Enter Password" id="auth_password"
                                       className="col-sm-9 form-control" required/>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancel</button>
                            <button type="button" className="btn btn-primary" id="auth" data-dismiss="modal">Sign In</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AuthForm;