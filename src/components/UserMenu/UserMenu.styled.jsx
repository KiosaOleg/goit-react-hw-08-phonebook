import styled from '@emotion/styled';

export const UserMenuBox = styled.div`
  display: flex;
`;

export const Salut = styled.p`
  color: #8d277f;
  margin-right: 5px;
`;

export const BtnLogOut = styled.button`
  padding: 0;
  margin: 0;
  background-color: transparent;
  border: none;
  cursor: pointer;
  color: #8d277f;
  transition: color 300ms ease-out;

  :hover {
    color: #001a1e;
  }
`;
