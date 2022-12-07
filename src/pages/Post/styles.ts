import styled from "styled-components";

export const PostCover = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 2rem 2.5rem;

  background-color: ${(props) => props.theme['base-profile']};
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  border-radius: 10px;

  h1 {
    color: ${(props) =>  props.theme['base-title']};
  }

  ul {
    margin-top: 0.2rem;
    display: flex;
    gap: 1.5rem;
  }

  li {
    list-style: none;
    color: ${(props) =>  props.theme['base-subtitle']};
  }

  .post-header {
    display: flex;
    justify-content: space-between;
    gap: auto;

    a {
      display: flex;
      align-items: center;
      font-size: 0.75rem;
      text-decoration: none;
      text-transform: uppercase;
      line-height: 1.5;

      &:hover {
        color: ${(props) => props.theme['blue']};
      }

      &:visited:active {
        text-decoration: none;
      }
    }
  }

  .post-info {
    color: ${(props) =>  props.theme['base-label']};
    vertical-align: middle;
  }  
`;

export const PostContent = styled.main`
  padding: 2.5rem 2rem;
  color: ${(props) => props.theme['base-text']};
`;