import React, {Component} from 'react';

class ContactUs extends Component {
    render() {
        return (
            <React.Fragment>
                <section id="signup" className="contact-section bg-black">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 offset-lg-2   col-md-6 mb-md-0   mb-3">
                                <div className="card py-4 h-100">
                                    <div className="card-body text-center">
                                        <i className="fas fa-map-marked-alt text-primary mb-2"/>
                                        <h4 className="text-uppercase m-0">Address</h4>
                                        <hr className="my-4"/>
                                        <div className="small text-black-50">Iran, Tehran</div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 mb-3   col-md-6 mb-md-0">
                                <div className="card py-4 h-100">
                                    <div className="card-body text-center">
                                        <i className="fas fa-envelope text-primary mb-2"/>
                                        <h4 className="text-uppercase m-0">Email</h4>
                                        <hr className="my-4"/>
                                        <div className="small text-black-50">
                                            <a href="#">iran.react.community@gmail.com</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

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
                </section>
            </React.Fragment>
        );
    }
}

export default ContactUs;