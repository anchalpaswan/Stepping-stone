import React, { useEffect } from 'react'
import styled from "styled-components"
import Logo from "../../images/headerLogoGREY.svg"
export default function Contact({contacts,currentUser}) {

    const [currentUserName, setCurrentUserName] = useState();
    const [currentUserImage , setCurrentUserImage] = useState();
    const [currentSelected,setCurrentSelected] = useState();

    useEffect(() =>{
        if(currentUser){
            setCurrentUserImage(currentUser.avatarImage)
            setCurrentUserName(currentUser.username)
        }
    },[currentUser]);

    const changeCurrentChat = (index, contact)=>{
        return (
            <>
                {currentUserImage && currentUserName &&(
                    <Container>
                        <div className="brand">
                            <img src={logo} alt="" />
                            <h3>Stepping Stone</h3>
                        </div>
                    </Container>
                )}
            </>
        )
    }
  return (
    <>

        

    </>
  )
}
