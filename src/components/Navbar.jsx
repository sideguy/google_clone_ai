import { FiKey, FiSettings } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
    const [showDropdown, setShowDropdown] = useState(false);

    return (
        <nav className="flex justify-between items-center px-6 py-3 bg-[#0d0d0d] border-b border-gray-700 text-white">
            {/* Left - Logo */}
            <Link to="/" className="text-xl font-semibold">
                <span className="text-white">Google </span>
                <span className="text-blue-400">AI Studio</span>
            </Link>

            {/* Right - Menu Items */}
            <div className="flex items-center gap-6">
                <button className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#2c2c2c] hover:bg-[#3a3a3a] text-sm">
                    <FiKey />
                    Get API key
                </button>

                <span className="font-semibold">Studio</span>
                <Link to="/dashboard" className="text-white hover:text-blue-400">Dashboard</Link>
                <a href="#" className="text-gray-300 hover:text-white">Documentation</a>

                <FiSettings className="cursor-pointer hover:text-blue-400" />

                {/* User Dropdown */}
                <div className="relative">
                    <div 
                        className="w-8 h-8 bg-cyan-600 text-white font-bold rounded-full flex items-center justify-center cursor-pointer"
                        onClick={() => setShowDropdown(!showDropdown)}
                    >
                        S
                    </div>
                    
                    {/* Dropdown Menu */}
                    {showDropdown && (
                        <div className="absolute right-0 mt-2 w-48 bg-[#1e1e1e] rounded-md shadow-lg py-1 z-50 border border-gray-700">
                            <div className="px-4 py-2 text-sm text-gray-300 border-b border-gray-700">
                                <p className="font-medium">User</p>
                            </div>
                            <a 
                                href="#" 
                                className="block px-4 py-2 text-sm text-gray-300 hover:bg-[#2a2a2a]"
                            >
                                Switch account
                            </a>
                            <a 
                                href="#" 
                                className="block px-4 py-2 text-sm text-gray-300 hover:bg-[#2a2a2a]"
                            >
                                Sign out
                            </a>
                            <div className="px-4 py-2 text-xs text-gray-500 border-t border-gray-700">
                                <a href="#" className="hover:underline">Privacy Policy</a> · <a href="#" className="hover:underline">Terms of Service</a>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
}