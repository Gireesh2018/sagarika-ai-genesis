
import React from 'react';
import { Link } from 'react-router-dom';

interface NavLinkProps {
  to: string;
  children: React.ReactNode;
}

const NavLink = ({ to, children }: NavLinkProps) => (
  <Link 
    to={to} 
    className="font-medium text-sagarika-navy hover:text-sagarika transition-colors"
  >
    {children}
  </Link>
);

export default NavLink;
