import React from "react";
import "./Chats.css";
function Messages(props) {
  return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: props.myMessage ? "flex-start" : "flex-end",
          justifyContent: "center",
        }}
      >
        
        <div style={{ fontSize: 15, paddingRight: 200 ,fontWeight:700,  }}>{props.user.name}</div>
       
        <div style={{display:"flex"}}>
        <img
          src={props.user.image}
          alt="logo"
          style={{ width: 30, height: "30px", borderRadius: "50%",paddingTop: 10 }}
        />
        <div style={{
            width: 200,
            paddingTop: 10,
            marginTop: 5,
            border: "none",
            paddingBottom: 0,
            backgroundColor: "#e3f0f8",
            borderRadius: 5,
            paddingLeft: 5,
          }}>

        {props.message}
        </div>  
          
        </div>
      </div>
  );
}

export default Messages;
