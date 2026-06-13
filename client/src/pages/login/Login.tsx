import { Link } from "react-router-dom";
import { Button } from "../../components/Button/Button";
import { authService } from "../../services/authService";
import './Login.css';
import React, { useEffect, useState } from "react";

export function Login() {
    const [email, setEmail] = useState<string | null>("");
    const [password, setPassword] = useState<string | null>("");
    const [emailError, setEmailError] = useState<string | null>("");
    const [passwordError, setPasswordError] = useState<string | null>("");

    const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();

        const emailInput = email?.trim();
        const passwordInput = password?.trim();

        if (!emailInput) {
            setEmailError("Email address is required");
            return;
        }

        if (!passwordInput) {
            setPasswordError("Password is required");
            return;
        }

        try {
            const res = await authService.login(emailInput, passwordInput);

            console.log(res);
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div className="login-container">
            {/* Hero Section */}
            <div className="hero-section">
                <div className="hero-logo-container">
                    <h2>MedAssist AI</h2>
                </div>
                <div className="hero-title-1">
                    Understand Your Medical Reports Instantly
                </div>
                <div className="hero-title-2">
                    Upload any medical report and receive clear, plain language explanations powered by advanced AI.
                </div>
            </div>

            {/* Login Container */}
            <div className="login-holder">
                <div className="logo-container">
                    <h2>MedAssist AI</h2>
                </div>
                <form className="login-form-container" onSubmit={handleSubmit}>
                    <div className='login-title'>
                        <h1>Welcome Back!</h1>
                        <p>Sign in to your MedAssist AI account</p>
                    </div>

                    <div className='login-input-container'>
                        <label>Email address</label>
                        <input type="email" placeholder='Enter your email' onChange={(e) => setEmail(e.target.value)} required />
                        {emailError && <p className="errorMsg">{emailError}</p>}
                        

                        <label className="passwordLabel">Password <Link to="">Forgot password?</Link></label>
                        <input type="password" placeholder='Enter your password' onChange={(e) => setPassword(e.target.value)} required />
                        {passwordError && <p className="errorMsg">{passwordError}</p>}

                        <Button variant="primary" type="submit"><strong>Sign In</strong></Button>
                        <Button variant="secondary">Continue with Google</Button>

                        <div className='sign-up-section'>
                            <p>Don't have an account?</p>
                            <Link to="">Sign up here</Link>
                        </div>
                    </div>

                </form>
            </div>

        </div>
    );
}