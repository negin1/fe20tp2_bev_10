import styled from 'styled-components'

export const StyledPageIntro = styled.div`
  width: 65%;
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
`

export const StyledSelectBtn = styled.button`
  color: white;
  background: black;
  border: none;
  border-radius: 20px;
  width: 90px;
  height: 30px;
  &:hover {
    cursor: pointer;
    background: darkgray;
  }
`

export const StyledDivSelectBtn = styled.div`
  width: 75%;
  display: flex;
  justify-content: flex-end;

  @media (max-width: 1000px) {
    width: 88%;
  }

  @media (max-width: 500px) {
    width: 93%;
  }
`
