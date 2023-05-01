import styled from 'styled-components'

export const NotFoundArea = styled.div`
  height: calc(100vh - 160px);  

  .container{
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  
    h1{
      font-size: 5vh;
    }

    span{
      font-size: .8rem;
    }

    a{
      text-decoration: none;
      background-color: #FF8100;
      margin: 30px 0;
      padding: 20px 8px;
      color: #FFF;
      border-radius: 5px; 
      transition: .4s;

      &:hover{
        opacity: .7;
      }
    
    }
  }
`;