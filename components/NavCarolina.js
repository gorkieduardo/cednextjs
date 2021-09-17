

import React from 'react'

const NavCarolina = () => {
    return (
        <header className="encabezado-sitio container">
        <div className="container">
        <div className="row justify-content-md-between align-items-center">
            <div className="col-lg-4">
              <a href="index.html">
                <img src="/static/img/logo.svg" className="img-fluid mx-auto d-block pt-4 pb-4" />
              </a>
            </div>
            <div className="col-lg-4">
              <nav className="sociales text-center text-lg-right">
                <ul>
                  <li>
                    <a href="http://facebook.com"> 
                      <span className="sr-only"> Facebook</span>
                    </a>
                  </li>
                  <li>
                    <a href="http://twitter.com"> 
                      <span className="sr-only"> Twitter</span>
                    </a>
                  </li>
                  <li>
                    <a href="http://instagram.com">
                      <span className="sr-only"> Instagram</span>
                    </a>
                  </li>
                  <li>
                    <a href="http://pinterest.com"> 
                      <span className="sr-only"> Pinterest</span>
                    </a>
                  </li>
                  <li>
                    <a href="http://youtube.com"> 
                      <span className="sr-only"> YouTube</span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
        </div>
        </div>


      <div className="container">
      <div className="navegacion mt-3 py-1">
      <nav className="nav-principal navbar navbar-expand-md navbar-light bg-faded">
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#nav_principal" aria-label="Mostrar Navegacion">
              <span className="navbar-toggler-icon"></span>
          </button>
          <a href="#" className="navbar-brand d-lg-none">Carolina Spa</a>
          <div className="container">
                <div className="collapse navbar-collapse w-100" id="nav_principal">
                    <ul className="nav nav-justified w-100 flex-column flex-sm-row">
                        <li className="nav-item">
                              <a href="index.html" className="nav-link text-dark">Inicio</a>
                        </li>
                        <li className="nav-item">
                              <a href="nosotros.html" className="nav-link text-dark">Nosotros</a>
                        </li>
                        <li className="nav-item">
                              <a href="" className="nav-link text-dark">Servicios</a>
                        </li>
                        <li className="nav-item">
                              <a href="" className="nav-link text-dark">Productos</a>
                        </li>
                        <li className="nav-item">
                              <a href="" className="nav-link text-dark">Contacto</a>
                        </li>
                    </ul>
                </div> 
          </div>
      </nav>
    </div>

      </div>
      
    </header>

    
    )
}

export default NavCarolina;
