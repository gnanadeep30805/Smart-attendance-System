import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../../services/authService";
import { AuthContext } from "../../context/AuthContext";

function TeacherLogin() {
  const navigate = useNavigate();
  const auth = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const onSubmit = async () => {
    setError("");
    setLoading(true);
    try {
      const res = await loginUser({ email, password, role: "teacher" });
      const data = res?.data ?? {};
      const token = data?.token ?? data?.accessToken ?? data?.jwt;

      if (token) localStorage.setItem("token", token);
      localStorage.setItem("role", "teacher");
      auth?.login?.(data?.user ?? { email, role: "teacher" });

      navigate("/teacher/dashboard", { replace: true });
    } catch (e) {
      setError(e?.response?.data?.message ?? "Login failed. Please check your credentials.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container-center">
      <div className="card w-full max-w-md">
        <div className="card-pad">
          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Teacher login</h2>
            <p className="muted mt-2">Sign in to your teacher account.</p>
          </div>

          <div className="mt-7 space-y-4">
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
            {loading ? "Signing in..." : "Login"}
          </button>

          <div className="mt-4 flex items-center justify-between text-sm">
            <Link className="muted hover:text-slate-900" to="/">
              ← Back
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeacherLogin;

