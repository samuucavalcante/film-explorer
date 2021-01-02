import styled, { keyframes } from 'styled-components';

import { shade } from 'polished';

const key = keyframes`
from {
  opacity: 0;
  transform: translateX(-5px)
}to {
  opacity: 1;
  transform: translateX(0px)
}
`;


export const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  height: 100vh;
  border-radius: 5px;
  h1 {
    margin-left: 17px;
  }

::-webkit-scrollbar {
  width:8px;
  height: 8px;
}
 
::-webkit-scrollbar-track {
  background:rgba(0, 0, 0, 0.2);
  border-radius: 20px;
  margin-top: 125px;
  margin-bottom: 40px;

}
 

::-webkit-scrollbar-thumb {
  border-radius: 20px;
  background: #ff6d6d;

}
overflow-y: auto;


`;

export const Search = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px;
`;


export const List = styled.ul`
  display: flex;
  justify-content: space-around;
  
  padding: 0 60px;

  flex-wrap: wrap;
  flex: 1;


  a {
    margin-right: 12px;
    background-color: white;
    width: 290px;
    margin-top: 15px;
    border-radius: 5px;
    box-shadow: 1px 1px 5px 1px rgba(0, 0, 0, 0.2);
    display: flex;
    justify-content: space-between;
    animation: ${key} 1s;

    

    &:hover {
      background-color: ${shade(0.2, 'white')};
      color: ${shade(0.2, 'black')};
    }
    div {
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      border-radius: 5px;
      line-height: 30px; 
      text-align: center;
      h3 {
        font-size: 14px;
        flex: 1;
      }
      p {
        font-size: 12px;

      }
      span {
        font-size: 14px;
      background-color: #deba37;

      }
    }
    .wrap-img{
      width: 50%;
      height: 210px;
       img {
        width: 100%;
        height: 100%;
        color: red;
        font-size: 14px;
      }
    }

  }

`;

export const Popular = styled.div`
text-align: end;
`;

