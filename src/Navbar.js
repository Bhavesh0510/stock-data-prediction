import React from 'react'

const Navbar = () => {
    return (
        <>
            <div className="container-fluid nav_bg">
                <div className="row">
                    <div className="col-10 mx-auto"></div>
                    <nav class="navbar navbar-expand-lg navbar-light bg-light">
                        <a class="navbar-brand navbar-red" href="/"><b>Make Profit</b></a>
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div class="nav navbar-nav navbar-right">
                                <a class="nav-item nav-link active" href="/">Home <span class="sr-only"></span></a>
                                <a class="nav-item nav-link" href="/Services">Prediction</a>
                                <a class="nav-item nav-link" href="/Register">Registration</a>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </>
    )
}

export default Navbar
