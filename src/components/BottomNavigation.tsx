
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, PieChart, Plus, CreditCard, Settings } from 'lucide-react';

interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  to: string;
  isActive: boolean;
}

const NavItem: React.FC<NavItemProps> = ({ icon, label, to, isActive }) => (
  <Link to={to} className="flex flex-col items-center">
    <div className={`nav-icon ${isActive ? 'text-finance-primary' : 'text-gray-500'}`}>
      {icon}
    </div>
    <span className={`text-xs mt-1 ${isActive ? 'text-finance-primary font-medium' : 'text-gray-500'}`}>
      {label}
    </span>
  </Link>
);

interface BottomNavigationProps {
  onAddPress: () => void;
}

const BottomNavigation: React.FC<BottomNavigationProps> = ({ onAddPress }) => {
  const location = useLocation();
  const currentPath = location.pathname;
  
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 py-2 px-4 z-10">
      <div className="flex justify-between items-center max-w-md mx-auto">
        <NavItem
          icon={<Home className="w-6 h-6" />}
          label="Home"
          to="/"
          isActive={currentPath === '/'}
        />
        
        <NavItem
          icon={<PieChart className="w-6 h-6" />}
          label="Budget"
          to="/budget"
          isActive={currentPath === '/budget'}
        />
        
        <div className="relative -mt-8">
          <button
            onClick={onAddPress}
            className="w-14 h-14 rounded-full bg-finance-primary text-white flex items-center justify-center shadow-lg"
          >
            <Plus className="w-7 h-7" />
          </button>
        </div>
        
        <NavItem
          icon={<CreditCard className="w-6 h-6" />}
          label="Accounts"
          to="/accounts"
          isActive={currentPath === '/accounts'}
        />
        
        <NavItem
          icon={<Settings className="w-6 h-6" />}
          label="Settings"
          to="/settings"
          isActive={currentPath === '/settings'}
        />
      </div>
    </div>
  );
};

export default BottomNavigation;
