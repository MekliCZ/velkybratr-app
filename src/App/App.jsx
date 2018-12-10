import React from 'react';
import {Router, Route} from 'react-router-dom';
import {connect} from 'react-redux';

import {history} from '../_helpers';
import {alertActions} from '../_actions';
import {PrivateRoute} from '../_components';
import {HomePage} from '../pages';
import {LoginPage} from '../pages';
import {Minitruth} from '../pages';

import '../style/normalize.css';
import '../style/skeleton.css';
import '../style/style.css';

class App extends React.Component {
    constructor(props) {
        super(props);

        const {dispatch} = this.props;
        history.listen((location, action) => {
            // clear alert on location change
            dispatch(alertActions.clear());
        });
    }

    render() {
        const {alert} = this.props;
        return (
            <div className="container">
                    <Router history={history}>
                        <div>
                            <PrivateRoute exact path="/" component={HomePage}/>
                            <Route path="/login" component={LoginPage}/>
                        </div>
                    </Router>

                    {alert.message &&
                    <div className={`alert ${alert.type}`}>{alert.message}</div>
                    }
            </div>
        );
    }
}

function mapStateToProps(state) {
    const {alert} = state;
    return {
        alert,
    };
}

const connectedApp = connect(mapStateToProps)(App);
export {connectedApp as App};