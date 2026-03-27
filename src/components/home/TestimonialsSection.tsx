import { testimonials } from "@/lib/data";
import { Star } from "lucide-react";

const TestimonialsSection = () => (
  <section className="py-12" style={{ background: "var(--gradient-hero)" }}>
    <div className="container mx-auto px-4">
      <h2 className="text-2xl md:text-3xl font-extrabold text-foreground text-center mb-8">
        Kata Mereka 💬
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        {testimonials.map((t, i) => (
          <div key={i} className="bg-card rounded-2xl p-5 shadow-card">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-3xl">{t.avatar}</span>
              <div>
                <p className="font-bold text-sm">{t.name}</p>
                <div className="flex gap-0.5">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} className="h-3 w-3 fill-accent text-accent" />
                  ))}
                </div>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">{t.text}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
