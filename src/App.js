import React from "react";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home/Home";
import AboutUs from "./pages/About/AboutUs";
import ContactUs from "./pages/Contact/ContactUs";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";
import Book from "./pages/Book/Book";
import Loader from "./components/Loader/Loader";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="aboutus" element={<AboutUs />} />
                <Route path="book" element={<Book />} />
                <Route path="contactus" element={<ContactUs />} />
                <Route path="login" element={<Login />} />
                <Route path="register" element={<SignUp />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </>
      )}
    </>
  );
};

export default App;
