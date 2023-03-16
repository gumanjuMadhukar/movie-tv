import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from '../Components/Footer/footer';
import LoginForm from '../Components/form/Login/loginform';
import RegisterForm from '../Components/form/Register/registerform';
import Header from '../Components/Header/header';
import About from '../Container/About/about';
import Details from '../Container/Details/details';
import Home from '../Container/Home/home';
import Movies from '../Container/Movies/movies';
import TvShows from '../Container/TvShows/tvShows';

const Router = () => {
  return (
    <div>
        <BrowserRouter>
        <Header/>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/about" element={<About/>} />
                <Route path="/movies" element={<Movies/>} />
                <Route path="/tvShows" element={<TvShows/>} />
                <Route path="/login" element={<LoginForm/>} />
                <Route path="/register" element={<RegisterForm/>} />

                <Route path="/details/:movieid/:mediatype" element={<Details/>} />



            </Routes>
            <Footer/>
        </BrowserRouter>
    </div>
  )
}

export default Router;