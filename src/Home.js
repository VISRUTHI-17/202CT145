import React from "react";
import './Home.css';
import Pandiyan from "./Pandiyan";
import Tejas from "./Tejas";
import Shatabdi from "./Shatabdi";
import Vande from "./Vande";
import { Routes, Route, useNavigate } from 'react-router-dom';
const Home = () => {
    const navigate = useNavigate();
    const navigateToPandiyan = () => {
        navigate('/pandiyan');
    };
    const navigateToTejas = () => {
        navigate('/tejas');
    };
    const navigateToShatabdi = () => {
        navigate('/shatabdi');
    };
    const navigateToVande = () => {
        navigate('/vande');
    };

    return (
        <div className="home-main-div">
            <div className="head-div">
                <h1 className="train-schedule-name">Train schedule</h1>
                <div className="train-main-div">
                    <div className="train-div">
                        <Routes>
                            <Route path="/pandiyan" element={<Pandiyan />} />
                            <Route path="/tejas" element={<Tejas />} />
                            <Route path="/shatabdi" element={<Shatabdi />} />
                            <Route path="/vande" element={<Vande />} />

                        </Routes>
                        <h1>Pandiyan Express</h1>
                        <h2>Chennai to Madurai</h2>
                        <h3>Seat Availability: Available</h3>
                        <h4>Price:₹500</h4>
                        <button className="button" onClick={navigateToPandiyan}>View Details</button>
                    </div>
                    <div className="train-div">
                        <h1>Tejas Express</h1>
                        <h2>Mumbai to Delhi</h2>
                        <h3>Seat Availability: Not Available</h3>
                        <h4>Price:₹1000</h4>
                        <button className="button" onClick={navigateToTejas}>View Details</button>
                    </div>
                    <div className="train-div">
                        <h1>Shatabdi Express</h1>
                        <h2>Chennai to Delhi</h2>
                        <h3>Seat Availability: Not Available</h3>
                        <h4>Price:₹1000</h4>
                        <button className="button" onClick={navigateToShatabdi}>View Details</button>
                    </div>
                    <div className="train-div">
                        <h1>Vande Bharat Express</h1>
                        <h2>Bangalore to Hyderabad</h2>
                        <h3>Seat Availability: Not Available</h3>
                        <h4>Price:₹1000</h4>
                        <button className="button" onClick={navigateToVande}>View Details</button>
                    </div>
                </div>
            </div>


        </div>


    );

}


export default Home;