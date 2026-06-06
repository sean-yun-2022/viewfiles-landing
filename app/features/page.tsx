import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FeaturesContent from "@/components/FeaturesContent";

export const metadata = {
  title: "Features — View Files",
  description: "Everything View Files can do — file viewer, tabs, browser, AI, and Knowledge Graph.",
};

export default function FeaturesPage() {
  return (
    <>
      <Navbar />
      <main>
        <FeaturesContent />
      </main>
      <Footer />
    </>
  );
}
