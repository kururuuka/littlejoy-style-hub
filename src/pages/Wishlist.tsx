import Layout from "@/components/Layout";
import { products } from "@/lib/data";
import { useStore } from "@/lib/store";
import ProductCard from "@/components/ProductCard";
import { Heart } from "lucide-react";
import { Link } from "react-router-dom";

const Wishlist = () => {
  const { wishlist } = useStore();
  const wishlistProducts = products.filter((p) => wishlist.includes(p.id));

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-extrabold text-foreground mb-6">Wishlist 💕</h1>
        {wishlistProducts.length === 0 ? (
          <div className="text-center py-16">
            <Heart className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
            <p className="font-bold text-foreground">Wishlist masih kosong</p>
            <p className="text-sm text-muted-foreground mt-1">Simpan produk favorit kamu di sini!</p>
            <Link to="/katalog" className="inline-block mt-4 bg-primary text-primary-foreground font-bold px-6 py-3 rounded-2xl hover:opacity-90">
              Lihat Katalog
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {wishlistProducts.map((p) => <ProductCard key={p.id} product={p} />)}
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Wishlist;
