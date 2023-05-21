import { Form, Button, Alert } from "react-bootstrap";

import React, { useState } from "react";
import axios from "axios";
import {
  StyledForm,
  FormLabel,
  FormInput,
  ErrorMessage,
  SuccessMessage,
  StyledButton,
} from "../styles/StyledNewEvent";

export const NewEvent = () => {
  const [form, setForm] = useState({
    title: "",
    name: "",
    surname: "",
    email: "",
    phoneNumber: "",
  });

  const [registrationSuccess, setRegistrationSuccess] = useState(false);
  const [validationError, setValidationError] = useState("");

  const handleOnChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setRegistrationSuccess(false);

    axios
      .post("http://localhost:5000/events", form)
      .then(() => {
        setRegistrationSuccess(true);
        resetForm();
      })
      .catch((err) => console.log(err));
  };

  const validateForm = () => {
    if (
      form.title.trim() === "" ||
      form.name.trim() === "" ||
      form.surname.trim() === "" ||
      form.email.trim() === "" ||
      form.phoneNumber.trim() === ""
    ) {
      setValidationError("Please fill in all fields.");
      return false;
    }

    if (!/^\d+$/.test(form.phoneNumber.trim())) {
      setValidationError("Phone Number should only contain numbers.");
      return false;
    }

    setValidationError("");
    return true;
  };

  const resetForm = () => {
    setForm({
      title: "",
      name: "",
      surname: "",
      email: "",
      phoneNumber: "",
    });
  };

  return (
    <div>
      <StyledForm onSubmit={handleOnSubmit}>
        <Form.Group className="mb-3">
          <FormLabel>Event title</FormLabel>
          <FormInput
            name="title"
            type="text"
            placeholder="Title"
            value={form.title}
            onChange={handleOnChange}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <FormLabel>Name</FormLabel>
          <FormInput
            name="name"
            type="text"
            placeholder="Name"
            value={form.name}
            onChange={handleOnChange}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <FormLabel>Surname</FormLabel>
          <FormInput
            name="surname"
            type="text"
            placeholder="Surname"
            value={form.surname}
            onChange={handleOnChange}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <FormLabel>Email</FormLabel>
          <FormInput
            name="email"
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={handleOnChange}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <FormLabel>Phone Number</FormLabel>
          <FormInput
            name="phoneNumber"
            type="text"
            placeholder="Phone Number"
            value={form.phoneNumber}
            onChange={handleOnChange}
          />
        </Form.Group>

        {validationError && (
          <ErrorMessage variant="danger">{validationError}</ErrorMessage>
        )}

        <StyledButton variant="primary" type="submit">
          Register participant
        </StyledButton>

        {registrationSuccess && (
          <SuccessMessage variant="success">
            Participant registered successfully.
          </SuccessMessage>
        )}
      </StyledForm>
    </div>
  );
};
