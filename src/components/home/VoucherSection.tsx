import { vouchers } from "@/lib/data";
import { Copy, Ticket } from "lucide-react";
import { toast } from "sonner";

const VoucherSection = () => (
  <section className="container mx-auto px-4 py-12">
    <h2 className="text-2xl md:text-3xl font-extrabold text-foreground text-center mb-8">
      Voucher & Promo 🎁
    </h2>
    <div className="grid md:grid-cols-3 gap-4">
      {vouchers.map((v) => (
        <div key={v.code} className="bg-card border-2 border-dashed border-primary/30 rounded-2xl p-5 flex items-start gap-4 hover:border-primary/60 transition-colors">
          <div className="bg-primary/10 rounded-xl p-3">
            <Ticket className="h-6 w-6 text-primary" />
          </div>
          <div className="flex-1">
            <p className="font-extrabold text-lg text-primary">{v.discount}</p>
            <p className="text-sm text-foreground font-semibold">{v.description}</p>
            <p className="text-xs text-muted-foreground mt-1">Min. belanja Rp{v.minPurchase.toLocaleString("id-ID")} • s.d {v.expiry}</p>
            <button
              onClick={() => { navigator.clipboard.writeText(v.code); toast.success(`Kode ${v.code} berhasil disalin!`); }}
              className="mt-2 inline-flex items-center gap-1 text-xs font-bold text-primary bg-primary/10 px-3 py-1.5 rounded-lg hover:bg-primary/20 transition-colors"
            >
              <Copy className="h-3 w-3" /> {v.code}
            </button>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default VoucherSection;
