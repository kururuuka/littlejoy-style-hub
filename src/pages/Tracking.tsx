import Layout from "@/components/Layout";
import { Package, Truck, CheckCircle, Clock } from "lucide-react";
import { useState } from "react";

const Tracking = () => {
  const [resi, setResi] = useState("");
  const [showResult, setShowResult] = useState(false);

  const mockTracking = [
    { status: "Pesanan dibuat", date: "25 Mar 2026, 10:00", icon: Package, done: true },
    { status: "Dikemas", date: "25 Mar 2026, 14:00", icon: Package, done: true },
    { status: "Dikirim - JNE Reguler", date: "26 Mar 2026, 09:00", icon: Truck, done: true },
    { status: "Dalam perjalanan", date: "27 Mar 2026, 08:00", icon: Truck, done: false },
    { status: "Tiba di tujuan", date: "-", icon: CheckCircle, done: false },
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8 max-w-lg">
        <h1 className="text-3xl font-extrabold text-foreground mb-6">Lacak Pesanan 📦</h1>

        <div className="bg-card rounded-2xl p-6 shadow-card mb-6">
          <label className="font-bold text-sm mb-2 block">Nomor Resi</label>
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Masukkan nomor resi..."
              value={resi}
              onChange={(e) => setResi(e.target.value)}
              className="flex-1 px-4 py-2.5 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
            />
            <button
              onClick={() => setShowResult(true)}
              className="bg-primary text-primary-foreground font-bold px-6 py-2.5 rounded-xl text-sm hover:opacity-90"
            >
              Lacak
            </button>
          </div>
        </div>

        {showResult && (
          <div className="bg-card rounded-2xl p-6 shadow-card animate-fade-in-up">
            <div className="flex items-center gap-3 mb-6">
              <Clock className="h-5 w-5 text-accent" />
              <div>
                <p className="font-bold text-sm">Resi: {resi || "JNE1234567890"}</p>
                <p className="text-xs text-muted-foreground">JNE Reguler • Estimasi tiba 28 Mar 2026</p>
              </div>
            </div>
            <div className="space-y-4">
              {mockTracking.map((step, i) => (
                <div key={i} className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className={`rounded-full p-1.5 ${step.done ? "bg-mint text-mint-foreground" : "bg-muted text-muted-foreground"}`}>
                      <step.icon className="h-4 w-4" />
                    </div>
                    {i < mockTracking.length - 1 && (
                      <div className={`w-0.5 flex-1 mt-1 ${step.done ? "bg-mint" : "bg-muted"}`} />
                    )}
                  </div>
                  <div className="pb-4">
                    <p className={`font-semibold text-sm ${step.done ? "text-foreground" : "text-muted-foreground"}`}>{step.status}</p>
                    <p className="text-xs text-muted-foreground">{step.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Tracking;
