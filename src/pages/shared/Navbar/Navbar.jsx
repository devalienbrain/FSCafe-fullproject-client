import { Link } from "react-router-dom";
import { FaCartPlus } from "react-icons/fa6";
import { AuthContext } from "../../../providers/AuthProvider";
import useCart from "../../../hooks/useCart";
import useAdmin from "../../../hooks/useAdmin";
import useTheme from "../../../hooks/useTheme";
import { useContext } from "react";
import ThemeToggle from "../../../components/ThemeToggle";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isAdmin] = useAdmin();
  const [toggleTheme, theme] = useTheme();

  const [cart, refetch] = useCart();
  const handleLogOut = () => {
    logOut();
  };
  const navOptions = (
    <>
      <li>
        {user && isAdmin && (
          <Link to="/dashboard/adminHome">Admin Dashboard</Link>
        )}
        {user && !isAdmin && (
          <Link to="/dashboard/userHome">User Dashboard</Link>
        )}
      </li>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/menu">Our Menu</Link>
      </li>
      <li>
        <Link to="/order/salad">Order Food</Link>
      </li>
      <li>{user ? "" : <Link to="/login">Login</Link>}</li>
    </>
  );

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
        <ThemeToggle></ThemeToggle>
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
          <Link to="/signup">
            <p className="p-3  text-white font-semibold text-base shadow-lg hover:shadow-2xl mr-3">
              Join with us
            </p>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
