import { Link } from "react-router-dom";

import {
  FiHome,
  FiLogIn,
  FiUserPlus,
  FiBookmark,
} from "react-icons/fi";

const Navbar = () => {
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

        </div>
      </div>
    </nav>
  );
};

export default Navbar;