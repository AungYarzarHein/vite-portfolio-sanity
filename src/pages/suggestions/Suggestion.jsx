import React from 'react';
import "./suggestion.css";
import {motion} from "framer-motion";
import {FaUserAlt,FaRegAddressCard,FaPhoneAlt,FaStaylinked} from "react-icons/fa";

const Suggestion = () => {
  return (
    <div className="contactContainer">
       <motion.div
       whileInView={{scale:[0,1]}}
       transition={{duration:.5}}
       className="contactHeaderTitle" >
            Hi There! Have a good day.
       </motion.div>

       <motion.div
       whileInView={{opacity:[0,1]}}
       transition={{duration:1,delay:.5}}
       className="inputContainer" >

        <div className="inputItem">
          <label htmlFor="name"><FaUserAlt className='inputIcon' /> Name</label>
          <input type="text" id='name' />
        </div>

        <div className="inputItem">
          <label htmlFor="email"> <FaStaylinked className='inputIcon' /> Email</label>
          <input type="email" id='email' />
        </div>

        <div className="inputItem">
          <label htmlFor="phone"><FaPhoneAlt className='inputIcon' /> Phone Number</label>
          <input type="number" id='phone' />
        </div>

        <div className="inputItem">
          <label htmlFor="address"><FaRegAddressCard className='inputIcon' /> Address to contact</label>
          <input type="text" id="address" />
        </div>

        <div className="inputItem">
          <textarea name="suggestion" id="" cols="30" rows="10"></textarea>
        </div>

        <div className="submitItem">
           <button className="inputBtn"> Send </button>
        </div>

       </motion.div>

    </div>
  )
}

export default Suggestion