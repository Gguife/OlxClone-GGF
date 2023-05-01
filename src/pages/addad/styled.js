import styled from 'styled-components'

export const PageArea = styled.div`
padding: 5px;
form{
  background-color: #fff;
  border-radius: 10px;
  padding: 10px;
  box-shadow: 0 0 3px #999; 

  .area{
    display: flex;
    align-items: center;
    padding: 15px;

    .area-title{
      width: 150px;
      font-weight: 700;
      font-size: .9rem;
    }
    .area-input{
      flex: 1;

      input{
        font-size: .8rem;
        padding: 5px;
        border: none;
        border-bottom: 1px solid #aaa;
        border-radius: 3px;
        outline: 0;
        transition: all ease .4s;
                 
          &:focus{
            border-bottom: 1px solid #000;
            color: #333;
          }
        }
      }

      #title, select, textarea{
        width: 100%;
      }

      select{
        font-size: .8rem;
        padding: 5px;
        border: none;
        border-bottom: 1px solid #aaa;
        border-radius: 3px;
        outline: 0;
        transition: all ease .4s;
                 
          &:focus{
            border-bottom: 1px solid #000;
            color: #333;
          }
      }

      textarea{
        max-height: 150px;
        resize: none;
        border-radius: 4px;
        padding: 10px;
      }

      .area-button{
        width: 100%;
        display: flex;
        justify-content: end;
        
        button{
          background-color: #0089FF;
          border: 0;
          cursor: pointer;
          padding: 10px 18px;
          border-radius: 5px;
          outline: none;
          color: #FFF;
          font-size: .9rem;
          transition: .5s;
  
            &:hover{
              background-color: #006FCE;
          }
        }  
      }
    }
  }
  
  @media (max-width: 500px){
    form{
      margin: 5px;
    }
    .area{
      input{
        width: 100%;  
      }
      .area-title{
        max-width: 100px;
      }
    }
  }
  @media (max-width: 375px){
    

    form{
      margin: 5px;
    }
    .area{
      input{
        width: 100%;
      }
      .area-title{
        max-width: 100px;
      }
      button{
        height: 30px;
      }
    }
  }
}
`;

export const PageTitle = styled.div`

font-size: 2rem; 
font-weight: bold;
padding: 10px;

  @media (max-width: 500px){
    font-size: 1rem;
    font-weight: bold;
    padding: 5px;
  }
  @media (max-width: 400px){
    display: none;
  }
`;

