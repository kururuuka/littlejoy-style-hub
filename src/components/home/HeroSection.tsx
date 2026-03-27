import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import heroBanner from "@/assets/hero-banner.jpg";

const HeroSection = () => (
  <section className="relative overflow-hidden" style={{ background: "var(--gradient-hero)" }}>
    <div className="container mx-auto px-4 py-12 md:py-20">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className="animate-fade-in-up">
          <span className="inline-block bg-accent/30 text-accent-foreground text-sm font-bold px-4 py-1.5 rounded-full mb-4">
            ✨ New Collection 2026
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground leading-tight">
            Colorful Style for{" "}
            <span className="text-primary">Happy Little</span>{" "}
            <span className="text-secondary">Smiles</span> 😊
          </h1>
          <p className="text-muted-foreground mt-4 text-lg max-w-md">
            Temukan koleksi baju anak terbaru dengan desain ceria, bahan premium, dan harga yang ramah di kantong!
          </p>
          <div className="flex flex-wrap gap-3 mt-6">
            <Link
              to="/katalog"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-bold px-6 py-3 rounded-2xl hover:opacity-90 transition-opacity shadow-card"
            >
              Belanja Sekarang <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/katalog?flash=true"
              className="inline-flex items-center gap-2 bg-accent text-accent-foreground font-bold px-6 py-3 rounded-2xl hover:opacity-90 transition-opacity"
            >
              🔥 Flash Sale
            </Link>
          </div>
          <div className="flex gap-8 mt-8">
            <div><span className="text-2xl font-extrabold text-foreground">500+</span><p className="text-xs text-muted-foreground">Produk</p></div>
            <div><span className="text-2xl font-extrabold text-foreground">10K+</span><p className="text-xs text-muted-foreground">Happy Customers</p></div>
            <div><span className="text-2xl font-extrabold text-foreground">⭐ 4.9</span><p className="text-xs text-muted-foreground">Rating</p></div>
          </div>
        </div>
        <div className="relative">
          <img
            src={heroBanner}
            alt="LittleJoy - Baju anak ceria"
            className="rounded-3xl shadow-float w-full"
            width={1920}
            height={800}
          />
          <div className="absolute -bottom-4 -left-4 bg-card rounded-2xl p-3 shadow-card hidden md:block animate-bounce-gentle">
            <span className="text-2xl">🎉</span>
            <p className="text-xs font-bold">Diskon s.d 50%</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
