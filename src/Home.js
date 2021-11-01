import React from 'react'
import pic from "../src/images/grow.png"

const Home = () => {
    return (
        <div>
             <div>
            <section id="header" className="d-flex align-items-center">
            <div className="container-fluid">
            <div className="row">
                <div className="col-10 mx-auto">
                    <div className="row">
                    <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                        <h1>Welcome!!
                        </h1>
                        <h1>Grow Your Stock With <strong className="brand-name">Us</strong></h1>
                        <h2 className="my-3">
                            We are Making a <strong>Profit</strong>
                        </h2>
                        <div className="mt-3">
                            <a href="/Register" className="btn-get-started">Get Started</a>
                        </div>
                    </div>
                    <div className="col-lg-6 order-1 order-lg-2 header-img">
                    <img src={pic} className="img-fluid animated" alt="growstock"/>
                    </div>
                    </div>
                </div>
            </div>
        </div>
            </section>
        </div>
        </div>
    )
}

export default Home
