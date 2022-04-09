import styles from './App.module.css';
import Header from './components/Header'
import RoutesComponent from './RoutesComponent';

const App = () => {
  return (
    <div className={styles.app}>
      <Header />
      <RoutesComponent />
    </div>
  );
}

export default App;
