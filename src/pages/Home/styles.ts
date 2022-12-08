import styled from "styled-components";

export const Profile = styled.div`
  display: flex;
  gap: 2rem;
  padding: 2rem 2.5rem;

  background-color: ${(props) => props.theme['base-profile']};
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  border-radius: 10px;

  .profile-content-header {
    display: flex;
    justify-content: space-between;
    margin: 1rem auto;

    a {
      text-decoration: none;
      text-transform: uppercase;
      line-height: 1.6;

      &:hover {
        color: ${(props) => props.theme['blue']};
      }
    }
  }

  img {
    width: 10rem;
    height: 10rem;
  }

  h1 {
    color: ${(props) =>  props.theme['base-title']};
  }

  p {
    color: ${(props) =>  props.theme['base-text']};
  }

  ul {
    margin-top: 1rem;
    display: flex;
    gap: 1.5rem;
  }

  li {
    list-style: none;
    color: ${(props) =>  props.theme['base-subtitle']};
  }

  .profile-info-label {
    color: ${(props) =>  props.theme['base-label']};
    vertical-align: middle;
  }
`;


export const Input = styled.div`
  margin-top: 3.5rem;

  input {
    margin: 1rem 0 2.5rem 0;
    padding: 0.8rem 1rem;
    width: 100%;
    height: 50px;

    color: ${(props) => props.theme['base-text']};
    background:  ${(props) => props.theme['base-input']};
    border: 1px solid ${(props) => props.theme['base-border']};
    border-radius: 6px;
  }

  input:focus {
    border: 1px solid ${(props) => props.theme['blue']};
  }

  .input-header {
    display: flex;
    justify-content: space-between;

    h1 {
      color: ${(props) => props.theme['base-subtitle']};
      font-size: 1.2rem;
    }

    span {
      color: ${(props) => props.theme['base-span']};
      font-size: 0.8rem;
    }
  }
`;

export const Cards = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 2rem;
`;