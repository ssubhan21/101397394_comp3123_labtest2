import React, { useState } from 'react';
import SearchBar from './components/searchbar';
import WeatherCard from './components/card';
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
        <div className="bg-gradient-to-b from-blue-300 to-blue-100 min-h-screen flex flex-col items-center px-4 py-8">
            {/* Header at the top */}
            <h1 className="text-white text-5xl font-bold mt-4 mb-8 drop-shadow-md">Dashboard Weather</h1>

            {/* Search Bar below the header */}
            <SearchBar onSearch={handleSearch} />
            
            {/* card appears below search bar */}
            {weather && (
                <div className="fade-in mt-8">
                    <WeatherCard weather={weather} />
                </div>
            )}
        </div>
    );
};

export default App;
