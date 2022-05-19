import React, { useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";
import "./style.css";
import { useParams, useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  const { userType } = useParams();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const validateData = () => {
    let data = {
      firstName,
      lastName,
      email,
      password,
      location,
      goods_type,
      img,
    };
    if (userType !== "admin") {
      data = {
        firstName,
        lastName,
        email,
        password,
      };
    }
    const allfilled = Object.values(data).every((field) => field);
    if (allfilled) {
      return data;
    }
    return false;
  };
  const newUser = () => {
    const data = validateData();
    if (!data) {
      setError("Please fill all fields");
      return;
    }

    axios
      .post(`http://localhost:5000/${userType}`, data)
      .then((result) => {
        setError(null);
        navigate(`/login/${userType}`);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="forms">
      <Form className="form_register">
        <Form.Group className="mb-3">
          <Form.Label>First name</Form.Label>
          <Form.Control
            type="text"
            required
            className="required"
            placeholder="Enter first name"
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
          />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>last name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter last name"
            onChange={(e) => {
              setLastName(e.target.value);
            }}
          />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </Form.Group>
        <div className="register-but">
          <Button
            variant="primary"
            // type="submit"
            className="register"
            onClick={newUser}
          >
            Register
          </Button>
        </div>
        <div className="error">{error}</div>
      </Form>
    </div>
  );
};
export default Register;