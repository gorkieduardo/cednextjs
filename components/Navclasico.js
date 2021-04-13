
import React from 'react'
import Link from "next/link";

const Navclasico = () => {
    return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">
                CEED
                </a>
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
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-link">
                    <Link href="/">
                        <a className="nav-link ">Inicio</a>
                    </Link>
                    </li>

                    <li className="nav-link">
                    <Link href="/blog">
                        <a className="nav-link ">Blog</a>
                    </Link>
                    </li>
                </ul>
                <form className="d-flex">
                    <input
                    className="form-control me-2"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                    />
                    <button className="btn btn-outline-success" type="submit">
                    Search
                    </button>
                </form>
                </div>
                
            </div>
            
        </nav>
        

    )
}

export default Navclasico
