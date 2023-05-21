import styled from "styled-components";

export const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: 60vh;
`;

export const StyledInput = styled.input`
  width: 100%;
  margin: 10px 0px;
`;

export const StyledButton = styled.button`
  width: 100%;
  margin: 10px 0px;
  background-color: #fff;
  /* Fancy styles */
  background-color: #d1d1d1;
  border-color: #d1d1d1;
  color: #fff;

  &:hover {
    background-color: #a8a8a8;
    border-color: #a8a8a8;
  }

  &:focus {
    background-color: #a8a8a8;
    border-color: #a8a8a8;
    box-shadow: none;
  }
`;

export const StyledForm = styled.form`
  background-color: #ded9d9;
  padding: 20px;
  border-radius: 0px 0px 7.5px 7.5px;
  /* Fancy styles */
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
`;

export const StyledHeader = styled.div`
  background-color: #f0efef;
  padding: 20px;
  width: 500px;
  border-radius: 7.5px 7.5px 0px 0px;
`;

export const MainBox = styled.div`
  width: 500px;
`;

export const Error = styled.div`
  background-color: #f09292;
  border: 1px solid red;
  border-radius: 6px;
  color: red;
  padding: 6px 0;
  text-align: center;
  background-color: #f8d7da;
  color: #721c24;
  border-color: #f5c6cb;
  border-radius: 4px;
  padding: 10px;
`;

export const RegisterLinkParagraph = styled.p`
  color: #666666;
  font-size: 14px;
  margin-top: 20px;
  a {
    color: #55b9f3;
    font-weight: bold;
    margin-left: 5px;
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: #3a8dc5;
    }
  }
`;
