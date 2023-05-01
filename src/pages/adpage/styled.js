import styled from 'styled-components'

export const PageContainer = styled.div`
  max-width: 1000px;
  margin: auto;
`;

export const Fake = styled.div`
  background-color: #DDD;
  height: ${props => props.height || 20}px;
`;

export const PageArea = styled.div`
  display: flex;
  margin: 20px 0;
  padding: 10px;

  .box{
    background-color: #FFF;
    border-radius: 5px;
    box-shadow: 0px 0px 4px #999;
    margin-bottom: 20px;
  }
  .box-padding{ 
    padding: 10px;
  }

  .left-side{
    flex: 1;
    margin-right: 20px;

    hr{
      width: 70%;
    }
    .box{
      display: flex;
    }

    .ad-img{
      width: 320px;
      height: 320px;
      margin-right: 20px;
      
      .each-slide img {
        display: flex;
        align-items: center;
        justify-content: center;
        background-size: cover;
        height: 320px;
      }
    }

    .ad-info{
      flex: 1;

      .ad-name{
        margin: 20px 0;

        h2{
          margin: 0;
          margin-top: 5px;
        }
        small{
          color: #999;
        }
      }
      .ad-description{
        small{
          color: #999;
        }
      }

    }
  }

  .right-side{
    width: 250px;

    .price span{
      color: blue;
      display: block;
      font-size: 27px;
      font-weight: 700;
    }

    .contactSellerLink{
      background-color: blue;
      color:#FFF;
      height: 30px;
      border-radius: 4px;
      box-shadow: 0px 0px 4px #999;
      display: flex;
      justify-content: center;
      align-items: center;
      text-decoration: none;
      margin-bottom: 20px;
    }

    .createdBy small{
      display: block;
      color: #999;
      margin-top: 10px;
    }
  }
`;

export const OthersArea = styled.div`
  h2{
    font-size: 1.3rem;
  }
  .list{
    display: flex;
    overflow: hidden;

    .aditem{
      width: 35%;
    }
  }
`;

export const BreadChumb = styled.div`
  font-size: 1rem;
  margin-top: 20px;

  a{
    maring: 0px 5px;
    text-decoration: underline;
    color: #000;
    margin: 0 5px; 
  }

`;