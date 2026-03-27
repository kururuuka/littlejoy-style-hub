import { Link } from "react-router-dom";
import { categories } from "@/lib/data";

const CategoriesSection = () => (
  <section className="container mx-auto px-4 py-12">
    <h2 className="text-2xl md:text-3xl font-extrabold text-foreground text-center mb-8">
      Kategori Produk 🎨
    </h2>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {categories.map((cat) => (
        <Link
          key={cat.id}
          to={`/katalog?category=${cat.id}`}
          className={`${cat.color} rounded-2xl p-6 text-center hover:shadow-hover hover:-translate-y-1 transition-all duration-300`}
        >
          <span className="text-4xl block mb-2">{cat.icon}</span>
          <span className="font-bold text-sm text-foreground">{cat.name}</span>
        </Link>
      ))}
    </div>
  </section>
);

export default CategoriesSection;
