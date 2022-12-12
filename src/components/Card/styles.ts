import styled from "styled-components";


export const CardLink = styled.a`
  padding: 2rem 1.8rem;
  width: 48%;
  min-width: 200px;
  background-color: ${(props) =>  props.theme['base-post']};

  border: 2px solid transparent;
  border-radius: 10px;

  p {
    color: ${(props) => props.theme['base-text']};
    line-height: 1.6;
    /* width: 200pt; */
  }

  .card-header {
    display: flex;
    margin-bottom: 0.8rem;

    h2 {
      color: ${(props) => props.theme['base-title']};
      font-size: 1.3rem;
      font-weight: 700;
      line-height: 1.6;
    }

    span {
      width: 4rem;
      color: ${(props) => props.theme['base-span']};
      font-size: 0.8rem;
      line-height: 1.6;
    }
  }

  &:hover {
    cursor: pointer;
    outline: 2px solid ${(props) => props.theme['base-label']}; 
  }
`;