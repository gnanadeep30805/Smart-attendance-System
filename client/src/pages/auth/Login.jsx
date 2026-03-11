import { useState } from "react";
import { Link } from "react-router-dom";

function Login() {

  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  return (

    <div className="container-center">

      <div className="card w-full max-w-md">
        <div className="card-pad">

          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-center mb-2">
            Smart Attendance
          </h2>
          <p className="muted text-center mb-7">Sign in to continue.</p>

          <div className="space-y-4">
            <input
              type="email"
              placeholder="Email"
              className="input-field"
              onChange={(e)=>setEmail(e.target.value)}
            />

            <input
              type="password"
              placeholder="Password"
              className="input-field"
              onChange={(e)=>setPassword(e.target.value)}
            />
          </div>

          <button className="primary-btn mt-6" type="button">
            Login
          </button>

          <div className="mt-5 text-center text-sm">
            <span className="muted">No account? </span>
            <Link className="font-medium text-blue-700 hover:text-blue-800" to="/register">
              Create one
            </Link>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Login;