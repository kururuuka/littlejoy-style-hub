export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  images: string[];
  category: string;
  sizes: string[];
  colors: string[];
  description: string;
  rating: number;
  reviewCount: number;
  isFlashSale?: boolean;
  isNew?: boolean;
  isPopular?: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
  size: string;
  color: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  date: string;
  image: string;
  readTime: string;
}

export const categories = [
  { id: "bayi", name: "Bayi (0-1 thn)", icon: "👶", color: "bg-primary/10" },
  { id: "balita", name: "Balita (1-3 thn)", icon: "🧒", color: "bg-secondary/10" },
  { id: "anak", name: "Anak (4-8 thn)", icon: "👧", color: "bg-accent/10" },
  { id: "pra-remaja", name: "Pra-Remaja (9-12 thn)", icon: "👦", color: "bg-mint/10" },
  { id: "dress", name: "Dress & Rok", icon: "👗", color: "bg-primary/10" },
  { id: "atasan", name: "Atasan", icon: "👕", color: "bg-secondary/10" },
  { id: "bawahan", name: "Celana & Rok", icon: "👖", color: "bg-accent/10" },
  { id: "setelan", name: "Setelan", icon: "🎽", color: "bg-mint/10" },
];

const placeholderImg = "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?w=400&q=80";
const placeholderImg2 = "https://pin.it/3hPlortU1";
const placeholderImg3 = "https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?w=400&q=80";
const placeholderImg4 = "https://images.unsplash.com/photo-1471286174890-9c112ffca5b4?w=400&q=80";
const placeholderImg5 = "https://images.unsplash.com/photo-1503944583220-79d8926ad5e2?w=400&q=80";
const placeholderImg6 = "https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?w=400&q=80";

export const products: Product[] = [
  {
    id: "1", name: "Dress Bunga Sakura", price: 129000, originalPrice: 189000,
    images: [placeholderImg, placeholderImg2], category: "dress",
    sizes: ["S (1-2 thn)", "M (3-4 thn)", "L (5-6 thn)", "XL (7-8 thn)"],
    colors: ["Pink", "Putih", "Kuning"],
    description: "Dress bunga sakura yang cantik dengan bahan katun lembut. Nyaman dipakai sehari-hari maupun untuk acara spesial.",
    rating: 4.8, reviewCount: 124, isFlashSale: true, isPopular: true,
  },
  {
    id: "2", name: "Kaos Dino Adventure", price: 79000, originalPrice: 99000,
    images: [placeholderImg3, placeholderImg4], category: "atasan",
    sizes: ["S (1-2 thn)", "M (3-4 thn)", "L (5-6 thn)"],
    colors: ["Biru Muda", "Hijau Mint", "Abu-abu"],
    description: "Kaos bergambar dinosaurus lucu dengan bahan cotton combed 30s yang adem dan nyaman.",
    rating: 4.6, reviewCount: 89, isFlashSale: true, isPopular: true,
  },
  {
    id: "3", name: "Setelan Rainbow Stripe", price: 159000, originalPrice: 219000,
    images: [placeholderImg5, placeholderImg6], category: "setelan",
    sizes: ["S (1-2 thn)", "M (3-4 thn)", "L (5-6 thn)", "XL (7-8 thn)"],
    colors: ["Multicolor", "Pink-Kuning", "Biru-Hijau"],
    description: "Setelan atasan dan celana dengan motif rainbow stripe yang ceria. Bahan adem dan menyerap keringat.",
    rating: 4.9, reviewCount: 203, isPopular: true,
  },
  {
    id: "4", name: "Overall Denim Mini", price: 189000,
    images: [placeholderImg2, placeholderImg], category: "bawahan",
    sizes: ["M (3-4 thn)", "L (5-6 thn)", "XL (7-8 thn)"],
    colors: ["Biru Denim", "Biru Muda"],
    description: "Overall denim yang stylish untuk si kecil. Cocok dipadukan dengan berbagai atasan.",
    rating: 4.7, reviewCount: 67, isNew: true,
  },
  {
    id: "5", name: "Piyama Unicorn Dream", price: 119000, originalPrice: 149000,
    images: [placeholderImg4, placeholderImg3], category: "setelan",
    sizes: ["S (1-2 thn)", "M (3-4 thn)", "L (5-6 thn)"],
    colors: ["Ungu Pastel", "Pink", "Putih"],
    description: "Piyama motif unicorn yang lembut. Bahan kaos yang nyaman untuk tidur si kecil.",
    rating: 4.5, reviewCount: 156, isFlashSale: true,
  },
  {
    id: "6", name: "Kemeja Batik Anak", price: 139000,
    images: [placeholderImg6, placeholderImg5], category: "atasan",
    sizes: ["M (3-4 thn)", "L (5-6 thn)", "XL (7-8 thn)", "XXL (9-10 thn)"],
    colors: ["Cokelat", "Merah", "Biru Navy"],
    description: "Kemeja batik modern untuk anak. Cocok untuk acara formal dan hari besar nasional.",
    rating: 4.4, reviewCount: 45, isNew: true, isPopular: true,
  },
  {
    id: "7", name: "Rok Tutu Princess", price: 99000, originalPrice: 139000,
    images: [placeholderImg, placeholderImg5], category: "dress",
    sizes: ["S (1-2 thn)", "M (3-4 thn)", "L (5-6 thn)"],
    colors: ["Pink", "Putih", "Ungu"],
    description: "Rok tutu berlapis yang cantik seperti princess. Bahan tulle lembut dan tidak gatal.",
    rating: 4.8, reviewCount: 178, isPopular: true,
  },
  {
    id: "8", name: "Jogger Pants Comfy", price: 89000,
    images: [placeholderImg3, placeholderImg6], category: "bawahan",
    sizes: ["S (1-2 thn)", "M (3-4 thn)", "L (5-6 thn)", "XL (7-8 thn)"],
    colors: ["Abu-abu", "Navy", "Hitam", "Olive"],
    description: "Celana jogger yang super nyaman untuk aktivitas sehari-hari si kecil.",
    rating: 4.3, reviewCount: 92, isNew: true,
  },
];

export const vouchers = [
  { code: "NEWMOM20", discount: "20%", description: "Diskon 20% untuk ibu baru", minPurchase: 200000, expiry: "2026-04-30" },
  { code: "FLASHSALE50", discount: "Rp50.000", description: "Potongan langsung Rp50.000", minPurchase: 300000, expiry: "2026-04-15" },
  { code: "FREESHIP", discount: "Gratis Ongkir", description: "Gratis ongkir se-Indonesia", minPurchase: 150000, expiry: "2026-05-01" },
];

export const testimonials = [
  { name: "Mama Ayu", text: "Bahan bajunya lembut banget, anak saya betah pakai seharian! Desainnya juga lucu-lucu. Pasti repeat order! 💕", rating: 5, avatar: "👩" },
  { name: "Bunda Rina", text: "Pengiriman cepat dan packaging rapi. Ukurannya juga pas sesuai chart. Recommended banget!", rating: 5, avatar: "👩‍🦱" },
  { name: "Mama Dita", text: "Sudah 3x order di LittleJoy, selalu puas. Harga terjangkau tapi kualitas premium. Love it! ❤️", rating: 5, avatar: "👩‍🦰" },
  { name: "Papa Budi", text: "Istri senang banget dapat surprise baju anak dari sini. Pilihan warnanya ceria dan eye-catching!", rating: 4, avatar: "👨" },
];

export const blogPosts: BlogPost[] = [
  {
    id: "1", title: "Tips Memilih Baju Bayi yang Nyaman",
    excerpt: "Panduan lengkap memilih bahan dan ukuran baju yang tepat untuk bayi Anda.",
    content: "Memilih baju bayi memerlukan perhatian khusus pada bahan, ukuran, dan kenyamanan. Pilihlah bahan katun organik yang lembut di kulit bayi. Hindari bahan sintetis yang bisa menyebabkan iritasi. Pastikan ukuran tidak terlalu ketat agar bayi bisa bergerak dengan bebas.\n\nBeberapa tips penting:\n1. Pilih bahan katun 100% atau katun organik\n2. Perhatikan label care instruction\n3. Hindari aksesoris yang mudah lepas\n4. Pilih warna-warna cerah yang aman (pewarna non-toxic)\n5. Sesuaikan ukuran dengan berat dan tinggi badan bayi",
    category: "tips", date: "2026-03-20", image: placeholderImg, readTime: "5 min",
  },
  {
    id: "2", title: "Inspirasi Outfit Anak Kekinian",
    excerpt: "Ide mix and match baju anak yang stylish dan tetap nyaman untuk bermain.",
    content: "Anak-anak juga bisa tampil stylish! Kuncinya adalah memilih outfit yang nyaman sekaligus modis. Coba padukan kaos grafis dengan jogger pants untuk look yang casual dan trendy.\n\nBeberapa ide outfit:\n1. Dress bunga + cardigan untuk acara outdoor\n2. Kaos oversize + celana pendek untuk bermain\n3. Setelan linen untuk acara formal\n4. Overall denim + t-shirt untuk everyday style",
    category: "fashion", date: "2026-03-15", image: placeholderImg2, readTime: "4 min",
  },
  {
    id: "3", title: "Panduan Memilih Ukuran Baju Anak",
    excerpt: "Size chart lengkap dan tips agar tidak salah pilih ukuran baju anak.",
    content: "Salah pilih ukuran baju anak adalah masalah yang sering dialami orang tua. Berikut panduan lengkapnya:\n\n1. Ukur tinggi dan berat badan anak\n2. Bandingkan dengan size chart\n3. Jika ragu, pilih ukuran yang lebih besar\n4. Perhatikan bahwa setiap brand mungkin memiliki ukuran yang berbeda\n5. Simpan catatan ukuran terakhir anak",
    category: "parenting", date: "2026-03-10", image: placeholderImg3, readTime: "6 min",
  },
];

export const sizeChart = [
  { size: "S", age: "1-2 thn", height: "80-90 cm", weight: "10-12 kg", chest: "50-52 cm" },
  { size: "M", age: "3-4 thn", height: "90-100 cm", weight: "12-16 kg", chest: "52-56 cm" },
  { size: "L", age: "5-6 thn", height: "100-115 cm", weight: "16-20 kg", chest: "56-60 cm" },
  { size: "XL", age: "7-8 thn", height: "115-130 cm", weight: "20-26 kg", chest: "60-66 cm" },
  { size: "XXL", age: "9-10 thn", height: "130-140 cm", weight: "26-32 kg", chest: "66-72 cm" },
];
