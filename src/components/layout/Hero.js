import Right from "@/components/icons/Right";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="hero md:mt-4">
      <div className="py-8 md:py-12 relative">
        <h2 className="text-5xl neucha ">
        Eine Reise in die Schätze der griechischen <span></span>
          <span className="text-primary neucha">
          Küche!
          </span>
        </h2>
        <p className="my-6 text-graylight">
        Sie möchten nicht ausgehen? Dank unseres Mitrahmenservices können Sie unsere köstlichen Gerichte zu Hause genießen.
        </p>
        <div className="flex gap-4 text-sm ">
          <button className="flex bg-primary uppercase items-center text-white rounded inknut">
            <a 
              href='https://greek-tasty.order.app.hd.digital/menus'> 
              Jetzt bestellen
              </a>
            
          </button>
       
        </div>
      </div>
      <div className="relative hidden md:block ml-20">
        <Image src={'/food.jpg'} width={440} height={440} alt={'pizza'} />
      </div>
    </section>
  );
}