import { useState, useEffect } from "react";
import { products } from "@/lib/data";
import ProductCard from "@/components/ProductCard";
import { Flame } from "lucide-react";

const FlashSaleSection = () => {
  const flashProducts = products.filter((p) => p.isFlashSale);
  const [timeLeft, setTimeLeft] = useState({ hours: 5, minutes: 42, seconds: 18 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        let { hours, minutes, seconds } = prev;
        seconds--;
        if (seconds < 0) { seconds = 59; minutes--; }
        if (minutes < 0) { minutes = 59; hours--; }
        if (hours < 0) { hours = 23; minutes = 59; seconds = 59; }
        return { hours, minutes, seconds };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const pad = (n: number) => n.toString().padStart(2, "0");

  return (
    <section className="container mx-auto px-4 py-12">
      <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
        <div className="flex items-center gap-3">
          <Flame className="h-7 w-7 text-primary animate-pulse-soft" />
          <h2 className="text-2xl md:text-3xl font-extrabold text-foreground">Flash Sale</h2>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-sm font-semibold text-muted-foreground">Berakhir dalam</span>
          <div className="flex gap-1">
            {[pad(timeLeft.hours), pad(timeLeft.minutes), pad(timeLeft.seconds)].map((v, i) => (
              <span key={i} className="bg-primary text-primary-foreground font-extrabold text-lg px-3 py-1 rounded-xl min-w-[3rem] text-center">
                {v}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
        {flashProducts.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </section>
  );
};

export default FlashSaleSection;
