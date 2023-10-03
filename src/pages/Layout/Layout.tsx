

import Header from "../../components/Header/Header";
import  Footer from "../../components/Footer/Footer";
import Intro from "../Intro/Intro";
import About from "../About/About";

const Layout = () => {
    return (
        <div>
            <Header/>
            <main>
                <Intro/>
                <About/>
            </main>
            <Footer/>
        </div>
    );
};

export default Layout;