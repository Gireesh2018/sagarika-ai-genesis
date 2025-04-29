
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  LayoutDashboard,
  Palette, 
  FileText, 
  Component, 
  Link as LinkIcon, 
  Calendar,
  Settings,
  Image,
  Columns3,
  ChevronDown,
  ChevronRight
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { 
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent
} from '@/components/ui/collapsible';

const MenuItem = ({ icon: Icon, label, to, active = false }) => {
  return (
    <Link to={to} className="w-full">
      <Button 
        variant="ghost" 
        className={cn(
          "w-full justify-start mb-1",
          active ? "bg-muted" : ""
        )}
      >
        <Icon className="mr-2 h-5 w-5" />
        {label}
      </Button>
    </Link>
  );
};

const MenuGroup = ({ icon: Icon, label, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <Collapsible
      open={isOpen}
      onOpenChange={setIsOpen}
      className="w-full space-y-2 mb-1"
    >
      <CollapsibleTrigger asChild>
        <Button 
          variant="ghost" 
          className="w-full justify-between"
        >
          <span className="flex items-center">
            <Icon className="mr-2 h-5 w-5" />
            {label}
          </span>
          {isOpen ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
        </Button>
      </CollapsibleTrigger>
      <CollapsibleContent className="pl-8 space-y-1">
        {children}
      </CollapsibleContent>
    </Collapsible>
  );
};

const AdminSidebar = () => {
  return (
    <div className="h-full w-64 bg-white shadow-sm flex flex-col">
      <div className="p-4 border-b">
        <h2 className="text-xl font-semibold text-sagarika-navy">
          <span className="text-sagarika">SAGARIKA</span> ADMIN
        </h2>
      </div>
      
      <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
        <MenuItem icon={LayoutDashboard} label="Dashboard" to="/admin" />
        
        <MenuGroup icon={FileText} label="Pages">
          <MenuItem icon={FileText} label="All Pages" to="/admin/pages" />
          <MenuItem icon={FileText} label="Add New" to="/admin/pages/new" />
        </MenuGroup>
        
        <MenuGroup icon={Component} label="Components">
          <MenuItem icon={Component} label="All Components" to="/admin/components" />
          <MenuItem icon={Component} label="Add New" to="/admin/components/new" />
        </MenuGroup>
        
        <MenuGroup icon={Columns3} label="Sections">
          <MenuItem icon={Columns3} label="All Sections" to="/admin/sections" />
          <MenuItem icon={Columns3} label="Add New" to="/admin/sections/new" />
        </MenuGroup>
        
        <MenuGroup icon={LinkIcon} label="Navigation">
          <MenuItem icon={LinkIcon} label="Menu Structure" to="/admin/navigation" />
        </MenuGroup>
        
        <MenuItem icon={Image} label="Media Library" to="/admin/media" />
        
        <MenuItem icon={Calendar} label="Social Calendar" to="/admin/social-calendar" />
        
        <MenuItem icon={Palette} label="Theme Manager" to="/admin/theme-manager" />
        
        <MenuItem icon={Settings} label="Settings" to="/admin/settings" />
      </nav>
    </div>
  );
};

export default AdminSidebar;
