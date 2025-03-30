
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, PieChart, Plus, CreditCard, Settings, Camera, Edit } from 'lucide-react';
import { Slider } from './ui/slider';
import { Button } from './ui/button';

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
  onCameraPress: () => void;
}

const BottomNavigation: React.FC<BottomNavigationProps> = ({ onAddPress, onCameraPress }) => {
  const location = useLocation();
  const currentPath = location.pathname;
  const [inputMode, setInputMode] = useState(0);
  const [showOptions, setShowOptions] = useState(false);

  const handleAddButtonClick = () => {
    if (inputMode === 0) {
      onCameraPress();
    } else {
      onAddPress();
    }
  };

  const handleSliderChange = (value: number[]) => {
    setInputMode(value[0]);
  };

  const toggleOptions = () => {
    setShowOptions(!showOptions);
  };
  
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
          {showOptions && (
            <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 bg-white p-4 rounded-lg shadow-lg w-48 transition-all duration-300">
              <div className="flex items-center justify-between text-xs text-gray-500 mb-2">
                <span>Smart Scan</span>
                <span>Manual Input</span>
              </div>
              <Slider
                value={[inputMode]}
                min={0}
                max={1}
                step={1}
                onValueChange={handleSliderChange}
                className="mb-4"
              />
              <div className="text-center text-sm font-medium text-finance-primary mb-2">
                {inputMode === 0 ? 'Smart Scan' : 'Manual Input'}
              </div>
              <Button 
                onClick={handleAddButtonClick}
                className="w-full bg-finance-primary hover:bg-finance-primary/90 text-white"
              >
                {inputMode === 0 ? 
                  <><Camera className="w-4 h-4 mr-1" /> Smart Scan</> : 
                  <><Edit className="w-4 h-4 mr-1" /> Manual Entry</>
                }
              </Button>
            </div>
          )}
          <button
            onClick={toggleOptions}
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
