import styled from 'styled-components'

export const HeaderArea = styled.div`
  background-color: #FFF;
  height: 60px;
  border-bottom: 1px solid #CCC;

  .container{
    max-width: 1000px;
    margin: auto;
    display: flex;
  }

  a{
    text-decoration: none;
  }

  .logo{
    flex: 1;
    display: flex;
    align-items: center;
    height: 60px;

    .logo-1,
    .logo-2,
    .logo-3{
      font-size: 2rem;
      font-weight: 700;
    }
    .logo-1 {color: #FF0000;}
    .logo-2 {color: #00FF00;}
    .logo-3 {color: #0000FF;}
  }

  nav{
    padding: 10px 0;

    ul, li{
      margin: 0;
      padding: 0;
      list-style: none;
    }
    ul{
      display: flex;
      align-items: center;  
      height: 40px;
    }
    li{
      margin: 0 20px;

      a, button{
        border: 0;
        background: none;
        cursor: pointer;
        color: #000;
        font-size: 1rem;
        transition: .3s;
        outline: 0;

        &:hover{
          color: #999;
        }

        &.button{
          background-color: #FF8100;
          border-radius: 4px;
          color: #FFF;
          padding: 5px 10px;
        }

        &.button:hover{
          background-color: #E57706;
        }
      }
    }
  }

  @media (max-width: 500px){
    .logo{
      padding: 10px;
  
      .logo-1,
      .logo-2,
      .logo-3{
        font-size: 1.5rem;
      }
    }
    
    nav{
      
      li{
        margin: 0 10px;
  
        a, button{
          font-size: .8rem;

          &.button{
            padding: 5px 5px;
            font-size: .7rem;
          }
  
          &.button:hover{
            background-color: #E57706;
          }
        }
      }
  
  
  }  
`;