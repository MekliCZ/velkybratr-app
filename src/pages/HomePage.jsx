import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class HomePage extends React.Component {
    // componentDidMount() {
    //     this.props.dispatch(userActions.getAll());
    // }

    render() {
        // const { user } = this.props;
        return (
            <div className="col-md-6 col-md-offset-3">
                <div id="header"></div>
                <p>Vítej na Ministerstvu pravdy.
                    Tvojí prací na ministerstvu je schvalovat či cenzurovat příspěvky.<br />
                    Jakožto hlavní kontrolor jsi to právě ty, kdo rozhoduje, co lidé mají číst a co se má cenzurovat.
                Neexistuje tedy žádná správná odpověď, pouze se snaž využívat obě varianty (cenzura/schválení).</p>
                <p>
                    Nejedná se o hru, představ si, že by skutečně existovalo Ministerstvo pravdy a ty jsi mu velil/a.
                    Rozhodovat se můžeš na základě svých názorů nebo třeba cenzurovat věci, které tě nezajímají.
                </p>
                    <Link to="/minitrutr">Začít cenzurovat</Link><br /><br />
                    <Link to="/login">Odhlásit se</Link>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { authentication } = state;
    const { user } = authentication;
    return {
        user
    };
}

const connectedHomePage = connect(mapStateToProps)(HomePage);
export { connectedHomePage as HomePage };