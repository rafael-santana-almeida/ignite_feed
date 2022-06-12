import { Header } from "./components/Header"
import styles from './App.module.css';

import './global.css';
import { Sidebar } from "./components/Sidebar";

export function App() {
  return (
    <>
      <Header />
 
      <div className={styles.wrapper}>
        <Sidebar />
        <main></main>
      </div>
    </>    
  );
}
