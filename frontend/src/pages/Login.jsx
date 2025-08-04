import axios from "axios";
import { useState } from "react";
import { useUser } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

function Login() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const { setUser } = useUser();
  const navigate = useNavigate();

  const validate = (fields = {}) => {
    const newErrors = {};
    const name = fields.fullName !== undefined ? fields.fullName : fullName;
    const mail = fields.email !== undefined ? fields.email : email;
    const pass = fields.password !== undefined ? fields.password : password;

    if (!name.trim()) newErrors.fullName = "Full Name is required";
    if (!mail.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(mail)) newErrors.email = "Email is invalid";
    if (!pass) newErrors.password = "Password is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    console.log(fullName, email, password);
    // integrate auth later
    axios
      .post(`${import.meta.env.VITE_SERVER_BASE_URL}/user`, { name: fullName })
      .then((response) => {
        const userRes = response.data;
        setUser({
          name: userRes.name,
          referralCode: userRes.referralCode,
          donations: userRes.donations,
        });
        navigate("/dashboard");
        localStorage.setItem("user", JSON.stringify(userRes));
      })
      .catch((error) => {
        console.error("Error creating user:", error);
      });
  };

  return (
    <div className="hero min-h-[92.5vh]">
      <div className="hero-content flex-col w-[40%] lg:flex-row-reverse">
        <div className="card bg-base-100 w-full shrink-0 shadow-2xl">
          <div className="card-body">
            <form onSubmit={handleSubmit}>
              <label className="label">Full Name</label>
              <input
                type="text"
                className="input w-full"
                placeholder="Name"
                value={fullName}
                onChange={(e) => {
                  setFullName(e.target.value);
                  validate({ fullName: e.target.value });
                }}
              />
              {errors.fullName && (
                <span className="text-warning text-xs">{errors.fullName}</span>
              )}
              <fieldset className="fieldset">
                <label className="label">Email</label>
                <input
                  type="email"
                  className="input w-full"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    validate({ email: e.target.value });
                  }}
                />
                {errors.email && (
                  <span className="text-warning text-xs">{errors.email}</span>
                )}
                <label className="label">Password</label>
                <input
                  type="password"
                  className="input w-full"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    validate({ password: e.target.value });
                  }}
                />
                {errors.password && (
                  <span className="text-warning text-xs">
                    {errors.password}
                  </span>
                )}
                <div>
                  <a className="link link-hover">Forgot password?</a>
                </div>
                <button type="submit" className="btn btn-neutral mt-4">
                  Login
                </button>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
