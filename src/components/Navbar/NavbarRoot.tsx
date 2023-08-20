import { ReactNode } from 'react';

interface NavbarProps {
  children?: ReactNode
}

export default function NavbarRoot({ children }:NavbarProps) {
  return (
    <nav className='flexBetween navbar'>
      <div className='flex flex-1 flex-start gap-10'>
        {children}
      </div>
    </nav>
  );
};
