import Container from "@/components/ui/Container";
import HeroSlider from "./HeroSlider";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-white pt-24 lg:pt-32 pb-12 lg:pb-20">
      {/* Background Ambience (Static) */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/3 rounded-full blur-[140px] translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-secondary/3 rounded-full blur-[120px] -translate-x-1/2 translate-y-1/2" />
        <div className="absolute inset-0 bg-dot-premium opacity-30" />
      </div>

      <Container className="relative z-10">
        <HeroSlider />
      </Container>
    </section>
  );
}
