import styled from 'styled-components';

export const Container = styled.div`
  background-color: #00000080;
  height: 100vh;
  
  @media(min-width: 768px) {
    background-color: red;
  }
  
  @media(min-width: 1024px) {
    background-color: #00000080;
  }
`;