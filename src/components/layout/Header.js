'use client';
import {CartContext} from "@/components/AppContext";
import Bars2 from "@/components/icons/Bars2";
import ShoppingCart from "@/components/icons/ShoppingCart";
import {signOut, useSession} from "next-auth/react";
import Link from "next/link";
import {useContext, useState} from "react";
import Image from "next/image";

function AuthLinks({ status, userName }) {
  if (status === 'authenticated') {
    return (
      <>
        <Link href={'/profile'} className="whitespace-nowrap">
          <h1 className="text-black inknut trimmedbutton">Hi, {userName}</h1>
        </Link>
        <button
          onClick={() => signOut({ callbackUrl: '/' })}
          className="bg-primary rounded text-white px-8 py-2 inknut">
          Logout
        </button>
      </>
    );
  }
  if (status === 'unauthenticated') {
    return (
      <>
        {/* <Link href={'/login'} className="text-black inknut">Login</Link> */}
        <Link href={'https://greek-tasty.order.app.hd.digital/menus'} className="bg-primary rounded text-white px-8 py-2 inknut">
        Online bestellen
        </Link>
      </>
    );
  }
  return null; // Handle the default case
}

export default function Header() {
  const session = useSession();
  const status = session?.status;
  const userData = session.data?.user;
  let userName = userData?.name || userData?.email;
  const {cartProducts} = useContext(CartContext);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  if (userName && userName.includes(' ')) {
    userName = userName.split(' ')[0];
  }
  
  return (
    
    <header>
      <div className="flex items-center md:hidden justify-between">
      <Link className= "" href={'/'}>
            <Image src={'/logo.png'} width={70} height={70}/>
          </Link> 
        <div className="flex gap-8 items-center">
          <button
            className="p-1 border"
            onClick={() => setMobileNavOpen(prev => !prev)}>
            <Bars2 />
          </button>
        </div>
      </div>
      {mobileNavOpen && (
        <div
          onClick={() => setMobileNavOpen(false)}
          className="md:hidden p-4 bg-gray-200 rounded-lg mt-2 flex flex-col gap-2 text-center inknut">
          
          <Link href={'/menu'}>Speisekarte</Link>
          <Link href={'/menu'}>Öffnungszeiten</Link>
          <Link href={'/#about'}>Über Uns</Link>
          <Link href={'/#contact'}>Kontakt</Link>
          <AuthLinks status={status} userName={userName} maxLength={10}/>
        </div>
      )}
      <div className="hidden md:flex items-center justify-between">
      <Link href={'/'}>
            <Image src={'/logo.png'} width={90} height={90}/>
          </Link>  
        <nav className="flex items-center gap-4 inknut ml-15">            
                 
          <Link href={'/menu'}>Speisekarte</Link>
          <Link href={'/menu'}>Öffnungszeiten</Link>
          <Link href={'/#about'}>Über Uns</Link>
          <Link href={'/#contact'}>Kontakt</Link>
        </nav>
        <nav className="flex items-center gap-4">
          <AuthLinks status={status} userName={userName}  maxLength={10}/>
          
        </nav>
      </div>
    </header>
  );
}