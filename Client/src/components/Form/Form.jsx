import { useState } from "react";
import validarForm from "../../Scripts/validation";
import {
  Label,
  Warning,
  FormContainer,
  Container,
  Input,
  Submit,
} from "./Styles";

export default function Form({ login }) {
  const [userData, setUserData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    setUserData({
      ...userData,
      [event.target.name]: event.target.value,
    });

    setErrors(
      validarForm({
        ...userData,
        [event.target.name]: event.target.value,
      })
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    login(userData);
  };

  return (
    <Container>
      <FormContainer>
        <Label>
          Email:{" "}
          <Input
            type="email"
            name="email"
            value={userData.email}
            onChange={handleChange}
            placeholder="email01@ejemplo.com"
          />
          {errors.email && <Warning>{errors.email}</Warning>}
        </Label>
        <Label>
          Password:{" "}
          <Input
            type="text"
            name="password"
            value={userData.password}
            onChange={handleChange}
            placeholder="password01"
          />
          {errors.password && <Warning>{errors.password}</Warning>}
        </Label>
        <Submit onClick={handleSubmit}>Submit</Submit>
      </FormContainer>
    </Container>
  );
}
