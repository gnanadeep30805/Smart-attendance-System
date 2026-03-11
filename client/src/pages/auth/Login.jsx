import { useState } from "react";

function Login() {

  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  return (

    <div className="container-center">

      <div className="card w-96">

        <h2 className="text-3xl font-bold text-center mb-6">
          Smart Attendance Login
        </h2>

        <input
          type="email"
          placeholder="Email"
          className="input-field mb-4"
          onChange={(e)=>setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="input-field mb-6"
          onChange={(e)=>setPassword(e.target.value)}
        />

        <button className="primary-btn">
          Login
        </button>

      </div>

    </div>
  );
}

export default Login;