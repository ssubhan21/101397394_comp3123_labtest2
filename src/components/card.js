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
        <div className="bg-gradient-to-r from-blue-100 via-blue-300 to-blue-500 p-6 rounded-lg shadow-lg max-w-lg w-full mx-auto">
            {/* City and Weather */}
            <div className="text-center mb-4">
                <h2 className="text-4xl font-semibold text-gray-800">{name}, {country}</h2>
                <p className="text-xl text-gray-600 capitalize">{details.description}</p>
            </div>

            {/* Main Weather Section */}
            <div className="flex justify-between items-center mb-6">
                <div className="flex flex-col items-center">
                    <WiCloudy size={50} className="text-gray-700" />
                    <p className="text-6xl font-semibold text-gray-800">
                        {Math.round(temp - 273.15)}°C
                    </p>
                </div>
                <div className="text-right">
                    <p className="text-lg text-gray-600">Feels Like: {Math.round(feels_like - 273.15)}°C</p>
                    <p className="text-lg text-gray-600">Max: {Math.round(temp_max - 273.15)}°C</p>
                    <p className="text-lg text-gray-600">Min: {Math.round(temp_min - 273.15)}°C</p>
                </div>
            </div>

            {/* Additional Details */}
            <div className="grid grid-cols-2 gap-4 mb-6 text-gray-600">
                <div className="flex items-center space-x-2">
                    <WiHumidity size={30} className="text-blue-500" />
                    <p>Humidity: {humidity}%</p>
                </div>
                <div className="flex items-center space-x-2">
                    <WiStrongWind size={30} className="text-blue-500" />
                    <p>Wind: {speed} m/s</p>
                </div>
                <div className="flex items-center space-x-2">
                    <p className="text-lg">Visibility:</p>
                    <p>{(visibility / 1000).toFixed(1)} km</p>
                </div>
                <div className="flex items-center space-x-2">
                    <p className="text-lg">Pressure:</p>
                    <p>{pressure} hPa</p>
                </div>
            </div>

            {/* Sunrise and Sunset */}
            <div className="flex justify-between text-gray-600">
                <div className="flex flex-col items-center">
                    <WiSunrise size={30} className="text-yellow-500" />
                    <p className="text-sm">Sunrise</p>
                    <p className="text-lg">{formatTime(sunrise)}</p>
                </div>
                <div className="flex flex-col items-center">
                    <WiSunset size={30} className="text-red-500" />
                    <p className="text-sm">Sunset</p>
                    <p className="text-lg">{formatTime(sunset)}</p>
                </div>
            </div>
        </div>
    );
};

export default WeatherCard;
