import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FiSun } from "react-icons/fi";
import { FaCartPlus } from "react-icons/fa6";
import { MdDarkMode } from "react-icons/md";
import { AuthContext } from "../../../providers/AuthProvider";
import useCart from "../../../hooks/useCart";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const [cart, refetch] = useCart();
  const handleLogOut = () => {
    logOut();
  };
  const navOptions = (
    <>
      <li>
        <Link to="/dashboard">Dashboard</Link>
      </li>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/menu">Our Menu</Link>
      </li>
      <li>
        <Link to="/order">Order Food</Link>
      </li>
      <li>{user ? "" : <Link to="/login">Login</Link>}</li>
    </>
  );

  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    const html = document.documentElement;
    if (theme === "light") {
      html.setAttribute("data-theme", "dark");
      html.classList.remove("light");
      html.classList.add("dark");
      setTheme("dark");
      localStorage.setItem("theme", "dark");
    } else {
      html.setAttribute("data-theme", "light");
      html.classList.remove("dark");
      html.classList.add("light");
      setTheme("light");
      localStorage.setItem("theme", "light");
    }
    // console.log("Previous Theme:", theme);
  };

  useEffect(() => {
    const localStorageTheme = localStorage.getItem("theme") || "light";
    setTheme(localStorageTheme);
    const html = document.documentElement;
    html.setAttribute("data-theme", localStorageTheme);
    html.classList.add(localStorageTheme);
    // console.log("Local Storage Theme:", localStorageTheme);
  }, []);

  return (
    <div className="navbar fixed z-10 bg-opacity-20 bg-black text-red-600 font-semibold container mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navOptions}
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-2xl font-bold">FSCafe</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navOptions}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <div className="px-3 text-xs flex justify-center items-center gap-7">
            <div className="justify-start flex items-center gap-2">
              <div className="text-3xl">
                <FaCartPlus />
              </div>
              <div className="font-black">My cart: {cart.length}</div>
            </div>
            <div className="justify-end flex items-center gap-2">
              <div className="text-right">
                <p>{user?.displayName}</p>
                <button onClick={handleLogOut}>Log out</button>
              </div>
              <img className="w-7 h-7 rounded-full" src={user?.photoURL} />
            </div>
          </div>
        ) : (
          <p className="p-3  text-white font-semibold text-base shadow-lg hover:shadow-2xl mr-3">
            Join with us
          </p>
        )}
        <div
          onClick={toggleTheme}
          className={`px-0 my-1 rounded-2xl ${
            theme === "light" ? "bg-black" : "bg-white"
          }`}
        >
          <div
            className={`mr-3 rounded-full shadow-2xl w-3 h-3 bg-black ${
              theme === "light" ? "hidden" : ""
            }`}
          ></div>
          <div
            className={`ml-3 rounded-full shadow-2xl w-3 h-3 bg-white ${
              theme === "dark" ? "hidden" : ""
            }`}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
