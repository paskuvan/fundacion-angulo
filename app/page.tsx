import Nav      from "@/components/Nav";
import Hero     from "@/components/Hero";
import Ticker   from "@/components/Ticker";
import Quienes  from "@/components/Quienes";
import Ayudar   from "@/components/Ayudar";
import Contacto from "@/components/Contacto";
import Footer   from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Ticker />
        <Quienes />
        <Ticker />
        <Ayudar />
        <Contacto />
      </main>
      <Footer />
    </>
  );
}
