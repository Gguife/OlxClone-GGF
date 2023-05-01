import styled from 'styled-components'

export const SearchArea = styled.div`
  background-color: #DDD; 
  border-bottom: 1px solid #CCC; 
  padding: 20px;

  .searchBox{
    background-color: #9bb83c;
    padding: 20px 15px;
    border-radius: 5px;
    box-shadow: 1px 1px 1px 0.3px rgba(0, 0, 0, 0.2); 
    display: flex;

    form{
      flex: 1;
      display: flex;

      input, select{
        height: 40px;
        border: 0;
        border-radius: 5px;
        outline: 0;
        font-size: 15px;
        color: #000;
        margin-right: 20px;
      }

      input{
        flex: 1;
        padding: 0 10px;
      }

      select{
        width: 100px;
        font-size: 14px;
      }

      button{
        display: flex;
        align-items: center;
        background-color: #49aeef;
        font-size: .8rem;
        border: 0;
        border-radius: 5px;
        color: #FFF;
        height: 40px;
        padding: 0 20px;
        cursor: pointer;
        gap: 5px;
        transition: .4s;
        
        &:hover{
          opacity: .8;
        }

        .icon-search{
          font-size: 1.2rem;
        }
      }
    }
  }

  .category-list{
    display: flex;
    flex-wrap: wrap;
    margin-top: 20px;

    .category-item{
      width: 25%;
      display: flex;
      flex-direction: column;
      align-items: center;
      color: #000;
      text-decoration: none;
      height: 50px;
      margin-bottom: 10px;
      
      &:hover{
        color: #999;
      }

      img{
        width: 45px;
        height: 45px;
      }

    }
  }

  @media (max-width: 547px){
    select{
      max-width: 30px;
    }
    input{
      width: 60%;
    }
    button{
      width: 30%;
    }
  }

  @media (max-width: 450px){
    input::placeholder{
      font-size: 11px;
    }
    button{
      font-size: 10px;
      width: 35%;
    }
  }
`;

export const PageContainer = styled.div`
  margin: auto;
  max-width: 1000px;
`;

export const PageArea = styled.div`
  margin: 10px 0;
  
  p{
    padding: 10px; 
  }
  h2{
    font-size: 1.3rem;
  }
  .list{
    display: flex;
    flex-wrap: wrap;
    .aditem{
      width: 25%;
    }
  }
  .seeAllLink{
    color: #000;
    text-decoration: none;
    font-weight: 700;
    display: inline-block;
    margin: 20px 0;
  }

  @media (max-width: 450px){
    h2, .seeAllLink{
      font-size: .8rem;
      padding: 10px;
    }
    .list{
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      padding: 10px;
      .aditem{
        width: 100%
      }
    }
    p{
      font-size: .8rem;
    }
  }
`;
