import React from 'react'
import styled from 'styled-components'

const StyledDiv = styled.div`
  background-color: black;
  color: white; 
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 18rem;
  margin-top: 3em; 

  div {
      padding: 2em 4em 0em 4em; 
  }
  
    a {
        color: white; 
        text-decoration: none; 
    } 

    p:nth-of-type(3) {
        padding-top: 1rem; 
    }

  `;

const Footer = (props) => {
    return (
        <StyledDiv>
            <div>
                <p><a href="https://github.com/negin1/fe20tp2_bev_10">→ View project code @GitHub</a></p>
                <p><a href="https://trello.com/b/NEYYR2eC/group-ten">→ View agile project process @Trello</a></p>
                <p>Alexander Alazar</p>
                <p><a href="http://annap.surge.sh/" >Anna Pettersson</a></p>
                <p>Ivan Olowo</p>
                <p>Negin Jalalian</p>
            </div>
        </StyledDiv>
    )
}

export default Footer