import styled from 'styled-components'

export const PageContainer = styled.div`
  margin: auto;
  max-width: 1000px;
`;

export const PageArea = styled.div`
  display: flex;
  margin-top: 20px;

  .left-side{
    max-width: 250px;
    margin-right: 10px;

    .filter-name{
      margin-top: 10px;
    }
    input, select{
      width: 100%;
      height: 25px;
      border: 2px solid #9BB83C;
      border-radius: 5px;
      outline: 0;
      padding: 10px;
      font-size: 15px;
    }
    input::placeholder{
      font-size: .8rem;
      color: #999;
    }

    ul, li{
      list-style: none;
    }
    .category-item{
      display: flex;
      align-items: center;
      padding: 10px;
      border-radius: 5px;
      transition: .3s;
      cursor: pointer;

      img{
        width: 25px;
        height: 25px;
        margin-right: 5px;
      }
      span{
        font-size: .9rem;
      }
    }

    .category-item:hover,
    .category-item.active{
      background-color: #9BB83C;
      color: #FFF;
    }
  }
  .right-side{
    flex: 1;

    h2{
      margin-top: 0;
      font-size: .8rem;
    }

    .list-warning{
      padding: 30px;
      text-align: center;
    }

    .list{
      display: flex;
      flex-wrap: wrap;

      .aditem{
        width: 33%;
      }
    }

    .pagination{
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 10px;
      
      .page-item{
        width: 23px;
        height: 23px;
        margin-right: 5px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: .8rem;
        cursor: pointer;
        transition: .3s;

        &:hover{
          background-color: #333;
          color: #FFF;
          border-radius: 4px;
        }
        &.active{
          background-color: #333;
          opacity: .7;
          color: #FFF;
          border-radius: 4px;
        }
      }
    }
  }
`;