import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  background-color: white;
  border-radius: 10px;
  padding: 16px;
  width: 100%;
  color: #f4ede8;
  &::placeholder {
    color: #666360;
  }
  & + div {
    margin-top: 8px;
  }
  
  input {
    flex: 1;
    background-color: transparent;
    border: 0;
    color: black;
  }
  svg {
    margin-right: 16px;
  }
`;