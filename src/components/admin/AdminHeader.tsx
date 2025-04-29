
import React from 'react';
import { Bell, Settings, User } from 'lucide-react';
import { Button } from '@/components/ui/button';

const AdminHeader = () => {
  return (
    <header className="bg-white shadow-sm h-16">
      <div className="flex items-center justify-between h-full px-4">
        <h1 className="text-xl font-bold text-sagarika-navy">Admin Dashboard</h1>
        
        <div className="flex items-center space-x-3">
          <Button variant="ghost" size="icon">
            <Bell className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <Settings className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <User className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default AdminHeader;
