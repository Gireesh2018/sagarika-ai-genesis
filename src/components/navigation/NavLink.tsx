
import React from 'react';
import { Link } from 'react-router-dom';

interface NavLinkProps {
  to: string;
  children: React.ReactNode;
  className?: string;
}

const NavLink = ({ to, children, className = "" }: NavLinkProps) => (
  <Link 
    to={to} 
    className={`font-medium text-sagarika-navy hover:text-sagarika transition-colors ${className}`}
  >
    {children}
  </Link>
);

export default NavLink;
