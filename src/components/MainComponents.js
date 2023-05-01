import styled from 'styled-components'

export const Template = styled.div``;

export const PageContainer = styled.div`
  height: calc(100vh - 160px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const PageTitle = styled.div`
  font-size: 2rem;
  font-weight: 700;
  padding: 10px;
`;

export const PageBody = styled.div``;

export const ErrorMessage = styled.div`
  margin: 10px;
  background-color: #FFCACA;
  color: #000;
  border: 2px solid #FF0000; 
  text-align: center;
  border-radius: 4px;
  padding: 5px;
`;