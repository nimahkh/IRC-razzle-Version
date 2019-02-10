import React, {Component} from 'react';

class Slider extends Component {
    render() {
        return (
            <React.Fragment>
                <header className="masthead">
                    <div className="container d-flex h-100 align-items-center">
                        <div className="mx-auto text-center">
                            <h1 className="mx-auto my-0 text-uppercase">Iran React Community</h1>
                            <h2 className="rtl text-white-50 mx-auto mt-2 mb-5">
                                جـامعه تـوسعه دهنـدگان ری‌اکـت ایـران
                            </h2>
                            <p className="rtl text-white-50">
                                جامعه‌ غیرانحصاری و مشارکت جمعی توسعه‌دهندگان React و React Native
                            </p>
                            <div className="social d-flex justify-content-center">
                                <a href="https://b2n.ir/ir-react" className="mx-2">
                                    <i className="fab fa-telegram"/>
                                </a>
                                <a href="http://instagram.com/iran_react" className="mx-2">
                                    <i className="fab fa-instagram"/>
                                </a>
                                <a href="http://twitter.com/iran_react" className="mx-2">
                                    <i className="fab fa-twitter"/>
                                </a>
                                <a href="https://www.linkedin.com/groups/8742016/" className="mx-2">
                                    <i className="fab fa-linkedin"/>
                                </a>
                                <a href="https://github.com/iran-react-community" className="mx-2">
                                    <i className="fab fa-github"/>
                                </a>
                            </div>

                        </div>
                    </div>
                </header>
            </React.Fragment>
        );
    }
}

export default Slider;