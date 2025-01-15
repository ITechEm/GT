'use client';
import {useEffect} from "react";
import Image from "next/image";
import SectionHeaders from "@/components/layout/SectionHeaders";

export default function MenuPage() {
  useEffect(() => {
    fetch('/api/menu').then(res => {
      res.json().then(menupage => setMenuPage(menupage))
    });
  }, []);
  return (
    <section className="mt-8 text-center">

      <div className="grid mt-8 sm:grid-cols-3 gap-4">
          <div className="bg-gray-200 p-4 rounded-lg group hover:bg-white hover:shadow-md hover:shadow-black/25 transition-all">
            <SectionHeaders
              menuHeader={<a className="text-center text-xl">IMBISS</a>} 
            />
              <div className="item-center mt-2">
                <img src={'/imbiss.png'} className="max-h-auto block mx-auto" alt="pizza"/>
              </div>
          </div>
          <div className="bg-gray-200 p-4 rounded-lg group hover:bg-white hover:shadow-md hover:shadow-black/25 transition-all">
            <SectionHeaders
              menuHeader={<a className="text-center text-xl">GYROS</a>} 
            />
              <div className="item-center mt-2">
                <img src={'/gyros.png'} className="max-h-auto block mx-auto" alt="pizza"/>
              </div>
          </div>
          <div className="bg-gray-200 p-4 rounded-lg group hover:bg-white hover:shadow-md hover:shadow-black/25 transition-all">
            <SectionHeaders
              menuHeader={<a className="text-center text-xl">pita gerollt</a>} 
            />
              <div className="item-center mt-2">
                <img src={'/pita.png'} className="max-h-auto block mx-auto" alt="pizza"/>
              </div>
          </div>
          <div className="bg-gray-200 p-4 rounded-lg group hover:bg-white hover:shadow-md hover:shadow-black/25 transition-all">
            <SectionHeaders
              menuHeader={<a className="text-center text-xl">burger</a>} 
            />
              <div className="item-center mt-2">
                <img src={'/burger.png'} className="max-h-auto block mx-auto" alt="pizza"/>
              </div>
          </div>
          <div className="bg-gray-200 p-4 rounded-lg group hover:bg-white hover:shadow-md hover:shadow-black/25 transition-all">
            <SectionHeaders
              menuHeader={<a className="text-center text-xl">schnitzel</a>} 
            />
              <div className="item-center mt-2">
                <img src={'/schnitzel.png'} className="max-h-auto block mx-auto" alt="pizza"/>
              </div>
          </div>
          <div className="bg-gray-200 p-4 rounded-lg group hover:bg-white hover:shadow-md hover:shadow-black/25 transition-all">
            <SectionHeaders
              menuHeader={<a className="text-center text-xl">grill</a>} 
            />
              <div className="item-center mt-2">
                <img src={'/grill.png'} className="max-h-auto block mx-auto" alt="pizza"/>
              </div>
          </div>
          <div className="bg-gray-200 p-4 rounded-lg group hover:bg-white hover:shadow-md hover:shadow-black/25 transition-all">
            <SectionHeaders
              menuHeader={<a className="text-center text-xl">pizza</a>} 
            />
              <div className="item-center mt-2">
                <img src={'/pizza.png'} className="max-h-auto block mx-auto" alt="pizza"/>
              </div>
          </div>
          <div className="bg-gray-200 p-4 rounded-lg group hover:bg-white hover:shadow-md hover:shadow-black/25 transition-all">
            <SectionHeaders
              menuHeader={<a className="text-center text-xl">Salate & Saucen</a>} 
            />
              <div className="item-center mt-2">
                <img src={'/salat_sauce.png'} className="max-h-auto block mx-auto" alt="pizza"/>
              </div>
          </div>
          <div className="bg-gray-200 p-4 rounded-lg group hover:bg-white hover:shadow-md hover:shadow-black/25 transition-all">
            <SectionHeaders
              menuHeader={<a className="text-center text-xl">Kalte Getranke</a>} 
            />
              <div className="item-center mt-2">
                <img src={'/drinks.png'} className="max-h-auto block mx-auto" alt="pizza"/>
              </div>
          </div>
        </div>
        
    </section>
  );
}