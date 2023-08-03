import styled from '@emotion/styled';
export const Form = styled.form`
  height: auto;
  display: flex;
  flex-direction: column;
`;

export const LabelLogin = styled.label`
  padding: 0;
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  color: #ff00dd;
`;

export const Input = styled.input`
  /* width: 180px; */
  border-radius: 7px;
  margin-left: 15px;
  background-color: #daf9ff;
  border: 2px solid black;
  transition: border 300ms ease-in;

  outline: 0;

  ::placeholder {
    background-color: white;
    color: #ff00dd;
    font-size: 12px;
    font-style: italic;
    text-align: center;
  }
`;

export const ButtonLogout = styled.button`
  margin-top: 20px;
  padding: 10px;
  border: 2px solid black;
  border-radius: 7px;
  :hover {
    color: #ffffff;
    background: rgb(255, 111, 174);
    background: linear-gradient(
      27deg,
      rgba(255, 111, 174, 1) 0%,
      rgba(98, 170, 255, 1) 100%
    );
    box-shadow: rgb(255, 254, 254) 0px 0px 3px;
  }
`;
