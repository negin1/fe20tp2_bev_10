import styled from 'styled-components'

const StyledLineGraph = styled.div`
max-width: 50%;
min-width: 300px; 
height: 45vh;
margin: 2em auto;  
background: white; 
padding-top: 1em;
padding-bottom: 1em;  
box-shadow:5px 5px 5px 5px black;
 @media (max-width: 1000px) {
        max-width: 75%;
        height: 50vh;
    }
@media (max-width: 500px) {
        max-width: 85%;
        height: 60vh;
    }
`;


export default StyledLineGraph;
