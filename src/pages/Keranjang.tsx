import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { useStore } from "@/lib/store";
import { Trash2, Minus, Plus, ShoppingBag, Tag } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const Keranjang = () => {
  const { cart, removeFromCart, updateCartQuantity, cartTotal } = useStore();
  const [voucherCode, setVoucherCode] = useState("");
  const [discount, setDiscount] = useState(0);
  const shippingCost = cartTotal() >= 150000 ? 0 : 15000;

  const applyVoucher = () => {
    if (voucherCode === "NEWMOM20" && cartTotal() >= 200000) {
      setDiscount(Math.round(cartTotal() * 0.2));
      toast.success("Voucher NEWMOM20 berhasil dipakai!");
    } else if (voucherCode === "FLASHSALE50" && cartTotal() >= 300000) {
      setDiscount(50000);
      toast.success("Voucher FLASHSALE50 berhasil dipakai!");
    } else if (voucherCode === "FREESHIP") {
      setDiscount(shippingCost);
      toast.success("Voucher gratis ongkir berhasil dipakai!");
    } else {
      toast.error("Kode voucher tidak valid atau belum memenuhi minimum belanja");
    }
  };

  if (cart.length === 0) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-16 text-center">
          <ShoppingBag className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
          <h1 className="text-2xl font-extrabold">Keranjang Kosong</h1>
          <p className="text-muted-foreground mt-2">Yuk mulai belanja baju anak yang lucu!</p>
          <Link to="/katalog" className="inline-block mt-4 bg-primary text-primary-foreground font-bold px-6 py-3 rounded-2xl hover:opacity-90">
            Mulai Belanja
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-extrabold text-foreground mb-6">Keranjang 🛒</h1>
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-4">
            {cart.map((item) => (
              <div key={`${item.product.id}-${item.size}-${item.color}`} className="bg-card rounded-2xl p-4 flex gap-4 shadow-card">
                <img src={item.product.images[0]} alt={item.product.name} className="w-24 h-24 rounded-xl object-cover" loading="lazy" />
                <div className="flex-1">
                  <h3 className="font-bold text-sm">{item.product.name}</h3>
                  <p className="text-xs text-muted-foreground">{item.size} • {item.color}</p>
                  <p className="font-extrabold text-primary mt-1">Rp{item.product.price.toLocaleString("id-ID")}</p>
                  <div className="flex items-center justify-between mt-2">
                    <div className="flex items-center gap-2">
                      <button onClick={() => updateCartQuantity(item.product.id, item.size, item.color, item.quantity - 1)} className="p-1 rounded-lg bg-muted"><Minus className="h-3 w-3" /></button>
                      <span className="font-bold text-sm w-6 text-center">{item.quantity}</span>
                      <button onClick={() => updateCartQuantity(item.product.id, item.size, item.color, item.quantity + 1)} className="p-1 rounded-lg bg-muted"><Plus className="h-3 w-3" /></button>
                    </div>
                    <button onClick={() => removeFromCart(item.product.id, item.size, item.color)} className="p-2 text-destructive hover:bg-destructive/10 rounded-lg">
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-card rounded-2xl p-6 shadow-card h-fit space-y-4">
            <h3 className="font-extrabold text-lg">Ringkasan Pesanan</h3>
            <div className="flex items-center gap-2">
              <input
                type="text"
                placeholder="Kode voucher"
                value={voucherCode}
                onChange={(e) => setVoucherCode(e.target.value.toUpperCase())}
                className="flex-1 px-3 py-2 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
              />
              <button onClick={applyVoucher} className="bg-primary/10 text-primary font-bold px-4 py-2 rounded-xl text-sm hover:bg-primary/20">
                <Tag className="h-4 w-4" />
              </button>
            </div>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between"><span className="text-muted-foreground">Subtotal</span><span className="font-bold">Rp{cartTotal().toLocaleString("id-ID")}</span></div>
              <div className="flex justify-between"><span className="text-muted-foreground">Ongkir</span><span className="font-bold">{shippingCost === 0 ? "Gratis 🎉" : `Rp${shippingCost.toLocaleString("id-ID")}`}</span></div>
              {discount > 0 && <div className="flex justify-between text-mint"><span>Diskon voucher</span><span className="font-bold">-Rp{discount.toLocaleString("id-ID")}</span></div>}
              <div className="border-t pt-2 flex justify-between">
                <span className="font-extrabold">Total</span>
                <span className="font-extrabold text-lg text-primary">Rp{(cartTotal() + shippingCost - discount).toLocaleString("id-ID")}</span>
              </div>
            </div>
            <Link to="/checkout" className="block w-full bg-primary text-primary-foreground text-center font-bold py-3 rounded-2xl hover:opacity-90 transition-opacity">
              Checkout →
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Keranjang;
