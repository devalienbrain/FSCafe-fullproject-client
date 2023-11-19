import {
  FaAd,
  FaBook,
  FaCalendar,
  FaEnvelope,
  FaHome,
  FaList,
  FaSearch,
  FaShoppingCart,
  FaUsers,
  FaUtensils,
} from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
// import useAdmin from "../hooks/useAdmin";
import Navbar from "../pages/shared/Navbar/Navbar";
import useCart from "../hooks/useCart";

const Dashboard = () => {
  const [cart] = useCart();

  // // TODO: get isAdmin value from the database
  // const [isAdmin] = useAdmin();

  return (
    <>
      <div>
        <Navbar></Navbar>
      </div>
      <div className="flex">
        {/* dashboard side bar */}
        <div className="w-64 min-h-screen bg-lime-100 text-red-700 text-xl font-semibold pt-20">
          <div className="p-8">
            <p className="text-2xl font-black">FS Cafe</p>
            <p className="italic text-sm">e a t f r e s h</p>
          </div>
          <ul className="menu p-4">
            {/* {isAdmin ? (
            <>
              <li>
                <NavLink to="/dashboard/adminHome">
                  <FaHome></FaHome>
                  Admin Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/addItems">
                  <FaUtensils></FaUtensils>
                  Add Items
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/manageItems">
                  <FaList></FaList>
                  Manage Items
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/bookings">
                  <FaBook></FaBook>
                  Manage Bookings
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/users">
                  <FaUsers></FaUsers>
                  All Users
                </NavLink>
              </li>
            </>
          ) : ( */}
            <>
              <li>
                <NavLink to="/dashboard/userHome">
                  <FaHome></FaHome>
                  <p className="hover:underline">User Home</p>
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/reservation">
                  <FaCalendar></FaCalendar>
                  <p className="hover:underline">Reservation</p>
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/cart">
                  <FaShoppingCart></FaShoppingCart>
                  <p className="hover:underline">My Cart</p>
                  {/* ({cart.length}) */}
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/review">
                  <FaAd></FaAd>
                  <p className="hover:underline">Add a Review</p>
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/bookings">
                  <FaList></FaList>
                  <p className="hover:underline">My Bookings</p>
                </NavLink>
              </li>
            </>
            {/* )} */}
            {/* shared nav links */}
            <div className="divider"></div>
            <li>
              <NavLink to="/">
                <FaHome></FaHome>
                <p className="hover:underline">Home</p>
              </NavLink>
            </li>
            <li>
              <NavLink to="/order/salad">
                <FaSearch></FaSearch>
                <p className="hover:underline">Menu</p>
              </NavLink>
            </li>
            <li>
              <NavLink to="/order/contact">
                <FaEnvelope></FaEnvelope>
                <p className="hover:underline">Contact</p>
              </NavLink>
            </li>
          </ul>
        </div>
        {/* dashboard content */}
        <div className="flex-1 p-8">
          <Outlet></Outlet>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
