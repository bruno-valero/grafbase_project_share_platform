import { ReactNode } from 'react';

interface FooterProps {
  children?: ReactNode;
  Bottom?: ReactNode;
}

export default function FooterRoot({ children, Bottom }:FooterProps) {
  return (
    <div className='flexStart footer'>
      <div className="flex flex-col gap-12">
        {children}
      </div>
      {Bottom && Bottom}
    </div>
  );
};
