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
      <SectionHeaders className="flex center text-4xl neucha bold"
            mainHeader={<a className="text-center">Salate</a>} 
      />

      <div className="grid mt-8 sm:grid-cols-3 gap-4">
          <div className="bg-gray-200 p-4 rounded-lg group hover:bg-white hover:shadow-md hover:shadow-black/25 transition-all">
            <div className="item-center">
              <img src={'/image_header_rabatt.png'} className="max-h-auto block mx-auto" alt="pizza"/>
            </div>
          </div>
          <div className="bg-gray-200 p-4 rounded-lg group hover:bg-white hover:shadow-md hover:shadow-black/25 transition-all">
            <div className="item-center">
              <img src={'/image_header_rabatt.png'} className="max-h-auto block mx-auto" alt="pizza"/>
            </div>
          </div>
          <div className="bg-gray-200 p-4 rounded-lg group hover:bg-white hover:shadow-md hover:shadow-black/25 transition-all">
            <div className="item-center">
              <img src={'/image_header_rabatt.png'} className="max-h-auto block mx-auto" alt="pizza"/>
            </div>
          </div>
        </div>
    </section>
  );
}