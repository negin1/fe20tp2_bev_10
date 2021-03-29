import styled from 'styled-components';


const StyledForm = styled.div`
  display:flex;
  flex-direction:column;
  align-items: center;
  justify-content: center;
  padding-top:130px;

  > div{
    display: block;
    width: 300px;
    justify-content: center;
    padding: 50px 50px;
    margin-bottom:40px;
    border-radius: 30px;
    background: white; 
        @media (max-width: 900px) {
            width: 200px;
        }
    }
      
      h1{
      padding-bottom:40px;
      font-family: Montserrat;
      text-align: center; 
    }

      h2{
        font-size:18px;
        font-family: Montserrat;
        padding-bottom:18px;
        text-align: center; 
      }

      input{
      justify-items: center;
      padding: 1em;
      margin: 1em ;
      border: .5px solid gray;
      border-radius: 10px;
      }

      button{
      display: block;
      padding: 0.5em;
      margin:  0 auto;
      color: white;
      background: black;
      border: none;
      border-radius: 20px;
      width: 120px;
      height: 40px;
      }

      .error{
        text-align: center;
        font-family: Montserrat;
        padding-top: 10px;
      }

      .label {
      display:block;
      margin-top:5px;
      margin-left: 15px;
          }
    `;
  export default StyledForm;