import React, { useState } from 'react';
import { CiLight, CiLocationOn, CiMenuBurger, CiSearch } from 'react-icons/ci';
import { RxCross2 } from 'react-icons/rx';
import Sidenav from './Sidenav';
import { TiWeatherPartlySunny } from 'react-icons/ti';
import { MdMyLocation } from 'react-icons/md';
import { weatherApi } from '../weatherApi';
import { setdata, settheme } from '../App/slice';
import { useDispatch, useSelector } from 'react-redux';
import { IoMoonOutline } from 'react-icons/io5';
import toast from 'react-hot-toast';

const Nav = () => {
  const [nav, Setnav] = useState(true);
  const [query, setquery] = useState('');
  const dispatch = useDispatch();
  const { getWeatherbylocation, getWeather } = weatherApi();
  const [loading, setloading] = useState(false);

  const handlelocation = async () => {
    try {
      setloading(true);
      const loadingToast = toast.loading('Fetching weather data...');
      const result = await getWeatherbylocation();
      dispatch(setdata(result));
      toast.dismiss(loadingToast);
    } catch (error) {
      toast.error('Failed to fetch location-based weather data');
    } finally {
      setloading(false);
    }
  };

  const searchHandel = async (city) => {
    try {
      setloading(true);
      const loadingToast = toast.loading('Searching for weather...');
      const result = await getWeather(city);
      dispatch(setdata(result));
      toast.dismiss(loadingToast);
    } catch (error) {
      toast.error('Failed to search weather data');
    } finally {
      setloading(false);
    }
  };

  const handelkeypress = async (e) => {
    if (e.key === 'Enter') {
      try {
        setloading(true);
        const loadingToast = toast.loading('Searching for weather...');
        const result = await getWeather(query);
        dispatch(setdata(result));
        toast.dismiss(loadingToast);
      } catch (error) {
        toast.error('Failed to search weather data');
      } finally {
        setloading(false);
      }
    }
  };

  const data = useSelector((state) => state.data);
  const theme = useSelector((state) => state.theme.theme);

  const toggletheme = () => {
    dispatch(settheme(theme === 'light' ? 'dark' : 'light'));
  };

  return (
    <>
      <div className="flex justify-center items-center w-full">
        <div
          className={`flex items-center justify-center px-6 gap-x-8 md:gap-x-20 ${
            theme === 'light' ? 'bg-black text-white border-2 border-white shadow-md shadow-white' : 'bg-white text-black'
          } md:rounded-2xl h-auto w-[80%] min-w-[32rem] shadow-lg shadow-black py-4 mt-4`}
        >
          <button onClick={() => Setnav(!nav)}>
            {nav ? <CiMenuBurger size={25} /> : <RxCross2 size={25} />}
          </button>

          <div className="hidden md:flex">
            <TiWeatherPartlySunny size={35} />
          </div>

          <div
            className={`flex justify-start w-1/6 min-w-48 items-center border-2 gap-x-2 ${
              theme === 'light' ? 'border-white bg-black' : 'border-black bg-white'
            } rounded-md px-1 py-2`}
          >
            <input
              className={`outline-none rounded-md w-5/6 ${
                theme === 'light' ? 'bg-black text-white' : 'bg-white text-black'
              }`}
              type="text"
              onKeyPress={handelkeypress}
              onChange={(e) => setquery(e.target.value)}
              value={query}
            />
            <div>
              <MdMyLocation onClick={handlelocation} />
            </div>
            <button onClick={() => searchHandel(query)}>
              <CiSearch className="font-bold" />
            </button>
          </div>

          <div
            className={`flex items-center gap-x-1 px-1 py-2 border-2 rounded-lg ${
              theme === 'light' ? 'bg-black border-white text-white' : 'bg-white border-black text-black'
            }`}
            onClick={toggletheme}
          >
            {theme}
            {theme === 'light' ? <CiLight size={25} /> : <IoMoonOutline />}
          </div>
        </div>
      </div>

      <div className={!nav ? 'ease-in-out duration-[4000ms]' : 'fixed left-[-100%]'}>
        <Sidenav className={`${theme === 'light' ? 'bg-black text-white' : 'bg-white text-black'} font-bold`} />
      </div>
    </>
  );
};

export default Nav;
