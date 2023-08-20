'use client'

// import { useSession } from 'next-auth/react';
import Link from 'next/link';
import AuthProviders from '../AuthProviders/index';




export default function NavbarUser() {
  // const {data: session} = useSession();
  const session = null;
  return (
    <div className="flexCenter gap-4">
      {session ? (
        <>
          UserPhoto

          <Link href='/create-project'>
            Compartilhe seu trabalho
          </Link>
        </>
      ) : (
        <AuthProviders />
      )}
    </div>
  );
};
