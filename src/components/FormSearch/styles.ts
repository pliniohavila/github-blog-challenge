import styled from "styled-components";


export const FormSearchContainer = styled.form`
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