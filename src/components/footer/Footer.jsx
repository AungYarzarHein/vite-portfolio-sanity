import React from 'react';
import {motion} from "framer-motion";
import "./footer.css";
import {FaFacebook,FaTwitter,FaInstagram,FaLinkedinIn,FaWhatsapp,FaBitcoin,FaCoffee,FaPhone,FaAddressCard,FaSeedling} from "react-icons/fa";
import {MdAnchor,MdInput,MdSend,MdWork} from "react-icons/md";
import Me from "../../assets/man2.jpg";
import { useNavigate } from 'react-router-dom';


const Footer = () => {
  const navigate = useNavigate();

  return (
   <motion.div 
   whileInView={{opacity:[0,1]}}
   transition={{duration:1,delay:.5}}
   className="footerContainer">
    <div className="footerLine"></div>
     <div className="footerSocialIcons">
       <FaFacebook className='footerSocialIcon' />
       <FaTwitter className='footerSocialIcon' />
       <FaInstagram className='footerSocialIcon' />
       <FaLinkedinIn className='footerSocialIcon' />
       <FaWhatsapp className='footerSocialIcon' />
     </div>

     <div className="footerCardContainer">
      <div className="footerCard">
        <span className="footerCardHeader">My Priority For Website</span>
        <ul>
        <li><FaCoffee className='footerIcon' /> Fast and Nice UI Design</li>
        <li><FaCoffee className='footerIcon' /> Avoid complex Animation </li>
        <li><FaCoffee className='footerIcon' /> flexiable and Affectively work well </li>
       </ul>
      </div>
      <div className="footerCard">
      <span className="footerCardHeader">How To Contact To Me?</span>
       <ul>
        <li>
        <FaBitcoin className='footerIcon' /> You Can Contact Me From Social Media
        </li>
        <li><FaBitcoin className='footerIcon' /> Or Via gmail - <em> aungyarzarhein7@gmail.com</em> </li>
        <li><FaBitcoin className='footerIcon' /> Contact or suggest me directly by clicking <span className="fbtn text1" onClick={()=>navigate("suggestion")} >Contact</span> </li>
       </ul>
      </div>
      <div className="footerCard">
         <div className="footerHeadLine">
         <div className='footerHeadlineTitle' >Aung Yarzar Hein</div>
         <img src={Me} alt="my photo" />
         </div>
         <span className='footerAddress' ><FaPhone className='footerIcon' />  +959429425523</span>
         <span className='footerAddress' ><MdSend className='footerIcon' />  aungyarzarhein7@gmail.com</span>
         <span className='footerAddress' ><MdWork className='footerIcon' />  SkyCloud Team , Yangon , Myanmar</span>
      </div>

      <div className="footerCopyRight">
        @copyright all right own by me
      </div>
     </div>

   </motion.div>
  )
}

export default Footer