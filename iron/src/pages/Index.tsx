import Navbar from "../components/Navbar";
import DoorsSection from "../components/DoorsSection";
import GatesSection from "../components/GatesSection";
import StairsSection from "../components/StairsSection";
import Footer from "../components/Footer";

export default function Index() {
  return (
    <div className="min-h-screen bg-[#0C0C0C]">
      <Navbar />
      <DoorsSection />
      <GatesSection />
      <StairsSection />
      <Footer />
    </div>
  );
}