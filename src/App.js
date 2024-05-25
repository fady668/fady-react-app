import Navbar from "./Componants/Navbar";
import ArticlesSection from "./Sections/ArticlesSection";
import DiscountSection from "./Sections/DiscountSection";
import EventsSection from "./Sections/EventsSection";
import FeaturesSection from "./Sections/FeaturesSection";
import FooterSection from "./Sections/FooterSection";
import GallerySection from "./Sections/GallerySection";
import IntroSection from "./Sections/IntroSection";
import PricingPlansSection from "./Sections/PricingPlansSection";
import ServicesSection from "./Sections/ServicesSection";
import SkillsSection from "./Sections/SkillsSection";
import StatsSection from "./Sections/StatsSection";
import TeamSection from "./Sections/TeamSection";
import TestimonialsSection from "./Sections/TestimonialsSection";
import VideosSection from "./Sections/VideosSection";
import WorkStepSection from "./Sections/WorkStepSection";

function App() {
  return (
    <>
      <span className="scroll-watcher"></span>
      <a href="#" className="scroll-to-top">
        <i className="fa-solid fa-arrow-up"></i>
      </a>
      <Navbar />
      <IntroSection />
      <ArticlesSection />
      <GallerySection />
      <FeaturesSection />
      <TestimonialsSection />
      <TeamSection />
      <ServicesSection />
      <SkillsSection />
      <WorkStepSection />
      <EventsSection />
      <PricingPlansSection />
      <VideosSection />
      <StatsSection />
      <DiscountSection />
      <FooterSection />
    </>
  );
}

export default App;
