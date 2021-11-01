import React from 'react'
import {NavLink} from 'react-router-dom';

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
                                <NavLink className="nav-item nav-link active" to="/">Home <span className="sr-only"></span></NavLink>
                                <NavLink className="nav-item nav-link" to="/Services">Prediction</NavLink>
                                <NavLink className="nav-item nav-link" to="/Register">Registration</NavLink>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </>
    )
}

export default Navbar
