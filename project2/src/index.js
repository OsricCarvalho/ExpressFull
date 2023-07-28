import {BrowserRouter,Routes, Route, Link} from "react-router-dom";
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Services from './Services';
import Team from './Team';
import HomePage from './HomePage';
import Aboutus from "./Aboutus";
import Footer from "./Footer";
import DataFromWeb from "./DataFromWeb";
import DataFromWeb2 from "./DataFromWeb2";
import Comment from "./Comment";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
   <h1><center>Welcome to Nationwide</center></h1>
   <BrowserRouter>
    <nav>
      <ul>
        <li><Link to="/aboutus">About Us</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/myteam">Team</Link></li>
        <li><Link to="/comments">Comments</Link></li>
        <li><Link to="/commentsfilter">Comments Filter </Link></li>
        <li><Link to="/commentsfilterid">Comments Filter By ID</Link></li>
        
      </ul>
    </nav>
  
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/myteam" element={<Team/>}/>
      <Route path="/aboutus" element={<Aboutus/>}/>
      <Route path="/services" element={<Services/>}/>
      <Route path="/Comments" element={<DataFromWeb/>}/>
      <Route path="/commentsfilter" element={<DataFromWeb2/>}/>
      <Route path="/commentsfilterid" element={<Comment/>}/>
     
    </Routes>
    
   
  <Footer/>
 
   </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
