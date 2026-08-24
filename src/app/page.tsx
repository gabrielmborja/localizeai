import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import DashboardPreview from "@/components/DashboardPreview";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 flex flex-col justify-between overflow-hidden">
      <Navbar />
      <div className="flex-1">
        <Hero />
        <Features />
        <DashboardPreview />
        <Pricing />
        <FAQ />
      </div>
      <Footer />
    </main>
  );
}
