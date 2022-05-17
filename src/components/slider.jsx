import React from 'react';
import Gorilla from '../image/pets/горилла.jpg';
import Koza from '../image/pets/коза.jpeg';
import Cat from '../image/pets/кошка.jpg';

const Slider = () => {
    return (
        <section className="ftco-section">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 text-center">
                    </div>
                    <div className="col-md-12">
                        <div className="hero featured-carousel owl-carousel">
                            <div className="item">
                                <div className="work">
                                    <div className="img d-flex align-items-center justify-content-center"
                                         img src={Gorilla}>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="work">
                                    <div className="img d-flex align-items-center justify-content-center"
                                         img src={Koza}>

                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="work">
                                    <div className="img d-flex align-items-center justify-content-center"
                                         img src={Cat}>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default Slider;
