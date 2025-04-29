
import React from 'react';
import { Link } from 'react-router-dom';

interface MobileNavLinkProps {
  to: string;
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

const MobileNavLink = ({ to, children, onClick, className = "" }: MobileNavLinkProps) => (
  <Link 
    to={to} 
    className={`font-medium text-sagarika-navy hover:text-sagarika transition-colors py-2 block ${className}`}
    onClick={onClick}
  >
    {children}
  </Link>
);

export default MobileNavLink;
