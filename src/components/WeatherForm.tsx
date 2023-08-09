import React, { FC, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchWeather } from "../redux/weatherSlice";
import styles from "../components/WeatherForm.module.css";

const WeatherForm: FC  = (): JSX.Element => {
    const[city, setCity] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(fetchWeather(city));
        setCity('');
    }

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <input
             type="text" 
             placeholder="Enter city name"
             // Двусторонняя связка состояние и  input
             onChange={(e) => setCity(e.target.value)}
             value={city}
             />
             <div>{city}</div>
            <button className={styles.button} type="submit">Get weather</button>
        </form>
    );
};

export default WeatherForm;