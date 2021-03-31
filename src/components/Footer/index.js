import React from 'react'
import styled from 'styled-components'
import bg_img from '../../img/bg_img.png';

const StyledDiv = styled.div`
  color: white; 
  position: absolute;
  bottom: 0;
  width: 100%;
  font-family: 'Montserrat', sans-serif;
  background-image: url(${bg_img});
  background-size: cover;
  background-repeat: no-repeat;

  @media (max-width: 500px) {
         bottom: 75px;
    }

  > div {
      padding: 14em 4em 2em 4em;  
      display: flex; 
      flex-wrap: nowrap;
      justify-content: left; 

        @media (max-width: 1400px) {
        flex-wrap: wrap-reverse;
        padding: 10em 3em 2em 3em;
    }

       @media (max-width: 1000px) {
        flex-wrap: wrap-reverse; 
        padding: 8em 3em 2em 3em;
    }

        @media (max-width: 700px) {
        flex-wrap: wrap-reverse;
        padding: 6em 3em 2em 3em;
    }

    p {
        line-height: 0.9;
    }

    a {
        color: white; 
        text-decoration: none; 
        &:hover {
        cursor: pointer;
        color: lightgray;
        }
    }
  } 
  `;

const StyledDiv2 = styled.div`
margin-right: 4em; 
`;


const Footer = (props) => {
    return (
        <StyledDiv>
            <div>
                <StyledDiv2>
                    <p>Alexander Alazar</p>
                    <p><a href="http://annap.surge.sh/">Anna Pettersson</a></p>
                    <p>Ivan Olowo</p>
                    <p>Negin Jalalian</p>
                </StyledDiv2>
                <div>
                    <p><a href="https://github.com/negin1/fe20tp2_bev_10">→ View code @GitHub</a></p>
                    <p><a href="https://trello.com/b/NEYYR2eC/group-ten">→ Agile workflow @Trello</a></p>
                </div>
            </div>
        </StyledDiv >
    )
}

export default Footer