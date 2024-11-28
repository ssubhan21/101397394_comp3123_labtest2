import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import WeatherCard from './components/WeatherCard';
import { fetchWeather } from './services/weatherService';

const App = () => {
    const [weather, setWeather] = useState(null);

    const handleSearch = async (city) => {
        try {
            const data = await fetchWeather(city);
            setWeather(data);
        } catch (error) {
            alert('City not found!');
        }
    };

    return (
        <div className="bg-gradient-to-b from-blue-300 to-blue-100 min-h-screen flex flex-col items-center justify-center px-4 py-8">
            <h1 className="text-white text-5xl font-bold mb-8 drop-shadow-md">Weather Dashboard</h1>
            <SearchBar onSearch={handleSearch} />
            {weather && (
                <div className="fade-in mt-8">
                    <WeatherCard weather={weather} />
                </div>
            )}
        </div>
    );
};

export default App;
