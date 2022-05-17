import React from 'react';
import Header from "../components/header";
import Footer from "../components/footer";
import Slider from "../components/slider";

const Main = () => {
    return (
        <div>
            <Header/>
            <main style={{'minHeight' : '70vh'}}>Контент страницы</main>
            <Footer/>
        </div>
    );
};

export default Main;