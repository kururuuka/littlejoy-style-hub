import Layout from "@/components/Layout";
import heroBanner from "@/assets/hero-banner.jpg";

const About = () => (
  <Layout>
    <div className="container mx-auto px-4 py-8 max-w-3xl">
      <h1 className="text-3xl font-extrabold text-foreground mb-6">About Us 🌈</h1>

      <div className="rounded-2xl overflow-hidden mb-8">
        <img src={heroBanner} alt="LittleJoy Team" className="w-full h-64 object-cover" loading="lazy" />
      </div>

      <div className="space-y-8">
        <div className="bg-card rounded-2xl p-6 shadow-card">
          <h2 className="font-extrabold text-xl mb-3">Cerita Kami 💕</h2>
          <p className="text-muted-foreground leading-relaxed">
            LittleJoy lahir dari kecintaan kami terhadap dunia anak-anak. Berawal dari keinginan seorang ibu untuk menemukan baju anak yang berkualitas, nyaman, dan tetap stylish dengan harga terjangkau, kami memulai perjalanan ini di tahun 2023.
          </p>
          <p className="text-muted-foreground leading-relaxed mt-3">
            Setiap produk kami dipilih dengan cermat, mengutamakan bahan yang aman dan nyaman untuk kulit sensitif anak-anak. Kami percaya bahwa setiap anak berhak tampil ceria dan percaya diri dengan pakaian yang mereka kenakan.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-primary/5 rounded-2xl p-6">
            <h3 className="font-extrabold text-lg mb-2">🎯 Visi</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Menjadi toko baju anak terpercaya #1 di Indonesia yang menghadirkan kebahagiaan melalui pakaian berkualitas dan desain ceria.
            </p>
          </div>
          <div className="bg-secondary/10 rounded-2xl p-6">
            <h3 className="font-extrabold text-lg mb-2">💡 Misi</h3>
            <ul className="text-sm text-muted-foreground space-y-2">
              <li>✨ Menyediakan baju anak dengan bahan premium dan aman</li>
              <li>🎨 Menghadirkan desain yang ceria dan kekinian</li>
              <li>💰 Menawarkan harga yang terjangkau untuk semua keluarga</li>
              <li>🤝 Memberikan pelayanan terbaik kepada pelanggan</li>
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4 text-center">
          <div className="bg-accent/20 rounded-2xl p-6">
            <span className="text-3xl font-extrabold text-foreground">500+</span>
            <p className="text-sm text-muted-foreground mt-1">Produk</p>
          </div>
          <div className="bg-mint/20 rounded-2xl p-6">
            <span className="text-3xl font-extrabold text-foreground">10K+</span>
            <p className="text-sm text-muted-foreground mt-1">Pelanggan</p>
          </div>
          <div className="bg-primary/10 rounded-2xl p-6">
            <span className="text-3xl font-extrabold text-foreground">4.9⭐</span>
            <p className="text-sm text-muted-foreground mt-1">Rating</p>
          </div>
        </div>
      </div>
    </div>
  </Layout>
);

export default About;
