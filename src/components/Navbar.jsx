import { Link, useNavigate } from "react-router-dom";

import {
  FiHome,
  FiLogIn,
  FiUserPlus,
  FiBookmark,
  FiLogOut,
} from "react-icons/fi";

import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
  const navigate = useNavigate();

  const { user, logout } = useContext(AuthContext);

  const handleLogout = () => {

  const confirmLogout = window.confirm(
    "Are you sure you want to logout?"
  );

  if (confirmLogout) {
    logout();

    navigate("/login");
  }
};



  

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-lg bg-white/5 border-b border-white/10">

      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <h1 className="text-3xl font-extrabold bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
          HackerNews
        </h1>

        {/* Nav Links */}
        <div className="flex items-center gap-4">

          {/* Home */}
          <Link
            to="/"
            className="flex items-center gap-2 text-gray-300 hover:text-orange-400 transition"
          >
            <FiHome />
            Home
          </Link>

          {/* Bookmarks */}
          <Link
            to="/bookmarks"
            className="flex items-center gap-2 text-gray-300 hover:text-orange-400 transition"
          >
            <FiBookmark />
            Bookmarks
          </Link>

          {/* IF USER LOGGED IN */}
          {user ? (
            <>
              <span className="text-orange-400 font-semibold">
                Hello, {user.name} 👋
              </span>

              <button
                onClick={handleLogout}
                className="bg-red-500 hover:bg-red-600 px-5 py-2 rounded-xl font-semibold flex items-center gap-2 transition duration-300 hover:scale-105"
              >
                <FiLogOut />
                Logout
              </button>
            </>
          ) : (
            <>
              {/* Login */}
              <Link
                to="/login"
                className="flex items-center gap-2 text-gray-300 hover:text-orange-400 transition"
              >
                <FiLogIn />
                Login
              </Link>

              {/* Register */}
              <Link
                to="/register"
                className="bg-orange-500 hover:bg-orange-600 px-5 py-2 rounded-xl font-semibold flex items-center gap-2 transition duration-300 hover:scale-105"
              >
                <FiUserPlus />
                Sign Up
              </Link>
            </>
          )}

        </div>
      </div>
    </nav>
  );
};

export default Navbar;