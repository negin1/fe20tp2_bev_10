import styled from 'styled-components'

export const StyledPageIntro = styled.div`
width: 75%;
padding-top: 2em;
text-align: center;
margin-left: auto;
margin-right: auto;
@media (max-width: 500px) {
        max-width: 85%;
    }

h2 {
    font-weight: bold;
}

p {
    font-weight: bold;
}
`;

export const StyledSelectBtn = styled.button`
padding: 0.5em;
  margin:  0 auto;
  color: white;
  background: black;
  border: none;
  border-radius: 20px;
  width: 90px;
  height: 30px;

`;

