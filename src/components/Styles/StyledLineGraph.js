import styled from 'styled-components'

const StyledLineGraph = styled.div`
max-width: 50%;
min-width: 300px; 
height: auto:
margin: 40px auto;
margin-left: auto;
margin-right: auto; 
 @media (max-width: 900px) {
        max-width: 75%;
    }
@media (max-width: 500px) {
        max-width: 85%;
    }
`;

export default StyledLineGraph;
