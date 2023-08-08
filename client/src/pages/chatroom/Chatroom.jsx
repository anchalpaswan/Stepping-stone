// import SlideBar from "../../components/slidebar/SlideBar";
import "./chatroom.css"
import styled from "styled-components"
import React ,{useState,useEffect}from 'react'
import {useNavigate} from 'react-router-dom';
import axios from 'axios'

export default function Chatroom() {
  const navigate=useNavigate();
  const [contacts,setContacts] =useState([]);
  const [currentUser,setCurrentUser] =useState(undefined);

  useEffect(async()=>{
    
    if(!localStorage.getItem("chat-app-user")){
      navigate("/login");
     }else{
        setCurrentUser(await JSON.parse(localStorage.getItem("chat-app-user")));
    }
  },[]);
  return (

    <>
      <Container>
        <div className="container">

        </div>
      </Container>
    </>
  )
}


const Container = styled.div`
  height:100vh;
  widht:100vw;
  display:flex;
  flex-direction:column;
  justify-content:center;
  gap:1rem;
  align-items:center;
  background-color:#131324;
    .container{
      height:85vh;
      widht:85vw;
      background-color:#00000076;
      display:flex;
      grid-template-column:25% 75%;
      @media screen and (min-width:720px )and (max-width:1080px){
        grid-template-column:35% 65%;

      }
    }



`