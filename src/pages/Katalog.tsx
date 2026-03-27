import { useState, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import Layout from "@/components/Layout";
import ProductCard from "@/components/ProductCard";
import { products, categories } from "@/lib/data";
import { SlidersHorizontal, Search } from "lucide-react";

const Katalog = () => {
  const [searchParams] = useSearchParams();
  const initialCat = searchParams.get("category") || "";
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState(initialCat);
  const [sort, setSort] = useState("popular");
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 300000]);
  const [showFilters, setShowFilters] = useState(false);

  const filtered = useMemo(() => {
    let result = products.filter((p) => {
      if (category && p.category !== category) return false;
      if (search && !p.name.toLowerCase().includes(search.toLowerCase())) return false;
      if (p.price < priceRange[0] || p.price > priceRange[1]) return false;
      return true;
    });
    if (sort === "cheapest") result.sort((a, b) => a.price - b.price);
    else if (sort === "expensive") result.sort((a, b) => b.price - a.price);
    else if (sort === "newest") result.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
    else result.sort((a, b) => b.reviewCount - a.reviewCount);
    return result;
  }, [search, category, sort, priceRange]);

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-extrabold text-foreground mb-6">Katalog Produk 👗</h1>

        <div className="flex flex-wrap gap-3 mb-6">
          <div className="relative flex-1 min-w-[200px]">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Cari produk..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-card border text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
            />
          </div>
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="px-4 py-2.5 rounded-xl bg-card border text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-primary/30"
          >
            <option value="popular">Terpopuler</option>
            <option value="cheapest">Termurah</option>
            <option value="expensive">Termahal</option>
            <option value="newest">Terbaru</option>
          </select>
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-primary/10 text-primary text-sm font-semibold hover:bg-primary/20 transition-colors md:hidden"
          >
            <SlidersHorizontal className="h-4 w-4" /> Filter
          </button>
        </div>

        <div className="flex gap-6">
          <aside className={`${showFilters ? "block" : "hidden"} md:block w-full md:w-56 shrink-0 space-y-6`}>
            <div>
              <h3 className="font-bold text-sm mb-3">Kategori</h3>
              <div className="space-y-2">
                <button
                  onClick={() => setCategory("")}
                  className={`block text-sm w-full text-left px-3 py-1.5 rounded-lg transition-colors ${!category ? "bg-primary text-primary-foreground font-bold" : "hover:bg-muted"}`}
                >
                  Semua
                </button>
                {categories.map((c) => (
                  <button
                    key={c.id}
                    onClick={() => setCategory(c.id)}
                    className={`block text-sm w-full text-left px-3 py-1.5 rounded-lg transition-colors ${category === c.id ? "bg-primary text-primary-foreground font-bold" : "hover:bg-muted"}`}
                  >
                    {c.icon} {c.name}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-bold text-sm mb-3">Harga</h3>
              <div className="space-y-2">
                {[
                  [0, 100000, "< Rp100.000"],
                  [100000, 150000, "Rp100-150rb"],
                  [150000, 200000, "Rp150-200rb"],
                  [200000, 300000, "> Rp200.000"],
                ].map(([min, max, label]) => (
                  <button
                    key={String(label)}
                    onClick={() => setPriceRange([min as number, max as number])}
                    className={`block text-sm w-full text-left px-3 py-1.5 rounded-lg transition-colors ${
                      priceRange[0] === min && priceRange[1] === max ? "bg-secondary text-secondary-foreground font-bold" : "hover:bg-muted"
                    }`}
                  >
                    {label as string}
                  </button>
                ))}
                <button
                  onClick={() => setPriceRange([0, 300000])}
                  className="text-xs text-primary font-bold hover:underline"
                >
                  Reset Harga
                </button>
              </div>
            </div>
          </aside>

          <div className="flex-1">
            {filtered.length === 0 ? (
              <div className="text-center py-16">
                <span className="text-5xl mb-4 block">🔍</span>
                <p className="font-bold text-foreground">Produk tidak ditemukan</p>
                <p className="text-sm text-muted-foreground">Coba ubah filter atau kata kunci pencarian</p>
              </div>
            ) : (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {filtered.map((p) => (
                  <ProductCard key={p.id} product={p} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Katalog;
