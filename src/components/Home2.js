import React from "react";
import "../style/Home.css"
import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';

export default function Home2() {
    let navigate = useNavigate();

  return (
    <>
        <div className="headerContainer">
        <h1> I-COACH FOR COACHING SERVICES </h1>
        <p> CHOOSE YOUR COACH AND START GETTING IT RIGHT </p>
        <button color="inherit" onClick={() => {navigate("/signup");}}>SIGN UP</button>
        
      </div>
      <Button style={{ maxWidth: "1000px", marginBlock:"20px", marginLeft:"500px" }} variant="contained" size="large" color="error" href="/posts">SEARCH YOUR COURSE </Button>
      </>
  );
}