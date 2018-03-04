import React, { Component } from 'react';

class Sidebar extends Component{
    render(){
        return (
            <div className="col-md-3 bg-light" id="sidebar">
                <div>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#sidebar_settings"
                            aria-controls="sidebar_settings" aria-expanded="true">
                        Tap here!
                    </button>

                    <div id="sidebar_settings" className="collapse">

                        <form className="settings">
                            <br />
                                <div className="form-group">
                                    <label htmlFor="user_fontsize">Enter font size:</label>
                                    <input type="number" id="user_fontsize" min="8" max="24" defaultValue="16"/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="user_background">Enter background color:</label>
                                    <input type="color" id="user_background"/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="user_fontfamily">Select list:</label>
                                    <select className="form-control" id="user_fontfamily">
                                        <option id="Arial">Arial</option>
                                        <option id="Verdana">Verdana</option>
                                        <option id="TimesNewRoman">Times New Roman</option>
                                        <option id="Monaco">Monaco</option>
                                    </select>
                                </div>
                                <button type="button" className="block" id="deleteP">Delete paragraph</button>

                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Sidebar;