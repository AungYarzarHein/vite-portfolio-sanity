import React from 'react';
import "./myshare.css";
import thing from "../../assets/thing.svg";
import {client} from '../../client';
import { useState } from 'react';
import { useEffect } from 'react';
import imageUrlBuilder from '@sanity/image-url';

const MySharing = () => {
const [post,setPost] = useState({});
const [show,setshow] = useState(false);

const builder = imageUrlBuilder(client);

function urlFor(source) {
  return builder.image(source)
}


useEffect(()=>{
  client.fetch("*[_type=='mycontent']")
  .then((data) => {
     console.log(data[0].contentimage)
    setPost(data[0]);
    setshow(true);
  })
},[])


  return (
    <div className="contentContainer">
      <div className="contentImage">
      {
        show && <img src={urlFor(post.contentimage).url()} alt="headerimage" />
      }
      </div>
     {
      show && ( <div className="contentBody">
      <h3 className="contentHeader"> {post.contentheader} </h3>
      <p className="content">
        {post.content}
      </p>
    </div>)
     }
    </div>
  )
}

export default MySharing