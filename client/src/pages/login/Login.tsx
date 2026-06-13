import { Link } from "react-router-dom";
import './Login.css';
import bgImage from '../../assets/images/login_bg.jpg';

export function Login() {
    return (
        <div className="login-container" style={{backgroundImage: `url(${bgImage})`}}>
            {/* Hero Section */}
            <div className="hero-section">
                <div className="hero-title-1">
                    Upload your medical report with ease and track your timeline
                </div>
                <div className="hero-title-2">
                    AI assistance to help keep track of your medical report wherever you go
                </div>
            </div>

            {/* Login Container */}
            <div className="login-form-container">
                <div className='login-title'>
                    <h1>Let's Begin!</h1>
                    <p>Login to track you medical records with AI powered assistance</p>
                </div>

                <div className='login-input-container'>
                    <label><strong>Email</strong></label>
                    <input type="email" placeholder='Enter your email' required />

                    <label><strong>Password</strong></label>
                    <input type="password" placeholder='Enter your password' required />

                    <button>Login</button>
                </div>

                <div className='sign-up-section'>
                    <p>Don't have an account? <Link to="">Sign up here</Link></p>
                </div>
            </div>

            <div className="background-tint"></div>
        </div>
    );
}