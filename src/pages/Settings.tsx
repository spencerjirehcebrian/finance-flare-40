
import React from 'react';
import { ChevronRight, Bell, Shield, Moon, CreditCard, HelpCircle, LogOut } from 'lucide-react';

interface SettingItemProps {
  icon: React.ReactNode;
  title: string;
  description?: string;
  onClick?: () => void;
}

const SettingItem: React.FC<SettingItemProps> = ({ icon, title, description, onClick }) => (
  <div 
    className="flex items-center justify-between p-4 border-b border-gray-100 hover:bg-gray-50 transition-colors cursor-pointer"
    onClick={onClick}
  >
    <div className="flex items-center">
      <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center mr-3">
        {icon}
      </div>
      <div>
        <p className="font-medium">{title}</p>
        {description && <p className="text-sm text-gray-500">{description}</p>}
      </div>
    </div>
    <ChevronRight className="w-5 h-5 text-gray-400" />
  </div>
);

const Settings: React.FC = () => {
  return (
    <div className="page-container">
      <h1 className="text-2xl font-bold mb-4">Settings</h1>
      
      <div className="bg-white rounded-xl shadow-sm overflow-hidden mb-6">
        <SettingItem 
          icon={<Bell className="w-5 h-5 text-finance-primary" />}
          title="Notifications"
          description="Manage your alerts and notifications"
        />
        
        <SettingItem 
          icon={<Shield className="w-5 h-5 text-finance-primary" />}
          title="Security"
          description="Protect your financial data"
        />
        
        <SettingItem 
          icon={<Moon className="w-5 h-5 text-finance-primary" />}
          title="Appearance"
          description="Dark mode and theme settings"
        />
        
        <SettingItem 
          icon={<CreditCard className="w-5 h-5 text-finance-primary" />}
          title="Payment Methods"
          description="Manage your cards and accounts"
        />
      </div>
      
      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <SettingItem 
          icon={<HelpCircle className="w-5 h-5 text-finance-primary" />}
          title="Help & Support"
          description="Get assistance and answers"
        />
        
        <SettingItem 
          icon={<LogOut className="w-5 h-5 text-finance-primary" />}
          title="Log Out"
          description="Sign out of your account"
        />
      </div>
      
      <p className="text-center text-gray-400 text-xs mt-6">
        Finance Flare v1.0.0
      </p>
    </div>
  );
};

export default Settings;
