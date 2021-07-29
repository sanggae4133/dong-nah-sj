import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { TOPContainer } from 'containers/TOP';


class TOP extends Component {
    render() {
        return (
            <div>
                <Route path="/top" component={TOPContainer}/>
            </div>
        );
    }
}

export default TOP;