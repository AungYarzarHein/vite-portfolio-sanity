import React from 'react';
import { useState } from 'react';
import  {motion} from "framer-motion";
import "./projects.css";
import thing from "../../assets/thing.svg";
import { client } from '../../client';
import imageUrlBuilder from '@sanity/image-url';
import { useEffect } from 'react';

const Projects = () => {
  const [projectInfo,setProjectInfo] = useState("Website");
  const [projectData,setProjectData] = useState([]);

  useEffect(()=>{
    client.fetch("*[_type=='projectcard']")
    .then(data=>{
      setProjectData(data);
      console.log(data[0]);
    })
  },[])

const builder = imageUrlBuilder(client);

function urlFor(source) {
  return builder.image(source)
}

  const onClickHandler = (info) => {
    setProjectInfo(info)
  }
  return (
    <div className="projectsContainer">
      <div className="projectTypeHeader"> 
        <h2 className="projectHeader"> {projectInfo} Development </h2>
        <div className="projectTypeBtns">
          <button className="projectTypeBtn"  onClick={(e)=>onClickHandler("Website")}  > Website </button>
          <button className="projectTypeBtn" onClick={(e)=>onClickHandler("App")}  > App </button>
        </div>
      </div>

      <div className="allProjectContainer">
        {
          projectData.length ? projectData.map((item,index) => {
            return(
              <motion.div 
              whileInView={{opacity:[0,1]}}
              transition={{duration:1}}
              className="projectCard" key={index} >
                <span className="projectCardHeader"> {item.header} </span>
                <div className="projectImageContainer">
                   <img src={urlFor(item.siteimage).url()} alt="siteimage" className='imager' />
                   <div className="projectCardInfo">
                    {
                      item.createWith.map((info,index)=>{
                        return(
                          <span key={index} > {info} </span>
                        )
                      })
                    }
                   </div>
                </div>
                <div className="projectTypeBtns">
                  <span className="projectCardBtn">Website Link</span>
                  <span className="projectCardBtn">Github Repo</span>
                </div>
              </motion.div>
            )
          }) : <div className="loading"> loading... </div>
        }
      </div>

    </div>
  )
}

export default Projects