import styled from "styled-components";

export const StyledPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const Header = styled.header`
  background-color: #393646;
  height: 3.4375rem;
  width: 100%;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 5rem;
  width: 70%;
  overflow-x: auto;
`;

export const ListContainer = styled.table`
  border-collapse: collapse;
  border-spacing: 0;
  width: 100%;
  overflow-x: auto;
`;

export const ListContainerHeader = styled.thead`
  padding: 1.25rem;
  height: 3.125rem;
  text-align: left;
  background-color: #393646;
  color: #f4eee0;

  th {
    padding: 8px 16px;
    text-align: left;
    color: #fff;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 3.125rem;
`;

export const EmptyDataBase = styled.tr`
  width: 100%;
  height: 2.1875rem;
  background-color: #f4eee0;
`;
