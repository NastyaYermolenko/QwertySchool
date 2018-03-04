import React, { Component } from 'react';

class RegisterForm extends Component {
    render() {
        return (
            <div id="register_form" className="modal fade" role="dialog">
                <div className="modal-dialog col-sm-12 col-md-8 col-lg-4">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Please fill in this form to create an account.</h5>
                            <hr/>
                        </div>
                        <div className="modal-body">
                            <div className="form-group row">
                                <label htmlFor="username" className="col-sm-3 col-form-label"><b>Your name</b></label>
                                <input type="text" placeholder="Enter your name" id="username" className="col-sm-9 form-control"
                                       required/>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="register_login" className="col-sm-3 col-form-label"><b>Email</b></label>
                                <input type="text" placeholder="Enter Email" id="register_login" className="col-sm-9 form-control"
                                       required/>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="register_password" className="col-sm-3 col-form-label"><b>Password</b></label>
                                <input type="password" placeholder="Enter Password" id="register_password"
                                       className="col-sm-9 form-control" required/>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="register_confirmation" className="col-sm-3 col-form-label"><b>Repeat</b></label>
                                <input type="password" placeholder="Repeat Password" id="register_confirmation"
                                       className="col-sm-9 form-control" required/>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancel</button>
                            <button type="button" className="btn btn-primary" id="register" data-dismiss="modal">Sign Up</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default RegisterForm;