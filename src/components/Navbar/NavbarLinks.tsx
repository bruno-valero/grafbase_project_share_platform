import { NavLinks } from '@/constants/index';
import Link from 'next/link';



export default function NavbarLinks() {
  return (
    <ul className='xl:flex hidden text-small gap-7'>
      {NavLinks.map(link => (
        <Link href={link.href} key={link.key}>{link.text}</Link>
      ))}
    </ul>
  );
};
