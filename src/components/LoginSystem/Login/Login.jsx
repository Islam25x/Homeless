import React, { useState } from "react";
import { Container } from "react-bootstrap";
import "../LoginSystem.css";

function Login() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  // ✅ handleChange to update values correctly
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // ✅ validation logic fix
  const validate = () => {
    const newErrors = {};

    if (!formData.username.trim()) {
      newErrors.username = "Username is required";
    }

    if (!formData.password.trim()) {
      newErrors.password = "Password is required";
    } else if (formData.password.trim().length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      console.log("✅ Submitted Data:", formData);
    }
  };

  return (
    <section id="Login">
      <Container>
        <div className="sign-header text-center">
          <h2>Sign into your account</h2>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="form-top">
            <div>
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleChange}
              />
              {errors.username && (
                <p className="text-danger">{errors.username}</p>
              )}
            </div>

            <div className="my-3">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
              />
              {errors.password && (
                <p className="text-danger">{errors.password}</p>
              )}
            </div>
          </div>

          <div className="form-bottom">
            <p>
              Message and data rates may apply. By submitting your phone number,
              you consent to being contacted{" "}
              <span style={{ color: "#0f8ac0" }}>TheHomless.org</span>
            </p>

            <button type="submit">Sign In</button>
          </div>
        </form>
      </Container>
    </section>
  );
}

export default Login;
