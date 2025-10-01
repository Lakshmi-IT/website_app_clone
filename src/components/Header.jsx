import {
  Phone,
  MapPin,
  Menu,
  LogIn,
  LogOut,
  UserPlus,
  Home,
  Info,
  Briefcase,
  Mail,
  ListOrdered,
  ShoppingCart,
  User,
  Package,
  Bell,
  PhoneCall,
  FileText,
  Shield,
  Headphones
} from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import logo from "../assets/logobanner.jpeg";
import { toast } from "react-toastify";
import avatar from "../assets/avatar.png"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [mobile, setMobile] = useState("");
  const [name, setName] = useState("");

  const [tokenPresent, setTokenPresent] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

const navItems = [
  { name: "Home", path: "/", icon: <Home className="h-5 w-5" /> },
  { name: "About Us", path: "/about", icon: <Info className="h-5 w-5" /> },
  { name: "Profile", path: "/ProfilePage", icon: <User className="h-5 w-5" /> },
  { name: "Place Order", path: "/placeorder", icon: <ShoppingCart className="h-5 w-5" /> },
  { name: "Your Orders", path: "/yourorders", icon: <Package className="h-5 w-5" /> },
  { name: "Price List", path: "/priceList", icon: <ListOrdered className="h-5 w-5" /> },
  { name: "Help & Support", path: "/contact", icon: <Headphones className="h-5 w-5" /> },
  { name: "Privacy Policy", path: "/privacy", icon: <Shield className="h-5 w-5" /> },
  { name: "Terms and Conditions", path: "/TermsandCondition", icon: <FileText className="h-5 w-5" /> },
];

  // Check token on mount
  useEffect(() => {
    const token = localStorage.getItem("token");
    setTokenPresent(token);
    setIsLoggedIn(!!token);
  }, []);




  useEffect(() => {
    const fetchUserData = () => {
      try {
        const storedMobile = localStorage.getItem("mobile");
        const storedName = localStorage.getItem("name");

        if (storedMobile) setMobile(storedMobile);
        if (storedName) setName(storedName);
      } catch (error) {
        console.error("Error fetching localStorage data:", error);
      }
    };

    fetchUserData();
  }, []);

  // Handle logout
  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    navigate("/LoginPage"); // redirect to login after logout
    toast.success("✅ Logout successfull!");
  };

  return (
    <header className="bg-background shadow-card sticky top-0 z-50">
      <div className="container mx-auto px-4 py-0">
        <div className="flex items-center justify-between">
          {/* Mobile Menu Button */}
          <button
            type="button"
            className="lg:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-5 w-6" />
          </button>

          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img src={logo} alt="logo" className="w-[160px] h-[50px]" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center gap-2 font-medium transition hover:text-primary ${location.pathname === item.path
                  ? "text-primary"
                  : "text-foreground"
                  }`}
              >
                {item.icon}
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Mobile Right Side Icons */}
          <div className="flex items-center justify-center">
            <button type="button" className="lg:hidden p-2">
              <Bell className="h-5 w-5" />
            </button>

            <a href="tel:+918125423366">
              <button type="button" className="lg:hidden p-2">
                <PhoneCall className="h-5 w-5" />
              </button>
            </a>
          </div>
        </div>

        {/* ✅ Mobile Sidebar */}
        {isMenuOpen && (
          <div className="lg:hidden fixed inset-0 z-50 flex">
            {/* Sidebar */}
            <div className="w-64 bg-white h-full shadow-lg flex flex-col">
              {/* Profile Section */}
              <div className="bg-[#042048] text-white p-4 flex flex-col items-center rounded-br-2xl">
                <div className="w-[60px] h-[60px] rounded-full bg-white flex items-center justify-center text-blue-900 font-bold text-xl">
                  <img src={avatar} alt="avatar" className='w-[40px] h-[40px]' />

                </div>
                <h2 className="mt-2 font-bold text-lg">Welcome {name || "Guest"}!</h2>
                <p className="text-sm">{mobile || "Not Available"}</p>
              </div>

              {/* Menu Items */}
              <nav className="mt-4 flex flex-col space-y-1 px-2">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-blue-100 transition ${location.pathname === item.path
                      ? "text-blue-600 font-semibold bg-blue-50"
                      : "text-gray-800"
                      }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.icon}
                    <span>{item.name}</span>
                  </Link>
                ))}
              </nav>
            </div>

            {/* Overlay */}
            <div
              className="flex-1 bg-black bg-opacity-50"
              onClick={() => setIsMenuOpen(false)}
            ></div>
          </div>
        )}

        {/* ✅ Bottom Navigation for Mobile (App-like) */}
        <nav className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-50">
          <div className="flex justify-around items-center py-2">
            <Link
              to="/"
              className={`flex flex-col items-center text-xs ${location.pathname === "/"
                ? "text-blue-600 font-semibold"
                : "text-gray-500"
                }`}
            >
              <Home className="h-5 w-5" />
              <span>Home</span>
            </Link>

            <Link
              to="/placeorder"
              className={`flex flex-col items-center text-xs ${location.pathname === "/placeorder"
                ? "text-blue-600 font-semibold"
                : "text-gray-500"
                }`}
            >
              <ShoppingCart className="h-5 w-5" />
              <span>Place Order</span>
            </Link>

            <Link
              to="/yourorders"
              className={`flex flex-col items-center text-xs ${location.pathname === "/yourorders"
                ? "text-blue-600 font-semibold"
                : "text-gray-500"
                }`}
            >
              <Package className="h-5 w-5" />
              <span>My Orders</span>
            </Link>

            <Link
              to="/contact"
              className={`flex flex-col items-center text-xs ${location.pathname === "/contact"
                ? "text-blue-600 font-semibold"
                : "text-gray-500"
                }`}
            >
              <Info className="h-5 w-5" />
              <span>Help</span>
            </Link>

            <Link
              to={"/ProfilePage"}
              className={`flex flex-col items-center text-xs ${location.pathname === "/ProfilePage" ||
                location.pathname === "/LoginPage"
                ? "text-blue-600 font-semibold"
                : "text-gray-500"
                }`}
            >
              <User className="h-5 w-5" />
              <span>Account</span>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
