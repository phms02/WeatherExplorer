import styled from "styled-components";

export const ListStyled = styled.ul`
  list-style: none;
  padding: 0;
`;

export const ListItem = styled.li`
  padding: 8px;
  border-bottom: 1px solid #ccc;
  cursor: pointer;

  &:last-child {
    border-bottom: none;
  }
`;