'use client';
import SectionHeaders from "@/components/layout/SectionHeaders";
import Image from "next/image";
import {useEffect, useState} from "react";

export default function HomeMenu() {
  const [setBestSellers] = useState([]);
  useEffect(() => {
    fetch('/api/menu-items').then(res => {
      res.json().then(menuItems => {
        setBestSellers(menuItems.slice(-3));
      });
    });
  }, []);
  return (
    <section className="">
        <div className="text-center mb-8 mt-12 ">
          <SectionHeaders
            subHeader={'Schauen Sie sich'}
            mainHeader={
              <a>Unsere <span className="text-primary">Bestseller</span> an</a>
            } />
        </div>
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-gray-200 p-4 rounded-lg group hover:bg-white hover:shadow-md hover:shadow-black/25 transition-all">
            <div className="item-center">
              <img src={'/food_1.png'} className="max-h-auto block mx-auto" alt="pizza"/>
            </div>
          </div>
          <div className="bg-gray-200 p-4 rounded-lg group hover:bg-white hover:shadow-md hover:shadow-black/25 transition-all">
            <div className="item-center">
              <img src={'/food_1.png'} className="max-h-auto block mx-auto" alt="pizza"/>
            </div>
          </div>
          <div className="bg-gray-200 p-4 rounded-lg group hover:bg-white hover:shadow-md hover:shadow-black/25 transition-all">
            <div className="item-center">
              <img src={'/food_1.png'} className="max-h-auto block mx-auto" alt="pizza"/>
            </div>
          </div>
        </div>
      <div className="relative mt-14 rounded">
        <Image src={'/image_header_rabatt.png'} width={870} height={870}  alt={'mianpage'} />
      </div>
    </section>
  );
}