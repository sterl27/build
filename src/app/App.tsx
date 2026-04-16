import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { FeaturesSection } from "./components/FeaturesSection";
import { CaseStudySection } from "./components/CaseStudySection";
import { PricingSection } from "./components/PricingSection";
import { CTASection } from "./components/CTASection";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div
      className="min-h-screen bg-[#0a0f11] relative"
      style={{
        backgroundImage: `
          url("data:image/svg+xml;utf8,<svg viewBox='0 0 1280 2999' xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='none'><rect x='0' y='0' height='100%25' width='100%25' fill='url(%23grad)' opacity='1'/><defs><radialGradient id='grad' gradientUnits='userSpaceOnUse' cx='0' cy='0' r='10' gradientTransform='matrix(326.07 0 0 326.07 1280 0)'><stop stop-color='rgba(13,204,242,0.15)' offset='0'/><stop stop-color='rgba(13,204,242,0)' offset='1'/></radialGradient></defs></svg>"),
          url("data:image/svg+xml;utf8,<svg viewBox='0 0 1280 2999' xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='none'><rect x='0' y='0' height='100%25' width='100%25' fill='url(%23grad)' opacity='1'/><defs><radialGradient id='grad' gradientUnits='userSpaceOnUse' cx='0' cy='0' r='10' gradientTransform='matrix(326.07 0 0 326.07 0 2999)'><stop stop-color='rgba(139,92,246,0.1)' offset='0'/><stop stop-color='rgba(139,92,246,0)' offset='1'/></radialGradient></defs></svg>")
        `,
        backgroundSize: "100% 100%",
      }}
    >
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <CaseStudySection />
        <PricingSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}