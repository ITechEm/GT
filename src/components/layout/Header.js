'use client';
import Bars2 from "@/components/icons/Bars2";
import Link from "next/link";
import {useState} from "react";
import Image from "next/image";

export default function Header() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
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
          <Link href={'#opentime'}>Öffnungszeiten</Link>
          <Link href={'/#about'}>Über Uns</Link>
          <Link href={'/#contact'}>Kontakt</Link>
          <Link href={'https://greek-tasty.order.app.hd.digital/menus'} className="bg-primary rounded text-white px-8 py-2 inknut">
        Online bestellen
        </Link>
        </div>
      )}
      <div className="hidden md:flex items-center justify-between">
      <Link href={'/'}>
            <Image src={'/logo.png'} width={90} height={90}/>
          </Link>  
        <nav className="flex items-center gap-4 inknut ml-15">            
                 
          <Link href={'/menu'}>Speisekarte</Link>
          <Link href={'#opentime'}>Öffnungszeiten</Link>
          <Link href={'/#about'}>Über Uns</Link>
          <Link href={'/#contact'}>Kontakt</Link>
        </nav>
        <nav className="flex items-center gap-4">
        <Link href={'https://greek-tasty.order.app.hd.digital/menus'} className="bg-primary rounded text-white px-8 py-2 inknut">
        Online bestellen
        </Link>
          
        </nav>
      </div>
    </header>
  );
}