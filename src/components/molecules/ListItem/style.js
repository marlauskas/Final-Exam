import styled from "styled-components";

export const StyledListItem = styled.tr`
  text-align: left;
  gap: 10px;
  align-items: center;
  width: 100%;
  border: none;
  background-color: #6d5d6e;
  color: #eeeeee;
  padding: 0.625rem;

  td {
    padding: 8px 16px;
    text-align: left;
    color: #fff;
    min-width: 200px;
    width: 100%;
  }
`;

export const ListItemButton = styled.button`
  width: 4.0625rem;
  height: 2.1875rem;
  padding: 0.3125rem;
  outline: none;
  border: none;
  border-radius: 0.1875rem;
  color: #fff;
  background-color: #393646;
  font-size: 1rem;
  cursor: pointer;
`;
