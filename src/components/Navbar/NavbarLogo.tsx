import Image from 'next/image';
import Link from 'next/link';



export default function NavbarLogo() {
  return (
    <div>
      <Link href='/'>
        <Image src='/logo.svg' width={115} height={115} alt='Flexível' />
      </Link>
    </div>
  );
};
