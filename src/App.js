import React, { useState } from 'react'
import styles from './App.module.css';
import Header from './components/Header'
import RoutesComponent from './RoutesComponent';
import Footer from './components/Footer'

const App = () => {
  const [isHome, setIsHome] = useState(false)

  return (
    <div className={styles.app}>
      {!isHome && 
      <div className={styles.header}>
        {<Header />}
      </div>}
        
      <div className={isHome ? styles.home : styles.main}>
        <RoutesComponent setIsHome={setIsHome}/>
      </div>
      
      {!isHome && <Footer />}
    </div>
  );
}

export default App;
