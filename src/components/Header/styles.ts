import styled from 'styled-components';

export const HeaderComponent = styled.header`
  display: grid;
  place-items: center;
  padding: 4rem 0 8rem 0;
  color: #fff;
  background-color: ${(props) => props.theme['base-profile']};

  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;