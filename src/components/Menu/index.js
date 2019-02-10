import React, {Component} from 'react';
import Logo from "../../assets/img/logo/144.png"

class Menu extends Component {
    render() {
        return (
            <React.Fragment>
                <nav className="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
                    <div className="container">
                        <a className="navbar-brand js-scroll-trigger" href="#page-top">
                            <img src={Logo} alt="IRC" title="Iran React Community"/>
                            <span>IRC <sup>نسخه بتا</sup></span>
                        </a>
                        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse"
                                data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false"
                                aria-label="Toggle navigation">
                            منـو
                            <i className="fas fa-bars"/>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarResponsive">
                            <ul className="rtl navbar-nav ml-auto">
                                <li className="nav-item">
                                    <a className="nav-link js-scroll-trigger" href="#signup">ارتباط با ما</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link js-scroll-trigger" href="#about">درباره جامعه</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </React.Fragment>
        );
    }
}

export default Menu;