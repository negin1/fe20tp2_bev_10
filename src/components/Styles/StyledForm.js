import styled from 'styled-components';


const StyledForm = styled.div`
  display:flex;
  flex-direction:column;
  align-items: center;
  
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
      padding: 1em;
      margin: 1em 4em ;
      border: .5px solid gray;
      border-radius: 10px;
          outline: none;

           @media (max-width: 1070px) {
         margin: 1em
        }
      }

      button{
      display: block;
      margin: 20px auto;
      color: white;
      background: black;
      border-radius: 20px;
      width: 120px;
      height: 40px;
      }
      
      form{
        margin: 0 auto;
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