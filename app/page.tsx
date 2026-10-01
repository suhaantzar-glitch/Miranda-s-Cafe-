import Hero from "@/components/sections/Hero";
import Signature from "@/components/sections/Signature";
import Differentiators from "@/components/sections/Differentiators";
import About from "@/components/sections/About";
import Reviews from "@/components/sections/Reviews";
import Market from "@/components/sections/Market";
import Visit from "@/components/sections/Visit";
import ScrollAnimations from "@/components/ScrollAnimations";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Signature />
      <Differentiators />
      <About />
      <Reviews />
      <Market />
      <Visit />
      <ScrollAnimations />
    </>
  );
}
