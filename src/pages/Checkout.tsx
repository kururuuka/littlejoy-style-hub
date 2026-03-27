import { useState } from "react";
import Layout from "@/components/Layout";
import { useStore } from "@/lib/store";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const { cart, cartTotal, clearCart } = useStore();
  const navigate = useNavigate();
  const [shipping, setShipping] = useState("jne-reg");
  const [payment, setPayment] = useState("transfer");
  const shippingCost = cartTotal() >= 150000 ? 0 : 15000;

  const shippingOptions = [
    { id: "jne-reg", name: "JNE Reguler", est: "3-5 hari", cost: 15000 },
    { id: "jne-yes", name: "JNE YES", est: "1-2 hari", cost: 25000 },
    { id: "sicepat", name: "SiCepat REG", est: "2-4 hari", cost: 12000 },
    { id: "gosend", name: "GoSend (Jabodetabek)", est: "Hari ini", cost: 20000 },
  ];

  const handleOrder = () => {
    toast.success("Pesanan berhasil dibuat! 🎉 Terima kasih sudah belanja di LittleJoy!");
    clearCart();
    navigate("/");
  };

  if (cart.length === 0) {
    navigate("/keranjang");
    return null;
  }

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8 max-w-3xl">
        <h1 className="text-3xl font-extrabold text-foreground mb-6">Checkout 📦</h1>

        <div className="space-y-6">
          <div className="bg-card rounded-2xl p-6 shadow-card">
            <h2 className="font-extrabold text-lg mb-4">📍 Alamat Pengiriman</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <input placeholder="Nama lengkap" className="px-4 py-2.5 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" />
              <input placeholder="No. Telepon" className="px-4 py-2.5 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" />
              <textarea placeholder="Alamat lengkap" className="md:col-span-2 px-4 py-2.5 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 min-h-[80px]" />
              <input placeholder="Kota" className="px-4 py-2.5 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" />
              <input placeholder="Kode Pos" className="px-4 py-2.5 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" />
            </div>
          </div>

          <div className="bg-card rounded-2xl p-6 shadow-card">
            <h2 className="font-extrabold text-lg mb-4">🚚 Pilihan Pengiriman</h2>
            <div className="space-y-3">
              {shippingOptions.map((opt) => (
                <label key={opt.id} className={`flex items-center justify-between p-3 rounded-xl border cursor-pointer transition-colors ${shipping === opt.id ? "border-primary bg-primary/5" : "hover:border-primary/30"}`}>
                  <div className="flex items-center gap-3">
                    <input type="radio" name="shipping" value={opt.id} checked={shipping === opt.id} onChange={(e) => setShipping(e.target.value)} className="accent-[hsl(var(--primary))]" />
                    <div>
                      <p className="font-semibold text-sm">{opt.name}</p>
                      <p className="text-xs text-muted-foreground">Estimasi {opt.est}</p>
                    </div>
                  </div>
                  <span className="font-bold text-sm">Rp{opt.cost.toLocaleString("id-ID")}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="bg-card rounded-2xl p-6 shadow-card">
            <h2 className="font-extrabold text-lg mb-4">💳 Metode Pembayaran</h2>
            <div className="space-y-3">
              {[
                { id: "transfer", label: "Transfer Bank", desc: "BCA, Mandiri, BNI, BRI" },
                { id: "ewallet", label: "E-Wallet", desc: "GoPay, OVO, Dana, ShopeePay" },
                { id: "cod", label: "COD", desc: "Bayar di tempat" },
              ].map((opt) => (
                <label key={opt.id} className={`flex items-center gap-3 p-3 rounded-xl border cursor-pointer transition-colors ${payment === opt.id ? "border-primary bg-primary/5" : "hover:border-primary/30"}`}>
                  <input type="radio" name="payment" value={opt.id} checked={payment === opt.id} onChange={(e) => setPayment(e.target.value)} className="accent-[hsl(var(--primary))]" />
                  <div>
                    <p className="font-semibold text-sm">{opt.label}</p>
                    <p className="text-xs text-muted-foreground">{opt.desc}</p>
                  </div>
                </label>
              ))}
            </div>
          </div>

          <div className="bg-card rounded-2xl p-6 shadow-card">
            <h2 className="font-extrabold text-lg mb-4">📋 Ringkasan</h2>
            <div className="space-y-2 text-sm">
              {cart.map((item) => (
                <div key={`${item.product.id}-${item.size}`} className="flex justify-between">
                  <span>{item.product.name} x{item.quantity}</span>
                  <span className="font-bold">Rp{(item.product.price * item.quantity).toLocaleString("id-ID")}</span>
                </div>
              ))}
              <div className="border-t pt-2 flex justify-between"><span className="text-muted-foreground">Subtotal</span><span className="font-bold">Rp{cartTotal().toLocaleString("id-ID")}</span></div>
              <div className="flex justify-between"><span className="text-muted-foreground">Ongkir</span><span className="font-bold">{shippingCost === 0 ? "Gratis 🎉" : `Rp${shippingCost.toLocaleString("id-ID")}`}</span></div>
              <div className="border-t pt-2 flex justify-between">
                <span className="font-extrabold text-lg">Total</span>
                <span className="font-extrabold text-xl text-primary">Rp{(cartTotal() + shippingCost).toLocaleString("id-ID")}</span>
              </div>
            </div>
          </div>

          <button onClick={handleOrder} className="w-full bg-primary text-primary-foreground font-bold py-4 rounded-2xl text-lg hover:opacity-90 transition-opacity shadow-card">
            Buat Pesanan 🎉
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default Checkout;
