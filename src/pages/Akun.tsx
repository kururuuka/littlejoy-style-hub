import Layout from "@/components/Layout";
import { User, MapPin, Package, Heart, LogIn } from "lucide-react";
import { Link } from "react-router-dom";

const Akun = () => (
  <Layout>
    <div className="container mx-auto px-4 py-8 max-w-lg">
      <h1 className="text-3xl font-extrabold text-foreground mb-6">Akun Saya 👤</h1>

      <div className="bg-card rounded-2xl p-6 shadow-card mb-6">
        <div className="text-center py-8">
          <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
            <User className="h-10 w-10 text-primary" />
          </div>
          <h2 className="font-extrabold text-lg">Selamat Datang!</h2>
          <p className="text-sm text-muted-foreground mt-1">Login atau daftar untuk pengalaman belanja yang lebih baik</p>
          <div className="flex gap-3 justify-center mt-4">
            <button className="bg-primary text-primary-foreground font-bold px-6 py-2.5 rounded-2xl text-sm hover:opacity-90 flex items-center gap-2">
              <LogIn className="h-4 w-4" /> Login
            </button>
            <button className="bg-muted text-foreground font-bold px-6 py-2.5 rounded-2xl text-sm hover:bg-muted/80">
              Daftar
            </button>
          </div>
        </div>
      </div>

      <div className="space-y-3">
        {[
          { icon: Package, label: "Riwayat Pesanan", to: "/tracking", desc: "Lihat pesanan Anda" },
          { icon: Heart, label: "Wishlist", to: "/wishlist", desc: "Produk favorit Anda" },
          { icon: MapPin, label: "Alamat Tersimpan", to: "#", desc: "Kelola alamat pengiriman" },
        ].map((item) => (
          <Link key={item.label} to={item.to} className="flex items-center gap-4 bg-card rounded-2xl p-4 shadow-card hover:shadow-hover transition-shadow">
            <div className="bg-primary/10 rounded-xl p-3">
              <item.icon className="h-5 w-5 text-primary" />
            </div>
            <div>
              <p className="font-bold text-sm">{item.label}</p>
              <p className="text-xs text-muted-foreground">{item.desc}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  </Layout>
);

export default Akun;
