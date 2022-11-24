import React from 'react'
import { BsStar } from 'react-icons/bs';
import img from '../images/logo.png'
const Friend = () => {
  return (
    <div className="friend ">
      <img className="profile-image" src={img} alt="" />
        <div className="text">
          <h5 className="contPer">socket</h5>
            <p className="text-muted">hello</p>
        </div>
        <div>
      <span className="time text-muted small">13:21</span>
      <span ><BsStar className="starIcon"/></span>
        </div>
    </div>
  )
}

export default Friend