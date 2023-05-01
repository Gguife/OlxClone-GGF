import styled from 'styled-components'

export const Item = styled.div`
  a{
    display: block;
    border: 1px solid #FFF;
    margin: 10px;
    text-decoration: none;
    padding: 10px;
    border-radius: 5px;
    background-color: #FFF;
    transition: .3s;

    &:hover{
      border: 1px solid #CCC;
      background-color: #DDD;
    }
    
    .item-image img{
      width: 100%;
      border-radius: 5px;
    }

    .item-name{
      color: #000;
      font-weight: 700;
    }
    .item-price{
      color: #999;
      font-size: .8rem;
    }
  }  
`;