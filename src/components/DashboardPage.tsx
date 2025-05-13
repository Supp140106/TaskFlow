import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
    User,
    Settings,
    ChevronLeft,
    LayoutDashboard,
    ChevronRight,
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface MenuItem {
    label: string;
    to: string;
    icon: React.ReactNode;
}

const menuItems: MenuItem[] = [
    { label: 'Dashboard', to: 'dashboard', icon:<LayoutDashboard className='w-5 h-5' />},
    { label: 'Profile', to: 'profile', icon: <User className="w-5 h-5" /> },
    { label: 'Settings', to: 'settings', icon: <Settings className="w-5 h-5" /> },
];

const DashboardLayout = () => {
    const [isSidebarOpen, setIsSidebarOpen] = React.useState(true);

    const toggleSidebar = () => {
        setIsSidebarOpen((prev) => !prev);
    };

    return (
        <div className="flex h-screen">
            {/* Sidebar */}
            <aside
                className={cn(
                    'bg-gray-800 text-white flex flex-col transition-all duration-300 ease-in-out',
                    isSidebarOpen ? 'w-64' : 'w-16'
                )}
            >
                {/* Header with Logo and Toggle */}
                <div className="flex items-center justify-between p-4">
                    <div className="flex items-center space-x-2">
                        <img src="/taskflow.png" alt="Logo" className="w-10 h-10" />
                        <h2 className={cn(
                            'text-xl font-bold transition-all duration-300',
                            !isSidebarOpen && 'opacity-0 w-0 overflow-hidden'
                        )}>
                            TaskFlow
                        </h2>
                    </div>
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={toggleSidebar}
                        className="text-gray-400 hover:text-white"
                    >
                        {isSidebarOpen ? <ChevronLeft className="w-6 h-6" /> : <ChevronRight className="w-6 h-6" />}
                    </Button>
                </div>

                {/* Navigation Menu */}
                <nav className="flex-1 px-2 space-y-2">
                    {menuItems.map((item) => (
                        <NavLink
                            key={item.label}
                            to={item.to}
                            className={({ isActive }) =>
                                cn(
                                    'flex items-center p-2 rounded-md hover:bg-gray-700 transition-all',
                                    isActive ? 'bg-gray-700 text-white' : 'text-gray-300',
                                    !isSidebarOpen && 'justify-center'
                                )
                            }
                        >
                            {item.icon}
                            {isSidebarOpen && <span className="ml-3">{item.label}</span>}
                        </NavLink>
                    ))}
                </nav>

                {/* Avatar */}
                <div className="p-4 flex items-center space-x-3">
                    <Avatar className="h-10 w-10">
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    {isSidebarOpen && (
                        <span className="text-sm font-medium text-white">John Doe</span>
                    )}
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 p-6 bg-gray-100 overflow-y-auto">
                <Outlet />
            </main>
        </div>
    );
};

export default DashboardLayout;
