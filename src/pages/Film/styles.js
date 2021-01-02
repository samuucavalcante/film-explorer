import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  border-radius: 5px;

`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 800px;
  h1 {
    margin-left: 16px;
  }

  a { 
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #a8a8b3;
    transition: color 2s;


    &:hover {
      color: #666;
    }

    svg {
      margin-right: 4px;
    }

  }
`;

export const FilmInfo = styled.section`
  margin-top: 80px;
  @media(max-width: 700px) {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;    
    padding: 0px 20px;
      }
  header {
    display: flex;
    align-items: center;

    img {
      width: 120px;
      height: 120px;
      border-radius: 50%;
      
    }

    div {
      margin-left: 24px;


      strong {
        font-size: 36px;
        color: #3d3d4d;
      }

      p {
        font-size: 18px;
        color: #737380;
        margin-top: 4px;
      }
    }
  }

  ul {
    display: flex;
    list-style: none;
    margin-top: 40px;

    li {
        @media(max-width: 700px) {
        font-size: 20px;
       }
      & + li {
        margin-left: 80px
      }
      
      strong {
        display: block;
        font-size: 36px;
        @media(max-width: 700px) {
        font-size:25px;
       }
        color: #3d3d4d;
      }
    }

    span {
      display: block;
      margin-top: 4px;
      color: #6c6c80;
      

    }
  }
`;
