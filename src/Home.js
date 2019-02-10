import React from 'react';
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import Menu from "./components/Menu";
import Slider from "./components/Slider";
import Helmet from "react-helmet";
import Favicon from "./assets/img/logo/favicon.ico"

class Home extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Helmet>
                    <meta property="og:site_name" content="Iran React Community | جامعه ری‌اکت ایران"/>
                    <meta property="og:type" content="site"/>
                    <meta property="og:url" content="https://iran-react-community.github.io/"/>
                    <meta property="og:locale" content="fa"/>
                    <meta charSet="utf-8"/>
                    <title>Iran React Community | جامعه ری‌اکت ایران</title>
                    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
                    <meta name="description" content=""/>
                    <meta name="author" content=""/>
                    <link rel="shortcut icon" href={Favicon} type="image/icon"/>
                </Helmet>
                <Menu/>
                <Slider/>
                <AboutUs/>
                <ContactUs/>
            </React.Fragment>
        );
    }
}

export default Home;
