import Hero from "@/components/Hero";
import ServicesShowcase from "@/components/ServicesShowcase";
import FAQContactSection from "@/components/FAQContactSection";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import TrainingHub from "@/components/home/TrainingHub";
import DeploymentBlueprint from "@/components/home/DeploymentBlueprint";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* 1. Hero Slider Section (Client Component) */}
      <Hero />

      {/* 2. Services Showcase (Client Component) */}
      <ServicesShowcase />

      {/* 3. Why Choose Us (Client Component) */}
      <WhyChooseUs />

      {/* 4. Training Hub (Client Component) */}
      <TrainingHub />

      {/* 5. Deployment Blueprint (Client Component) */}
      <DeploymentBlueprint />

      {/* 6. FAQ & Contact Us Section (Client Component) */}
      <FAQContactSection />
    </div>
  );
}
