import React, { Component } from 'react';

class MainMenu extends Component {
    render() {
        return (
                <li className="nav-item active">
                    <a className="nav-link" href={this.props.linkHref}>{this.props.linkTitle}</a>
                </li>
        );
    }
}

export default MainMenu;