import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { useSignupMutation } from "../../RTK/Auth/AuthApi";
import "../LoginSystem.css";

// Define the types for the form data and errors
interface FormData {
  username: string;
  email: string;
  password: string;
  from_Service: string;
  isProfessional: boolean;
  checked: boolean;
}

interface Errors {
  username?: string;
  email?: string;
  password?: string;
  from_Service?: string;
}

const SignUp = () => {
  const [formData, setFormData] = useState<FormData>({
    username: "",
    email: "",
    password: "",
    from_Service: "",
    isProfessional: false,
    checked: false,
  });

  const [errors, setErrors] = useState<Errors>({});
  const [signup, { isLoading, error }] = useSignupMutation();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    const newValue =
      type === "checkbox" ? (e.target as HTMLInputElement).checked : value;

    setFormData({
      ...formData,
      [name]: newValue,
    });
  };

  const validate = () => {
    const newErrors: Errors = {};
    if (!formData.username.trim()) newErrors.username = "Username is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    if (!formData.password.trim()) newErrors.password = "Password is required";
    if (formData.password.trim().length < 6)
      newErrors.password = "Password must be longer than 6 characters";
    if (!formData.from_Service)
      newErrors.from_Service = "Role is required";
    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});

      const userData = {
        name: formData.username,
        email: formData.email,
        password: formData.password,
        role: formData.from_Service,
        isProfessional: formData.isProfessional,
      };

      try {
        const res = await signup(userData).unwrap();
        console.log("✅ Signed up:", res);

        localStorage.setItem("token", res.token);
        // Navigate or show success if needed
      } catch (err) {
        console.error("❌ Signup failed", err);
      }
    }
  };

  return (
    <section id="SignUp">
      <Container>
        <div className="sign-header text-center">
          <h2>Create an account</h2>
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
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <p className="text-danger">{errors.email}</p>}
            </div>

            <div>
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

            <div className="select">
              <label htmlFor="from_Service" className="d-block">
                Select Role
              </label>
              <select
                id="from_Service"
                name="from_Service"
                value={formData.from_Service}
                onChange={handleChange}
              >
                <option value="">—Select Role—</option>
                <option value="Landlord">Landlord</option>
                <option value="Tenant">Tenant</option>
              </select>
              {errors.from_Service && (
                <p className="text-danger">{errors.from_Service}</p>
              )}
            </div>
          </div>

          <div className="form-bottom">
            <p>
              Message and data rates may apply. By submitting your phone number,
              you consent to being contacted{" "}
              <span style={{ color: "#0f8ac0" }}>TheHomeless.org</span>
            </p>

            <div className="d-flex align-items-center mb-4">
              <input
                type="checkbox"
                id="industryProfessional"
                name="isProfessional"
                checked={formData.isProfessional}
                onChange={handleChange}
              />
              <label htmlFor="industryProfessional" className="mb-0 ms-2">
                I am an industry professional
              </label>
            </div>

            <button type="submit" disabled={isLoading}>
              {isLoading ? "Signing Up..." : "Sign Up"}
            </button>

            {error && (
              <p className="text-danger mt-2">
                Failed to sign up. Please try again.
              </p>
            )}
          </div>
        </form>
      </Container>
    </section>
  );
};

export default SignUp;
