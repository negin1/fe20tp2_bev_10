import styled from 'styled-components'

const StyledLineGraph = styled.div`
max-width: 50%;
min-width: 300px; 
height: auto;
margin: 2em auto;  
background: white; 
padding-top: 1em;
padding-bottom: 1em;  
 @media (max-width: 1000px) {
        max-width: 75%;
        height: 40vh;
    }
@media (max-width: 500px) {
        max-width: 85%;
        height: 40vh;
    }
`;

export default StyledLineGraph;
