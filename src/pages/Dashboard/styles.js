import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
  height: 100vh;
  border-radius: 5px;
  h1 {
    margin-left: 17px;
  }
`;

export const Search = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2px  17px;
`;

export const List = styled.ul`
  display: flex;
  flex: 1;
  justify-content: space-around;
  flex-wrap: wrap;
 
  a {
    width: 280px;

    border-radius: 5px;
    box-shadow: 1px 1px 5px 1px rgba(0, 0, 0, 0.2);
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
    margin: 10px;
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

