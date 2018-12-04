import React, { Component } from 'react';
import Connect from '../connect/connect';
import logo from '../assets/logo.png';
require('./index.less');

class Wrapper extends Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <div className="page-wrap">
                <div className="content">
                    <img className="feflow-logo" src={logo} />
                    <p>Hello World!</p>
                    <p>Edit src/pagees/index/container/index.js and save to reload.</p>
                    <a href="http://feflowjs.org">More about Feflow</a>
                </div>
            </div>
        );
    }
}

export default Connect(Wrapper);
