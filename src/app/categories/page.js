'use client';
import {useEffect, useState} from "react";


export default function CategoriesPage() {

  const [setCategories] = useState([]);

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <section className="mt-8 max-w-2xl mx-auto">
     
      <form className="mt-8">
        <div className="flex gap-2 items-end">
          
          <div className="pb-2 flex gap-2">
            
           
          </div>
        </div>
      </form>
      <div>
        <h2 className="mt-8 text-sm text-gray-500">Existing categories</h2>
       
          <div
            key={c._id}
            className="bg-gray-100 rounded-xl p-2 px-4 flex gap-1 mb-1 items-center">
            <div className="grow">
              {c.name}
            </div>
            
          </div>
        
      </div>
    </section>
  );
}