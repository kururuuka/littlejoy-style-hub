import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="bg-foreground/5 border-t mt-16">
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="font-extrabold text-lg">Little<span className="text-primary">Joy</span></h3>
          <p className="text-sm text-muted-foreground mt-2">Colorful Style for Happy Little Smiles ✨</p>
          <p className="text-sm text-muted-foreground mt-2">Toko baju anak berkualitas dengan desain ceria dan harga terjangkau.</p>
        </div>
        <div>
          <h4 className="font-bold text-sm mb-3">Belanja</h4>
          <div className="space-y-2 text-sm text-muted-foreground">
            <Link to="/katalog" className="block hover:text-primary transition-colors">Katalog Produk</Link>
            <Link to="/katalog?category=dress" className="block hover:text-primary transition-colors">Dress & Rok</Link>
            <Link to="/katalog?category=atasan" className="block hover:text-primary transition-colors">Atasan</Link>
            <Link to="/katalog?category=setelan" className="block hover:text-primary transition-colors">Setelan</Link>
          </div>
        </div>
        <div>
          <h4 className="font-bold text-sm mb-3">Informasi</h4>
          <div className="space-y-2 text-sm text-muted-foreground">
            <Link to="/about" className="block hover:text-primary transition-colors">About Us</Link>
            <Link to="/blog" className="block hover:text-primary transition-colors">Blog</Link>
            <Link to="/kontak" className="block hover:text-primary transition-colors">Kontak</Link>
            <Link to="/tracking" className="block hover:text-primary transition-colors">Lacak Pesanan</Link>
          </div>
        </div>
        <div>
          <h4 className="font-bold text-sm mb-3">Hubungi Kami</h4>
          <div className="space-y-2 text-sm text-muted-foreground">
            <p>📧 hello@littlejoy.id</p>
            <p>📱 +62 812 3456 7890</p>
            <p>📍 Jakarta, Indonesia</p>
            <div className="flex gap-3 mt-3">
              <span className="text-lg cursor-pointer hover:scale-110 transition-transform">📷</span>
              <span className="text-lg cursor-pointer hover:scale-110 transition-transform">👍</span>
              <span className="text-lg cursor-pointer hover:scale-110 transition-transform">🐦</span>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t mt-8 pt-6 text-center text-sm text-muted-foreground">
        © 2026 LittleJoy. All rights reserved. Made with 💕 for happy little ones.
      </div>
    </div>
  </footer>
);

export default Footer;
