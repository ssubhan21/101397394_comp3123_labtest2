import React from 'react';
import {
    WiHumidity,
    WiStrongWind,
    WiSunrise,
    WiSunset,
    WiCloudy,
} from 'react-icons/wi';
import { BsThermometerHalf } from 'react-icons/bs';

const WeatherCard = ({ weather }) => {
    const {
        name,
        sys: { country, sunrise, sunset },
        weather: weatherDetails,
        main: { temp, feels_like, temp_min, temp_max, pressure, humidity },
        wind: { speed },
        visibility,
    } = weather;
    const [details] = weatherDetails;

    // Format sunrise and sunset times
    const formatTime = (timestamp) => {
        const date = new Date(timestamp * 1000);
        return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    };

    return (
        <div className="text-white p-8 rounded-2xl shadow-lg max-w-lg w-full">
            {/* City and Weather */}
            <div className="text-center mb-6">
                <h2 className="text-3xl font-bold">{name}, {country}</h2>
                <p className="text-lg capitalize text-gray-400">{details.description}</p>
                <WiCloudy className="mx-auto text-6xl text-gray-300 mt-4" />
            </div>

            {/* Temperature */}
            <div className="flex justify-between items-center mb-6">
                <div className="flex items-center space-x-3">
                    <BsThermometerHalf size={36} className="text-blue-500" />
                    <p className="text-5xl font-bold">
                        {Math.round(temp - 273.15)}°C
                    </p>
                </div>
                <div className="text-right">
                    <p>Feels Like: {Math.round(feels_like - 273.15)}°C</p>
                    <p>Max: {Math.round(temp_max - 273.15)}°C</p>
                    <p>Min: {Math.round(temp_min - 273.15)}°C</p>
                </div>
            </div>

            {/* Additional Details */}
            <div className="grid grid-cols-2 gap-4 mb-6 text-gray-400">
                <div className="flex items-center space-x-2">
                    <WiHumidity size={36} />
                    <p>Humidity: {humidity}%</p>
                </div>
                <div className="flex items-center space-x-2">
                    <WiStrongWind size={36} />
                    <p>Wind: {speed} m/s</p>
                </div>
                <div className="flex items-center space-x-2">
                    <p className="text-xl">Visibility:</p>
                    <p>{(visibility / 1000).toFixed(1)} km</p>
                </div>
                <div className="flex items-center space-x-2">
                    <p className="text-xl">Pressure:</p>
                    <p>{pressure} hPa</p>
                </div>
            </div>

            {/* Sunrise and Sunset */}
            <div className="flex justify-between text-gray-400">
                <div className="flex flex-col items-center">
                    <WiSunrise size={36} />
                    <p>Sunrise</p>
                    <p>{formatTime(sunrise)}</p>
                </div>
                <div className="flex flex-col items-center">
                    <WiSunset size={36} />
                    <p>Sunset</p>
                    <p>{formatTime(sunset)}</p>
                </div>
            </div>
        </div>
    );
};

export default WeatherCard;
