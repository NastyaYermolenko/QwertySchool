import React, { Component } from 'react';

class Paragraph extends Component{
    render(){
        return (
            <p className="text-justify">{this.props.text}</p>
        );
    }
}

export default Paragraph;