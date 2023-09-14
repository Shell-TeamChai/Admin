import React from 'react'
import Logo from '../Assets/logo.png';

const Navbar = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light" style={{backgroundColor:'#ffcc00'}}>
                <img src={Logo} width="30" height="30" class="d-inline-block align-top" alt="" />
                <a class="navbar-brand" href="#">EV Management System</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item active">
                            <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                        </li>
                        {/* <li class="nav-item">
                            <a class="nav-link" href="#">Feedback</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Greivances</a>
                        </li> */}
                        <li class="nav-item">
                            <a class="nav-link" href="#">About</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar