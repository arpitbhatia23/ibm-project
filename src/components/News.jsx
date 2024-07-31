import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { FaNewspaper } from 'react-icons/fa';
import axios from 'axios';
import toast from 'react-hot-toast';

const WeatherNews = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const theme = useSelector((state) => state.theme.theme);

  useEffect(() => {
    const fetchWeatherNews = async () => {
      const loadingToast = toast.loading('Searching for news...');
      try {
        const response = await axios.get(
          `https://api.currentsapi.services/v1/search`, 
          {
            params: {
              apiKey: import.meta.env.VITE_NEWSKEY,
              keywords: 'weather',
              language: 'en'
            }
          }
        );
        setNews(response.data.news);
        toast.dismiss(loadingToast);
      } catch (error) {
        setError('Failed to fetch weather news.');
        toast.error('Failed to fetch weather news.');
        toast.dismiss(loadingToast);
      } finally {
        setLoading(false);
      }
    };

    fetchWeatherNews();
  }, []);

  if (loading) {
    return <p className="hidden">Loading news...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className={`p-4 ${theme === 'light' ? 'bg-black text-white' : 'bg-white text-black'} w-[70%] rounded-xl mt-8`}>
      <h2 className="text-2xl font-bold flex items-center">
        <FaNewspaper className="mr-2" /> News
      </h2>
      <div className="mt-4">
        {news.length > 0 ? (
          news.map((article, index) => (
            <div key={index} className="border-b-2 py-2">
              <h3 className="text-xl font-semibold">{article.title}</h3>
              <p>{article.description}</p>
              <a href={article.url} target="_blank" rel="noopener noreferrer" className="text-blue-500">
                Read more
              </a>
            </div>
          ))
        ) : (
          <p>No news available.</p>
        )}
      </div>
    </div>
  );
};

export default WeatherNews;
