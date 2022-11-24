import React from "react";
import img from "../images/logo.png";
import Friend from "./friend";
import Messages from "./Messages";
import { AiFillHome, AiOutlineSetting } from "react-icons/ai";
import { TiMessages } from "react-icons/ti";
import { BsFillCalendarDayFill } from "react-icons/bs";
import { CgDarkMode } from "react-icons/cg";
import { GoSignOut } from "react-icons/go";
import { GrAttachment } from "react-icons/gr";
import { HiOutlineEmojiHappy } from "react-icons/hi";
import { MdSend } from "react-icons/md";
import { IoIosNotifications } from "react-icons/io";
import { MdWifiCalling3, MdVideoCall, MdKeyboardVoice } from "react-icons/md";
import "./Chats.css";

function Chats() {
  const user ={name:"moiz",  image:require("../images/logo.png"),}
  const me ={name:"mubashir",  image:require("../images/aa.png") }
  return (
    <div className="Container">
      <div className="row">
        <div className="col-1 bg-Color">
          <div className="col-8 ot-Color">
            <div className="Logo">
              <center>
                <img src={img} alt="logo" className="logoSizing" />
                <div className="otherIcon">
                  <div className="icon">
                    <AiFillHome />
                  </div>
                  <div className="icon">
                    <TiMessages />
                  </div>
                  <div className="icon">
                    <BsFillCalendarDayFill />
                  </div>
                  <div className="icon">
                    <AiOutlineSetting />
                  </div>
                </div>
                <div className="downIcon">
                  <div className="icon">
                    <CgDarkMode />
                  </div>
                  <p className="icontxt">Dark Mode</p>
                  <div className="icon">
                    <GoSignOut />
                  </div>
                  <p className="icontxt">SignOut</p>
                </div>
              </center>
            </div>
          </div>
        </div>
        <div className="col-3 p-2 bg-Color">
          <div className="col-12 msg-Color">
            <div className="msgtop">
              <span className="Messagtxt">
                Messages <span className="badge">8</span>
              </span>
              <div className="searchBar">
                <input
                  type="text"
                  className="SearchTxt"
                  placeholder="Type to search"
                />
                <button className="searchBtn">
                  <i className="fas fa-search "></i>
                </button>
              </div>
            </div>

            <div className="chatBtn">
              <span className="chatBtnTxt Underline">All</span>
              <span className="chatBtnTxt">Archived</span>
              <span className="chatBtnTxt">Starred</span>
            </div>
            <Friend />
            <Friend />
            <Friend />
            <Friend />
            <Friend />
            <Friend />
          </div>
        </div>
        <div style={{ height: "auto" }} className="col-5 fullDisplay">
          <div className="col-12 msg-Color">
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                height: "100%",
              }}
              className="navBar"
            >
              <div className="innerNavElem">
                <div className="ImgName">
                  <img className="navprofile-image" src={img} alt="" />
                  <span className="userName">socket</span>
                  {/* <span className="status">Active</span> */}
                </div>
                <div className="icons">
                  <MdWifiCalling3 style={{ margin: "10px" }} />
                  <MdVideoCall />
                </div>
              </div>

              <div  
                style={{
                  height: "80%",
                  backgroundColor: "white",
                  overflowY: "auto",
                  paddingLeft:3,
                }}
              >
                {[
                  {  id:1, me: true, message: "Wallah" },
                  { id:2, me: false, message: "habibi" },
                  {  id:1, me: true, message: "Wallah" },
                  { id:2, me: false, message: "habibi" },
                  {  id:1, me: true, message: "Wallah" },
                  { id:2, me: false, message: "habibi" },
                  {  id:1, me: true, message: "Wallah" },
                  { id:2, me: false, message: "habibi" },
                  {  id:1, me: true, message: "Wallah" },
                  { id:2, me: false, message: "habibi" },
                  {  id:1, me: true, message: "Wallah" },
                  { id:2, me: false, message: "habibi" },
                  
                ].map((item, index) => (
                  <Messages message={item.message} user={item.me ? me : user} myMessage={item.me} />
                ))}
              </div>

              <div style={{ height: 70 }} className="input">
                <div className="recIcon">
                  <MdKeyboardVoice
                    style={{ fontSize: "20px", marginBottom: "6px" }}
                  />
                </div>
                <input
                  type="text"
                  placeholder="Type to Message..."
                  className="designinput"
                />
                <div className="othIcon">
                  <GrAttachment
                    style={{
                      fontSize: "15px",
                      marginRight: "10px",
                      marginBottom: "6px",
                    }}
                  />
                  <HiOutlineEmojiHappy
                    style={{
                      fontSize: "20px",
                      marginRight: "10px",
                      marginBottom: "6px",
                    }}
                  />
                </div>
                <span class="badge2">
                  <MdSend />
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-3 profileInfo">
          <div className="personalProfile">
            <IoIosNotifications className="NotiIcon" />
            <div className="personalImg">
              <img className="personal-profile-image" src={img} alt="" />
              <span className="userName">Mubashir</span>
            </div>
          </div>
          <div className="user-profile">
            <center>
              <div className="innerUserProfile">
                <div className="userDetail">
                  <img className="user-profile-image" src={img} alt="" />
                </div>
                <span className="userName">Socket</span>
                <br />
                <span className="status">Socket@gmsil.com</span>
                <br />
                <span className="status">+981 852346l</span>
              </div>
              <hr style={{ width: "80%" }} />
              <div className="mediBtn">
                <span className="mediBtns" style={{ padding: "10%" }}>
                  Media
                </span>
                <span className="mediBtns" style={{ padding: "10%" }}>
                  Links
                </span>
                <span className="mediBtns" style={{ padding: "10%" }}>
                  Docs
                </span>
                <hr style={{ width: "80%" }} />
                <span
                  className="blockBtn"
                  style={{ padding: "10%", fontSize: "12px" }}
                >
                  Block Socket
                </span>
                <span
                  className="blockBtn"
                  style={{ padding: "10%", fontSize: "12px" }}
                >
                  Repot Socket
                </span>
              </div>
            </center>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chats;
