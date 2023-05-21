import styled from "styled-components";
import { Form, Button, Alert } from "react-bootstrap";

export const StyledForm = styled(Form)`
  width: 500px;
  margin: auto;
  margin-top: 20px;
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
`;

export const FormLabel = styled(Form.Label)`
  font-weight: bold;
  color: #333;
`;

export const FormInput = styled(Form.Control)`
  margin-bottom: 10px;
  border-color: #ccc;
  border-radius: 4px;
`;

export const ErrorMessage = styled(Alert)`
  margin-bottom: 10px;
  background-color: #f8d7da;
  color: #721c24;
  border-color: #f5c6cb;
  border-radius: 4px;
  padding: 10px;
`;

export const SuccessMessage = styled(Alert)`
  margin-top: 10px;
  background-color: #d4edda;
  color: #155724;
  border-color: #c3e6cb;
  border-radius: 4px;
  padding: 10px;
`;

export const StyledButton = styled(Button)`
  &&& {
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
  }
`;
