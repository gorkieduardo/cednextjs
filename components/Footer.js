
import React, { useContext } from 'react';
import Link from 'next/link';
import Navbar from './Navbar';
import Layout from './Layout';

const Footer = () => {
    return ( 
        <footer className="bg-primary text-light text-center">
        <div className="container p-2">
          <h1>&copy; CEED, centro cultural y tecnoloógico</h1>
          <p>Fecha de publicación: 2020 - {new Date().getFullYear()}</p>
          <p>ceed.educacion@gmail.com.</p>
        </div>
      </footer>
              
    )
}
export default Footer;