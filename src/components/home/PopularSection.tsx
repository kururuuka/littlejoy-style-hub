import { products } from "@/lib/data";
import ProductCard from "@/components/ProductCard";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const PopularSection = () => {
  const popular = products.filter((p) => p.isPopular).slice(0, 4);
  return (
    <section className="container mx-auto px-4 py-12">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl md:text-3xl font-extrabold text-foreground">Produk Populer 🌟</h2>
        <Link to="/katalog" className="text-primary text-sm font-bold flex items-center gap-1 hover:underline">
          Lihat Semua <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {popular.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </section>
  );
};

export default PopularSection;
