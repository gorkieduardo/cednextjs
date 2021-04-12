import App from 'next/app';
import 'bootstrap/dist/css/bootstrap.min.css';

const MyApp = props => {
    
    const { Component, pageProps } = props;

    return (
      
            <Component {...pageProps} />
       
    )
}

export default MyApp;