import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import API from "../services/api";
import toast from "react-hot-toast";

const Register = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await API.post("/auth/register", form);

      toast.success("Registration successful");

      navigate("/login");
    } catch (error) {
      toast.error("Registration failed");
    }
  };

  return (
    <div className="min-h-screen bg-[#020617] flex items-center justify-center px-4">
      
      <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/20 blur-3xl rounded-full"></div>

      <form
        onSubmit={handleSubmit}
        className="relative z-10 w-full max-w-md backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 shadow-2xl"
      >
        <h1 className="text-4xl font-black mb-2 text-white">
          Create Account 🚀
        </h1>

        <p className="text-gray-400 mb-8">
          Join HackerNews Pro today
        </p>

        <div className="space-y-5">
          
          <input
            type="text"
            placeholder="Name"
            className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 outline-none focus:border-orange-400 text-white"
            onChange={(e) =>
              setForm({ ...form, name: e.target.value })
            }
          />

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
            Register
          </button>
        </div>

        <p className="text-gray-400 mt-6 text-center">
          Already have an account?
          
          <Link
            to="/login"
            className="text-orange-400 ml-1 hover:underline"
          >
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Register;