import React from 'react'
import './Header.css'

function Header() {
    return (
    <div className="header">
       <nav class="navbar navbar-expand-lg navbar-light ">
         <div className="container p-2 text-uppercase ">
                     <a className="navbar-brand" href="#">Royal Empoperer</a>
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
        
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                        </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Link</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Link</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Link</a>
                                </li>
                             <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                country
                                </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <a className="dropdown-item" href="#">India</a>
                                        <a className="dropdown-item" href="#">Australia</a>
                                        <a className="dropdown-item" href="#">caneda</a>
                                        <a className="dropdown-item" href="#">Berma</a>
                                        <a className="dropdown-item" href="#">Newiland</a>
                                        <div className="dropdown-divider"></div>
                                        <a className="dropdown-item" href="#">Something else here</a>
                                </div>
                        </li>
                       
                    </ul>
                 </div>     
            </div>
        </nav>
        <section className="header-section">
          <div className="center-div">
              <h1 className="font-weight-bold">We are The Web Developers</h1>
              <p>We create the world best websites</p>
              <div className="header-buttons">
                  <a href="#">AboutUs</a>
                  <a href="#">ContactUs</a>
              </div>
          </div>
        </section>
</div>
    )
}

export default Header
