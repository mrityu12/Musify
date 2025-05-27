import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Feature";
import HowItWorks from "./components/HowItWorks";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import CallToAction from "./components/CallToAction";
import Footer from "./components/Footer";
import './App.css';
import { SignIn } from "./pages/SignIn";
import { Login } from "./pages/Login";
import CreatePage from './pages/CreatePage';
import "./styles/global.css";
import "./styles/responsive.css";
import "./styles/animations.css";
import "./styles/effects.css";

export function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <Features />
              <HowItWorks />
              <Pricing />
              <Testimonials />
              <FAQ />
              <CallToAction />
            </>
          } />
          <Route path="/create" element={<CreatePage />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
