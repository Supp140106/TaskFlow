import { NavLink } from "react-router-dom";
import { Home, Settings, User } from "lucide-react";

const Sidebar: React.FC = () => {
  const linkClasses = ({ isActive }: { isActive: boolean }) =>
    isActive ? "text-blue-400 font-semibold" : "text-white";

  return (
    <aside className="h-screen w-64 bg-gray-800 text-white p-6">
      <h2 className="text-2xl font-bold mb-8">My App</h2>
      <nav className="flex flex-col gap-4">
        <NavLink to="/" end className={linkClasses}>
          <div className="flex items-center gap-2">
            <Home size={18} />
            Dashboard
          </div>
        </NavLink>
        <NavLink to="/profile" className={linkClasses}>
          <div className="flex items-center gap-2">
            <User size={18} />
            Profile
          </div>
        </NavLink>
        <NavLink to="/settings" className={linkClasses}>
          <div className="flex items-center gap-2">
            <Settings size={18} />
            Settings
          </div>
        </NavLink>
      </nav>
    </aside>
  );
};

export default Sidebar;
