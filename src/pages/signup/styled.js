import styled from 'styled-components'

export const PageArea = styled.div`

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




  @media (max-width: 390px){
    form{
      padding: 0;
    }
  }
}
`;
