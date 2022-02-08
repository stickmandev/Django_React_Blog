import React from "react";
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from "./components/pages/Home/Home";
import About from "./components/pages/Home/about";
import MainLayout from "./components/layouts/mainlayout";
import FooterLayout from "./components/layouts/footerlayout";
import Testpage from "./components/pages/Home/test";
import BlogDetails from "./components/pages/SingleBlogPage/blogDetails";

const Router = () => {
    return (
        <>
            <MainLayout />
                
            <BrowserRouter>
                <Routes>
                    <Route path='/' exact element={<Home />} />
                    <Route path='/:slug' exact element={<BlogDetails />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/test' element={<Testpage />} />
                </Routes>
            </BrowserRouter>
            
            <FooterLayout />      
        </>
    )   

};

export default Router; 