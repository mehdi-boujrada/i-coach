import React from "react";
import Homepic from '../images/sigin.jpg';
import { Link, Outlet } from "react-router-dom";
// import "../../style/Home.css";
import "../style/Home.css"

export default function Home1() {
    

  return (
    <div className="home" style={{ backgroundImage: `url(${Homepic})` }}>
        <Outlet />
    </div>
  );
}