import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import Layout from "@/components/Layout";
import { products, sizeChart } from "@/lib/data";
import { useStore } from "@/lib/store";
import { Heart, ShoppingCart, Star, ChevronLeft, Minus, Plus } from "lucide-react";
import { toast } from "sonner";

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const { addToCart, toggleWishlist, isInWishlist } = useStore();
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [showSizeChart, setShowSizeChart] = useState(false);

  if (!product) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-16 text-center">
          <span className="text-5xl block mb-4">😢</span>
          <h1 className="text-2xl font-extrabold">Produk tidak ditemukan</h1>
          <Link to="/katalog" className="text-primary font-bold mt-4 inline-block hover:underline">Kembali ke Katalog</Link>
        </div>
      </Layout>
    );
  }

  const wishlisted = isInWishlist(product.id);
  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  const handleAddToCart = () => {
    if (!selectedSize || !selectedColor) {
      toast.error("Pilih ukuran dan warna terlebih dahulu!");
      return;
    }
    addToCart(product, selectedSize, selectedColor, quantity);
    toast.success(`${product.name} ditambahkan ke keranjang!`);
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <Link to="/katalog" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-primary mb-6">
          <ChevronLeft className="h-4 w-4" /> Kembali
        </Link>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <div className="rounded-2xl overflow-hidden bg-muted">
              <img src={product.images[selectedImage]} alt={product.name} className="w-full h-80 md:h-[500px] object-cover" />
            </div>
            <div className="flex gap-2 mt-3">
              {product.images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedImage(i)}
                  className={`rounded-xl overflow-hidden border-2 transition-colors ${i === selectedImage ? "border-primary" : "border-transparent"}`}
                >
                  <img src={img} alt="" className="w-16 h-16 object-cover" loading="lazy" />
                </button>
              ))}
            </div>
          </div>

          <div>
            {discount > 0 && (
              <span className="inline-block bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full mb-3">-{discount}% OFF</span>
            )}
            <h1 className="text-2xl md:text-3xl font-extrabold text-foreground">{product.name}</h1>
            <div className="flex items-center gap-2 mt-2">
              <Star className="h-4 w-4 fill-accent text-accent" />
              <span className="font-bold text-sm">{product.rating}</span>
              <span className="text-sm text-muted-foreground">({product.reviewCount} ulasan)</span>
            </div>
            <div className="flex items-baseline gap-3 mt-4">
              <span className="text-3xl font-extrabold text-primary">Rp{product.price.toLocaleString("id-ID")}</span>
              {product.originalPrice && (
                <span className="text-lg text-muted-foreground line-through">Rp{product.originalPrice.toLocaleString("id-ID")}</span>
              )}
            </div>

            <p className="text-muted-foreground mt-4 leading-relaxed">{product.description}</p>

            <div className="mt-6">
              <div className="flex items-center justify-between mb-2">
                <span className="font-bold text-sm">Ukuran</span>
                <button onClick={() => setShowSizeChart(!showSizeChart)} className="text-xs text-primary font-bold hover:underline">
                  📏 Size Chart
                </button>
              </div>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((s) => (
                  <button
                    key={s}
                    onClick={() => setSelectedSize(s)}
                    className={`px-4 py-2 rounded-xl text-sm font-semibold border transition-all ${
                      selectedSize === s ? "bg-primary text-primary-foreground border-primary" : "hover:border-primary/50"
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            {showSizeChart && (
              <div className="mt-4 bg-muted rounded-2xl p-4 text-sm">
                <h4 className="font-bold mb-2">Size Chart</h4>
                <table className="w-full text-xs">
                  <thead>
                    <tr className="border-b">
                      <th className="py-1 text-left font-bold">Size</th>
                      <th className="py-1 text-left font-bold">Usia</th>
                      <th className="py-1 text-left font-bold">Tinggi</th>
                      <th className="py-1 text-left font-bold">Berat</th>
                    </tr>
                  </thead>
                  <tbody>
                    {sizeChart.map((r) => (
                      <tr key={r.size} className="border-b last:border-0">
                        <td className="py-1 font-semibold">{r.size}</td>
                        <td className="py-1">{r.age}</td>
                        <td className="py-1">{r.height}</td>
                        <td className="py-1">{r.weight}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            <div className="mt-6">
              <span className="font-bold text-sm mb-2 block">Warna</span>
              <div className="flex flex-wrap gap-2">
                {product.colors.map((c) => (
                  <button
                    key={c}
                    onClick={() => setSelectedColor(c)}
                    className={`px-4 py-2 rounded-xl text-sm font-semibold border transition-all ${
                      selectedColor === c ? "bg-secondary text-secondary-foreground border-secondary" : "hover:border-secondary/50"
                    }`}
                  >
                    {c}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-6">
              <span className="font-bold text-sm mb-2 block">Jumlah</span>
              <div className="flex items-center gap-3">
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="p-2 rounded-xl bg-muted hover:bg-muted/80"><Minus className="h-4 w-4" /></button>
                <span className="font-bold text-lg w-8 text-center">{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)} className="p-2 rounded-xl bg-muted hover:bg-muted/80"><Plus className="h-4 w-4" /></button>
              </div>
            </div>

            <div className="flex gap-3 mt-8">
              <button onClick={handleAddToCart} className="flex-1 flex items-center justify-center gap-2 bg-primary text-primary-foreground font-bold py-3 rounded-2xl hover:opacity-90 transition-opacity">
                <ShoppingCart className="h-5 w-5" /> Tambah ke Keranjang
              </button>
              <button
                onClick={() => { toggleWishlist(product.id); toast.success(wishlisted ? "Dihapus dari wishlist" : "Ditambahkan ke wishlist!"); }}
                className={`p-3 rounded-2xl border transition-colors ${wishlisted ? "bg-primary/10 border-primary" : "hover:border-primary/50"}`}
              >
                <Heart className={`h-5 w-5 ${wishlisted ? "fill-primary text-primary" : ""}`} />
              </button>
            </div>

            <button onClick={() => { handleAddToCart(); }} className="w-full mt-3 bg-accent text-accent-foreground font-bold py-3 rounded-2xl hover:opacity-90 transition-opacity">
              Beli Sekarang ⚡
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductDetail;
