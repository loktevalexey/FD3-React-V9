import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { updateLoadState, updateData } from "../redux/weatherSlice.js";

export const WeatherDisplay = () => {

  const dispatch = useDispatch();

  const weather = useSelector( state => state.weather ); 
  console.log("weather",weather);

  async function load() {
    try {
      dispatch( updateLoadState({state:1,error:null}) );
      const response=await fetch("https://www.ncei.noaa.gov/access/monitoring/climate-at-a-glance/global/time-series/globe/land_ocean/ytd/12/1880-2016.json");
      if ( response.ok ) {
        const data=await response.json();
        console.log("dispatch1");
        dispatch( updateLoadState({state:2,error:null}) );
        console.log("dispatch2");
        dispatch( updateData(data) );
        console.log("dispatch3");
      }
      else {
        dispatch( updateLoadState({state:3,error:"HTTP error "+response.status}) );
      }
    }
    catch ( err ) {
      dispatch( updateLoadState({state:3,error:err.message}) );
    }
  };

  return (
    <>
      { (weather.dataLoadState===0) && "no data" }
      { (weather.dataLoadState===1) && "loading..." }
      { (weather.dataLoadState===2) && "in 2000 is: "+weather.data.data["2000"].anomaly }
      { (weather.dataLoadState===3) && "error: "+weather.dataLoadError }
      <br/>
      <input type='button' value='load data' onClick={load} />
      
    </>
);

}
