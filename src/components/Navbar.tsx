import { Link } from "react-router-dom";
import { ShoppingCart, Heart, Search, Menu, X, User } from "lucide-react";
import { useState } from "react";
import { useStore } from "@/lib/store";
import logo from "@/assets/logo.png";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/katalog", label: "Katalog" },
  { to: "/blog", label: "Blog" },
  { to: "/about", label: "About Us" },
  { to: "/kontak", label: "Kontak" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const cartCount = useStore((s) => s.cartCount());
  const wishlist = useStore((s) => s.wishlist);

  return (
    <nav className="sticky top-0 z-50 bg-card/90 backdrop-blur-md border-b shadow-sm">
      <div className="container mx-auto px-4 flex items-center justify-between h-16">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="LittleJoy" className="h-10 w-10 rounded-lg" />
          <div>
            <span className="font-extrabold text-lg text-foreground">Little<span className="text-primary">Joy</span></span>
            <p className="text-[10px] text-muted-foreground leading-none -mt-0.5">Colorful Style for Happy Little Smiles</p>
          </div>
        </Link>

        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((l) => (
            <Link key={l.to} to={l.to} className="text-sm font-semibold text-foreground/80 hover:text-primary transition-colors">
              {l.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <Link to="/katalog" className="p-2 rounded-full hover:bg-muted transition-colors">
            <Search className="h-5 w-5 text-foreground/70" />
          </Link>
          <Link to="/wishlist" className="p-2 rounded-full hover:bg-muted transition-colors relative">
            <Heart className="h-5 w-5 text-foreground/70" />
            {wishlist.length > 0 && (
              <span className="absolute -top-0.5 -right-0.5 bg-primary text-primary-foreground text-[10px] font-bold rounded-full h-4 w-4 flex items-center justify-center">{wishlist.length}</span>
            )}
          </Link>
          <Link to="/keranjang" className="p-2 rounded-full hover:bg-muted transition-colors relative">
            <ShoppingCart className="h-5 w-5 text-foreground/70" />
            {cartCount > 0 && (
              <span className="absolute -top-0.5 -right-0.5 bg-primary text-primary-foreground text-[10px] font-bold rounded-full h-4 w-4 flex items-center justify-center">{cartCount}</span>
            )}
          </Link>
          <Link to="/akun" className="p-2 rounded-full hover:bg-muted transition-colors hidden md:flex">
            <User className="h-5 w-5 text-foreground/70" />
          </Link>
          <button onClick={() => setMobileOpen(!mobileOpen)} className="p-2 rounded-full hover:bg-muted transition-colors md:hidden">
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden border-t bg-card px-4 py-4 space-y-3 animate-fade-in-up">
          {navLinks.map((l) => (
            <Link key={l.to} to={l.to} onClick={() => setMobileOpen(false)} className="block text-sm font-semibold text-foreground/80 hover:text-primary py-2">
              {l.label}
            </Link>
          ))}
          <Link to="/akun" onClick={() => setMobileOpen(false)} className="block text-sm font-semibold text-foreground/80 hover:text-primary py-2">
            Akun Saya
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
