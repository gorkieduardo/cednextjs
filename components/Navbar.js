import React from "react";
import Link from "next/link";
import Layout from "./Layout";


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
           <nav className="nav d-flex justify-content-end flex-colum flex-md-row">
           <li className="nav-ling">
              <Link href="/">
                <a className="nav-link ">INICO</a>
              </Link>
            </li>
            <li className="nav-ling">
               <Link href="/blog">
                <a className="nav-link ">BLOG</a>
              </Link>
            </li>

            <li className="nav-ling">
               <Link href="/">
                <a className="nav-link ">Iniciar Sesión</a>
              </Link>
            </li>
            <li className="nav-ling">
               <Link href="/">
                <a className="btn btn-outline-light text-dark ">Login</a>
              </Link>
            </li>

           </nav>
         </div>

       </div>
     </div>
     
     <did className="container">
        <div className="row justify-content-center buscador align-itmes-center">
          <div className="col-md-6">
            <h1 className="display-1 titulo text-white text-center">¡Solucioes edcativas!</h1>
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
     </did>
   </header>
  );
};

export default Navbar;
