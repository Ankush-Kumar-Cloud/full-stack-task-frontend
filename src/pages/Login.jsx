import { useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import API from "../services/api";
import { AuthContext } from "../context/AuthContext";
import toast from "react-hot-toast";

const Login = () => {
  const navigate = useNavigate();

  const { login } = useContext(AuthContext);

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await API.post("/auth/login", form);

      login(data);

      toast.success("Login successful 🚀");

      navigate("/");
    } catch (error) {
      console.log(error);

      toast.error(
        error.response?.data?.message || "Login failed"
      );
    }
  };

  return (
    <div className="min-h-screen bg-[#020617] flex items-center justify-center px-4">

      <div className="absolute top-0 left-0 w-96 h-96 bg-orange-500/20 blur-3xl rounded-full"></div>

      <form
        onSubmit={handleSubmit}
        className="relative z-10 w-full max-w-md backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 shadow-2xl"
      >
        <h1 className="text-4xl font-black mb-2 text-white">
          Welcome Back 👋
        </h1>

        <p className="text-gray-400 mb-8">
          Login to continue
        </p>

        <div className="space-y-5">

          <input
            type="email"
            placeholder="Email"
            className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 outline-none focus:border-orange-400 text-white"
            onChange={(e) =>
              setForm({ ...form, email: e.target.value })
            }
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 outline-none focus:border-orange-400 text-white"
            onChange={(e) =>
              setForm({ ...form, password: e.target.value })
            }
          />

          <button className="w-full bg-orange-500 hover:bg-orange-600 py-4 rounded-2xl font-bold text-lg transition duration-300 hover:scale-[1.02] text-white">
            Login
          </button>

        </div>

        <p className="text-gray-400 mt-6 text-center">
          Don’t have an account?

          <Link
            to="/register"
            className="text-orange-400 ml-1 hover:underline"
          >
            Register
          </Link>
        </p>

      </form>
    </div>
  );
};

export default Login;