import React, { useEffect } from 'react';
import "./home.css";
import {easeInOut, motion} from "framer-motion";
import profileImage from "../../assets/cani.svg";
import htmlIcon from "../../assets/html.svg"
import cssIcon from "../../assets/css.svg"
import JavascriptIcon from "../../assets/javascript.svg"
import sassIcon from "../../assets/sass.svg"
import nodeIcon from "../../assets/nodejs.svg"
import expressIcon from "../../assets/express.svg"
import mongoIcon from "../../assets/mongodb.svg"
import reactIcon from "../../assets/react.svg"
import reactNativeIcon from "../../assets/reactnative.svg"
import pythonIcon from "../../assets/python.svg";
import {client} from "../../client";


const Home = () => {
// console.log(import.meta.env.VITE_TOKEN)
// useEffect(()=>{
// client.fetch("*[_type == 'projectcard']")
// .then((data) =>{
//   console.log("Hello",data)
// })
// },[])

  const languages = [
    "MongoDb","Express","ReactJs","Nodejs"
  ];

  const projectInfoData = [
    {
      title:"Static Website",
      about:"I can build wth html,css,javascript, bootstrap, tailwindcss or sass. Sometimes I use Reactjs and for animation I use framer-motion.This framework is i like the most for animation."
    },
    {
      title:"Dynamic Website",
      about:"For Dynamic website I can build with Reactjs , Express , Nodejs , MongoDb or Mongoose . Mern Stack is my priority .For animation i use framer-motion."
    },
    {
      title:"Android App",
      about:"I can build Android app using React Native . For IOS I do not have property to debug . So Only for Android App I can build.I already build some android app."
    }
  ]

  return (
   <div className="homeContainer">
     <motion.div
     whileInView={{x:[-100,0],opacity:[0,1]}}
     transition={{duration:1}}
     className="homeTitle "
     >
        Hello , I am <span className='text3'>Yarzar</span>
     </motion.div >

     <motion.div 
     whileInView={{opacity:[0,1]}}
     transition={{duration:1,delay:.5}}
     className="homeProfileImage"
     >
      <div className="profileIconContainer">
        <div className="profileIconRight">
          <img src={htmlIcon} alt="html"   />
        </div>
        <div className="profileIconCenter">
        <img src={cssIcon} alt="css" />
        </div>
        <div className="profileIconCenter">
          <img src={JavascriptIcon} alt="javascript" />
        </div>
        <div className="profileIconRight">
          <img src={pythonIcon} alt="python" />
        </div>
      </div>
      
      <img src={profileImage} alt="profileImage" />
      <div className="profileIconContainer">
        <div className="profileIconLeft">
          <img src={mongoIcon} alt="mongodb" />
        </div>
        <div className="profileIconCenter">
          <img src={expressIcon} alt="expressjs" />
        </div>
        <div className="profileIconCenter">
          <img src={reactIcon} alt="reactjs" />
        </div>
        <div className="profileIconLeft">
        <img src={nodeIcon} alt="nodejs" />
        </div>
      </div>
     </motion.div>
    


     <motion.div
     whileInView={{opacity:[0,1]}}
     transition={{duration:1,delay:.5}}
     className="homeLanguage"
     >
      <div className="languageTitle">
         <span className='text1' >I Know </span><span className='text1' > pratice make a better </span><span className='text3' > Developer</span>
      </div>
      <div className="languageTitleOne text2">
        So I'm specializing to become MERN Stack Developer.
      </div>
        {languages.map((item,index) => {
          return (
            <motion.div
            whileHover={{scale:[1,0.9],backgroundColor:"#000"}}
            transition={{duration:.3,ease:easeInOut}}
            className="homeLanguageCard"
            key={index}
            >
            {item}
            </motion.div>
          )
        })}
     </motion.div>
     <div className="line"></div>
     <motion.div
     whileInView={{opacity:[0,1]}}
     transition={{duration:1,delay:.5}}
     className="homeProjectInfoContainer"
     >
        <div className="homeProjectInfoTitle">
          <span >I can buile </span><span className="text1"> <em>Static , Dynamic </em></span><span > website and also </span><span className="text1"> <em> App </em></span><span >for android using </span><span className="text1"><em>React Native</em></span>
        </div>
     </motion.div>

     <motion.div 
     whileInView={{opacity:[0,1]}}
     transition={{duration:1,delay:.5}}
     className="homeProjectsContainer">
        
        {
          projectInfoData.map((item,index) => {
            return (
              <div className="homeProjectCard" key={index} >
                <h3>{item.title}</h3>
                <p className="description">
                  {item.about}
                </p>
              </div>
            )
          })
        }
     </motion.div>

     <motion.div
     whileInView={{y:[60,0],opacity:[0,1]}}
     transition={{duration:.5,delay:.5}}
     className="homeBtns"
     >
      <span className="homeBtn">
        See All Project
      </span>
      <span className="homeBtnTran">
        Contact Me
      </span>
     </motion.div>
   </div>
  )
}

export default Home