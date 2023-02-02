import React from 'react'
import "./header.css";
import { useNavigate } from 'react-router-dom';
import {FaBan, FaBars, FaSpeakap,FaStackExchange, FaThumbtack,FaBookOpen,FaCode,FaTimes,FaAddressCard} from "react-icons/fa";
import { useState } from 'react';

const Header = () => {
  const navigate = useNavigate();
  const [mobileShow,setMobileShow] = useState(false);
  const onClickHandler = (routeName) => {
    setMobileShow(false);
    navigate(routeName);
  }
  
  return (
    <div className="headerContainer">
      <div className="headerTitle" onClick={()=>navigate("/")}  >
        Aung Yarzar Hein
      </div>
      <div className="menuBarIcon">
        <FaBars className='menuIcon' onClick={()=>setMobileShow(true)} />
      </div>
      
      <div className="headerMenuBar">
        {/* <span className="headerMenuBtn" onClick={()=>navigate("about")} > About </span> */}
        <span className="headerMenuBtn" onClick={()=>navigate("projects")}  > Projects </span>
        <span className="headerMenuBtn" onClick={()=>navigate("mysharing")}  > Contents </span>
        <span className="headerMenuBtn" onClick={()=>navigate("suggestion")}  > Contact Me </span>
      </div>

      <div className={mobileShow ? "mobileMenuBar show ":"mobileMenuBar"}>
        <div className="mobileCloseBtn" onClick={()=>setMobileShow(false)} >
          <FaTimes  />
        </div>
        {/* <span className="mobileHeaderMenuBtn" onClick={()=>onClickHandler("about")} ><FaThumbtack className='mobileMenuIcon' /> About </span> */}
        <span className="mobileHeaderMenuBtn" onClick={()=>onClickHandler("projects")}  ><FaCode className='mobileMenuIcon' /> Projects </span>
        <span className="mobileHeaderMenuBtn" onClick={()=>onClickHandler("mysharing")}  ><FaBookOpen className='mobileMenuIcon' /> Contents </span>
        <span className="mobileHeaderMenuBtn" onClick={()=>onClickHandler("suggestion")}  ><FaAddressCard className='mobileMenuIcon' /> Contact Me </span>
      </div>
    
    </div>
  )
}

export default Header