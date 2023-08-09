import React from 'react';
import { useSelector } from "react-redux";
import { RootState } from '../redux/store';
import styles from "../components/WeatherForm.module.css";

const WeatherInfo: React.FC = (): JSX.Element | null=> {
    const {data, error, loading} = useSelector((state:RootState) => state.weather);

    if(loading){
        return <div>Loading...</div>
    }

    if(error){
        return <div>Error: {error}</div>
    }

    if(!data){
        return null;
    }
    

    return (
    <div>
        <h2>{data.name}</h2>
        <p> {(data.main.temp - 273.15).toFixed(1)} &#8451;</p>
        <p>{data.weather[0].description}</p>
        <p>{data.main.humidity} % humidity</p>
        <p>{data.wind.speed} m/s wind</p>
    </div>
    );
};

export default WeatherInfo;