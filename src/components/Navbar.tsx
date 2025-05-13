import { Link, NavLink, useLocation } from "react-router-dom";
import { Button } from "./ui/button";

export default function Navbar() {
  const baseLinkClasses = "transition text-gray-600 hover:text-black";
  const location = useLocation();
  const hideOnRoutes = ["/dashboard", "/dashboard/profile", "/dashboard/settings"];

  const shouldHideLayout = !hideOnRoutes.some((path) => location.pathname.startsWith(path));
  // shouldHideLayout will be true if the navbar SHOULD show

  return (
    <>
      {shouldHideLayout && (
        <nav className="bg-gray-100 shadow-md p-4 rounded-2xl fixed w-full z-50">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <NavLink to="/" className="text-xl font-bold tracking-wide text-gray-900">
              TaskFlow
            </NavLink>

            <div className="space-x-6 hidden md:flex items-center">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? `${baseLinkClasses} font-bold text-black` : baseLinkClasses
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/features"
                className={({ isActive }) =>
                  isActive ? `${baseLinkClasses} font-bold text-black` : baseLinkClasses
                }
              >
                Features
              </NavLink>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? `${baseLinkClasses} font-bold text-black` : baseLinkClasses
                }
              >
                About
              </NavLink>
              <Button><Link to="/login">Login</Link></Button>
            </div>
          </div>
        </nav>
      )}
    </>
  );
}
