import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { Provider } from 'react-redux';
import { store } from './App/store.js';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Detailforcast from './components/Detailforcast.jsx';
import Hourlyforcast from './components/Hourlyforcast.jsx';
import FiveDayforecast from './components/FiveDayforecast.jsx';
import Dashboard from './components/Dashboard.jsx';
import Weathermap from './components/Weathermap.jsx';
import WeatherNews from './components/News.jsx';

// Define the router with corrected routing configuration
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
     
           {
                path: "/",
                element: <Dashboard/>,
              },
              {
                path:"/weathermap",
                element:<Weathermap/>
              },{
                path:"/weathernews",
                element:<WeatherNews/>
              }
            ],
          },
        ],
      
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </Provider>
);
