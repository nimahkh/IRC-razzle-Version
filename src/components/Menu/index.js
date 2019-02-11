import React, {Component} from 'react';
import Logo from "../../assets/img/logo/144.png"
import Lang from "../../langs/fa";
import handleScroll from "../../helper/offsetHandler";

class Menu extends Component {

    componentDidMount(){
        window.addEventListener('scroll', handleScroll);
    }

    render() {
        return (
            <React.Fragment>
                <nav className="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
                    <div className="container">
                        <a className="navbar-brand js-scroll-trigger" href="#page-top">
                            <img src={Logo} alt="IRC" title="Iran React Community"/>
                            <span dangerouslySetInnerHTML={{ __html: Lang.Beta }} />
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
                                    <a className="nav-link js-scroll-trigger" href="#contact">{Lang.ContactUs}</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link js-scroll-trigger" href="#about">{Lang.AboutUs}</a>
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