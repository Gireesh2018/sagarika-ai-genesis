
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';

interface MobileDropdownProps { 
  title: string; 
  items: {label: string; path: string}[];
  onClick?: () => void;
}

const MobileDropdown = ({ title, items, onClick }: MobileDropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="py-2">
      <button 
        className="flex items-center justify-between w-full font-medium text-sagarika-navy hover:text-sagarika transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        {title}
        <ChevronDown className={`h-4 w-4 transition-transform ${isOpen ? 'transform rotate-180' : ''}`} />
      </button>
      
      {isOpen && (
        <div className="pl-4 mt-2 flex flex-col space-y-2">
          {items.map((item, index) => (
            <Link 
              key={index}
              to={item.path} 
              className="text-sm py-1 font-medium text-sagarika-navy hover:text-sagarika transition-colors"
              onClick={onClick}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default MobileDropdown;
