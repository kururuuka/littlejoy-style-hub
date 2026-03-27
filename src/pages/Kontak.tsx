import Layout from "@/components/Layout";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { toast } from "sonner";

const Kontak = () => (
  <Layout>
    <div className="container mx-auto px-4 py-8 max-w-3xl">
      <h1 className="text-3xl font-extrabold text-foreground mb-6">Hubungi Kami 📞</h1>

      <div className="grid md:grid-cols-3 gap-4 mb-8">
        {[
          { icon: Mail, label: "Email", value: "hello@littlejoy.id" },
          { icon: Phone, label: "Telepon", value: "+62 812 3456 7890" },
          { icon: MapPin, label: "Lokasi", value: "Jakarta, Indonesia" },
        ].map((item) => (
          <div key={item.label} className="bg-card rounded-2xl p-5 text-center shadow-card">
            <div className="bg-primary/10 rounded-xl p-3 w-fit mx-auto mb-3">
              <item.icon className="h-5 w-5 text-primary" />
            </div>
            <p className="font-bold text-sm">{item.label}</p>
            <p className="text-sm text-muted-foreground">{item.value}</p>
          </div>
        ))}
      </div>

      <div className="bg-card rounded-2xl p-6 shadow-card">
        <h2 className="font-extrabold text-lg mb-4">Kirim Pesan</h2>
        <form
          onSubmit={(e) => { e.preventDefault(); toast.success("Pesan berhasil dikirim! Kami akan segera membalas 💕"); }}
          className="space-y-4"
        >
          <div className="grid md:grid-cols-2 gap-4">
            <input placeholder="Nama lengkap" required className="px-4 py-2.5 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" />
            <input placeholder="Email" type="email" required className="px-4 py-2.5 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" />
          </div>
          <input placeholder="Subjek" required className="w-full px-4 py-2.5 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" />
          <textarea placeholder="Pesan Anda..." required className="w-full px-4 py-2.5 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 min-h-[120px]" />
          <button type="submit" className="bg-primary text-primary-foreground font-bold px-6 py-3 rounded-2xl hover:opacity-90 transition-opacity flex items-center gap-2">
            <Send className="h-4 w-4" /> Kirim Pesan
          </button>
        </form>
      </div>
    </div>
  </Layout>
);

export default Kontak;
