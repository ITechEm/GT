import Header from "@/components/layout/Header";
import Hero from "@/components/layout/Hero";
import HomeMenu from "@/components/layout/HomeMenu";
import SectionHeaders from "@/components/layout/SectionHeaders";

export default function Home() {
  return (
    <>
      <Hero />
      <HomeMenu />
      <section className="text-center my-16 mt-12 mb-8" id="about">
        <SectionHeaders
          subHeader={'Unsere Geschichte'}
          mainHeader={<a>Über  <span className="text-primary">Uns</span></a>}
        />
        <div className=" max-w-md mx-auto mt-6 flex flex-col gap-4 inria">

          <p>Ein herzliches Willkommen erwartet Sie im Greek Tasty . Wir freuen uns, Ihr Gastgeber in Altena zu sein! Sie werden mit echter Gastfreundschaft und einer großartigen Auswahl an deutscher und griechischer Küche begrüßt. Erleben Sie fantastisches Fast Food, das von unserem freundlichen Personal serviert wird. Unsere köstlichen Speisen warten darauf, von Ihnen probiert zu werden. Erfrischendes Bier und Wein stehen ebenfalls für Sie bereit. Sie haben Hunger? Besuchen Sie uns und genießen Sie leckeren Brunch, Mittag- und Abendessen in einem entspannten Ambiente.</p>
          
        </div>
      </section>
      <section className="text-center my-8 mt-12" id="contact">
        <SectionHeaders
          subHeader={'Zögern Sie nicht'}
          mainHeader={<a>Kontakt <span className="text-primary">Uns</span></a>}
        />
        <div className=" mt-6">
          <p className="text-4xl  inria ">
           Bahnhofstr. 11, 58762 Altena, Deutschland
          </p>
          <p className="text-4xl underline inria ">
           +4923522688115
          </p>
          <p className="text-2xl mt-2 inria">
          stavrosketenis@gmail.com
          </p>
        </div>
      </section>
    </>
  )
}
