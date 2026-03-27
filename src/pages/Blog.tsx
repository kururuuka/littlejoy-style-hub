import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { blogPosts } from "@/lib/data";
import { Search, Clock, ArrowRight } from "lucide-react";

const blogCategories = ["Semua", "tips", "fashion", "parenting"];

const Blog = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("Semua");

  const filtered = useMemo(() => {
    return blogPosts.filter((p) => {
      if (category !== "Semua" && p.category !== category) return false;
      if (search && !p.title.toLowerCase().includes(search.toLowerCase())) return false;
      return true;
    });
  }, [search, category]);

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-extrabold text-foreground mb-2">Blog LittleJoy 📝</h1>
        <p className="text-muted-foreground mb-6">Tips, inspirasi, dan panduan seputar fashion anak</p>

        <div className="flex flex-wrap gap-3 mb-6">
          <div className="relative flex-1 min-w-[200px]">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Cari artikel..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-card border text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
            />
          </div>
          <div className="flex gap-2">
            {blogCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={`px-4 py-2 rounded-xl text-sm font-semibold capitalize transition-colors ${
                  category === cat ? "bg-primary text-primary-foreground" : "bg-muted hover:bg-muted/80"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {filtered.map((post) => (
            <Link key={post.id} to={`/blog/${post.id}`} className="bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-hover hover:-translate-y-1 transition-all duration-300 group">
              <img src={post.image} alt={post.title} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
              <div className="p-5">
                <span className="inline-block bg-primary/10 text-primary text-xs font-bold px-2 py-1 rounded-full capitalize">{post.category}</span>
                <h3 className="font-extrabold text-foreground mt-2 group-hover:text-primary transition-colors">{post.title}</h3>
                <p className="text-sm text-muted-foreground mt-2 line-clamp-2">{post.excerpt}</p>
                <div className="flex items-center justify-between mt-4">
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Clock className="h-3 w-3" /> {post.readTime}
                  </div>
                  <span className="text-primary text-sm font-bold flex items-center gap-1">
                    Baca <ArrowRight className="h-3 w-3" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Blog;
