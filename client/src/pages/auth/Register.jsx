import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { registerUser } from "../../services/authService";

function Register(){
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const onSubmit = async () => {
    setError("");
    setLoading(true);
    try {
      await registerUser({ name, email, password, role: "student" });
      navigate("/login/student", { replace: true });
    } catch (e) {
      if (!e?.response) {
        setError(
          "Cannot reach the backend API. Start the server and verify VITE_API_BASE_URL (default: http://localhost:5000/api)."
        );
      } else {
        setError(e?.response?.data?.message ?? `Registration failed (HTTP ${e.response.status}).`);
      }
    } finally {
      setLoading(false);
    }
  };

  return(

    <div className="container-center">

      <div className="card w-full max-w-md">
        <div className="card-pad">

          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-center mb-2">
            Create student account
          </h2>
          <p className="muted text-center mb-7">
            Student registration only. Teachers sign in using provided credentials.
          </p>

          <div className="space-y-4">
            <input
              type="text"
              placeholder="Name"
              className="input-field"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <input
              type="email"
              placeholder="Email"
              className="input-field"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <input
              type="password"
              placeholder="Password"
              className="input-field"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {error ? (
            <div className="mt-4 rounded-xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-700">
              {error}
            </div>
          ) : null}

          <button className="primary-btn mt-6" type="button" onClick={onSubmit} disabled={loading}>
            {loading ? "Creating..." : "Register"}
          </button>

          <div className="mt-5 text-center text-sm">
            <span className="muted">Already have an account? </span>
            <Link className="font-medium text-blue-700 hover:text-blue-800" to="/">
              Sign in
            </Link>
          </div>
        </div>

      </div>

    </div>

  )
}

export default Register