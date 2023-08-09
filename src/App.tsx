import React from 'react';
import './App.css';
import WeatherForm from './components/WeatherForm';
import WeatherInfo from './components/WeatherInfo';
import styles from "./components/WeatherForm.module.css";

function App() {
  return (
    <div className={styles.container}>
      <WeatherForm />
      <WeatherInfo />
      
    </div>
  );
}

export default App;
