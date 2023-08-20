import { ReactNode } from 'react';

interface FooterLinksProps {
  children: ReactNode;
  sameColumn?: boolean;
}

export default function FooterLinksRoot({children, sameColumn}:FooterLinksProps) {
  return (
    <>
      {sameColumn ? (
        <div className='flex flex-wrap gap-12'>
          <div className="flex-1 flex flex-col gap-5">
            {children}  
          </div>
        </div>
      ) : (
        <div className='flex flex-wrap gap-12'>
          {children}
        </div>
      )}
    </>
  );
};
