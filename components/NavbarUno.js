import React from "react";
import Link from "next/link";



const Navbar = () => {
  return (
   <header>
     <div className="container">
       <div className="row justify content-between">
         
         <div className="col-md-4">
         <img src='/static/img/logo.svg'  
            className= "rounded-circle"  width="50" height="50" alt="Gorki"/>
         </div>
         
         <div className="col-md-5">
           
          <nav className="nav b-dark navbar-dark navbar-expand-lg  ">
           
          <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
                >
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
          
           <li className="nav-item">
              <Link href="/">
                <a className="nav-link text-secondary">INICO</a>
              </Link>
            </li>
            <li className="nav-item">
               <Link href="/blog">
                <a className="nav-link text-secondary">BLOG</a>
              </Link>
            </li>

            <li className="nav-link">
               <Link href="/">
                <a className="nav-link ">Iniciar Sesión</a>
              </Link>
            </li>
            <li className="nav-link">
               <Link href="/">
                <a className="btn btn-outline-light text-dark ">Login</a>
              </Link>
            </li>
      </div>
           </nav>
         </div>

       </div>
     </div>
     
     <div className="container">
        <div className="row justify-content-center buscador align-itmes-center">
          <div className="col-md-8">
            <h1 className="display-2 titulo text-white text-center">¡Solucioes edcativas!</h1>
            <p className="display-6 text-white text-center">Centro Cultural y Tecnologia - CEED</p>

                  <form action="#" className="busqueda mt-5">
                   <div className="input-group">
                      <input 
                        type="text"
                        className="form-control"
                        placeholder="Buscar seminario"/>
                     
                      <div className="input-group-append">
                        <input
                        type="submit"
                        value="Buscar"
                        className="btn btn-lg btn-success  "
                        />
                      </div>
                       </div>
                    
                  </form>
          </div>

       </div>
     </div>
   </header>
  );
};

export default Navbar;
