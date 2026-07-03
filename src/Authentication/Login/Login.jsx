import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Button, Container } from 'react-bootstrap';

const Login = () => {
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        // Perform login logic here (e.g., API call)
        // For demonstration, we'll just navigate to the home page
        navigate("/");
    }

    return (
        <div className="container mt-5">
            <div
                className="d-flex justify-content-center align-items-center"
                style={{ minHeight: "80vh" }}
            >
                <div
                    className="bg-white p-4 rounded shadow-lg border"
                    style={{
                        width: "400px",
                        borderColor: "#dee2e6",
                    }}
                >
                    <Form onSubmit={handleLogin}>
                        <h2 className="text-center mb-4 fw-bold">Login</h2>

                        <Form.Group className="mb-3" controlId="formPhone">
                            <Form.Label>Phone Number</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter phone number"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                required
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Enter password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />

                            <div className="text-end mt-2">
                                <Button
                                    variant="link"
                                    className="text-decoration-none p-0 small fw-semibold"
                                    onClick={() => navigate("/forgot-password")}
                                >
                                    Forgot Password?
                                </Button>
                            </div>

                            <Form.Check
                                type="checkbox"
                                id="rememberMe"
                                label="Remember me"
                                className="mt-2"
                            />
                        </Form.Group>

                        <Button
                            variant="danger"
                            type="submit"
                            className="w-100 py-2"
                        >
                            Login
                        </Button>

                        <div className="text-center mt-3">
                            Don't have an account?
                            <a
                                href="/signup"
                                className="ms-1 text-decoration-none fw-semibold"
                            >
                                Register
                            </a>
                        </div>
                    </Form>
                </div>
            </div>
        </div>
    );
}

export default Login;