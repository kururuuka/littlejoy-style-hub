import { Link } from "react-router-dom";
import { Heart, Star, ShoppingCart } from "lucide-react";
import { Product } from "@/lib/data";
import { useStore } from "@/lib/store";

const ProductCard = ({ product }: { product: Product }) => {
  const { toggleWishlist, isInWishlist, addToCart } = useStore();
  const wishlisted = isInWishlist(product.id);
  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <div className="group bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-hover transition-all duration-300 hover:-translate-y-1">
      <div className="relative overflow-hidden">
        <Link to={`/produk/${product.id}`}>
          <img
            src={product.images[0]}
            alt={product.name}
            className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
        </Link>
        {discount > 0 && (
          <span className="absolute top-3 left-3 bg-primary text-primary-foreground text-xs font-bold px-2 py-1 rounded-full">
            -{discount}%
          </span>
        )}
        {product.isNew && (
          <span className="absolute top-3 left-3 bg-mint text-mint-foreground text-xs font-bold px-2 py-1 rounded-full">
            Baru
          </span>
        )}
        <button
          onClick={() => toggleWishlist(product.id)}
          className="absolute top-3 right-3 p-2 rounded-full bg-card/80 backdrop-blur-sm hover:bg-card transition-colors"
        >
          <Heart className={`h-4 w-4 ${wishlisted ? "fill-primary text-primary" : "text-foreground/50"}`} />
        </button>
      </div>
      <div className="p-4">
        <Link to={`/produk/${product.id}`}>
          <h3 className="font-bold text-sm text-foreground hover:text-primary transition-colors line-clamp-2">{product.name}</h3>
        </Link>
        <div className="flex items-center gap-1 mt-1">
          <Star className="h-3.5 w-3.5 fill-accent text-accent" />
          <span className="text-xs font-semibold text-foreground/70">{product.rating}</span>
          <span className="text-xs text-muted-foreground">({product.reviewCount})</span>
        </div>
        <div className="flex items-center gap-2 mt-2">
          <span className="font-extrabold text-primary">Rp{product.price.toLocaleString("id-ID")}</span>
          {product.originalPrice && (
            <span className="text-xs text-muted-foreground line-through">Rp{product.originalPrice.toLocaleString("id-ID")}</span>
          )}
        </div>
        <button
          onClick={() => addToCart(product, product.sizes[0], product.colors[0])}
          className="mt-3 w-full flex items-center justify-center gap-2 bg-primary/10 hover:bg-primary hover:text-primary-foreground text-primary text-sm font-semibold py-2 rounded-xl transition-all"
        >
          <ShoppingCart className="h-4 w-4" />
          Tambah ke Keranjang
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
