import Layout from "@/components/Layout";
import HeroSection from "@/components/home/HeroSection";
import FlashSaleSection from "@/components/home/FlashSaleSection";
import CategoriesSection from "@/components/home/CategoriesSection";
import PopularSection from "@/components/home/PopularSection";
import VoucherSection from "@/components/home/VoucherSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";

const Index = () => (
  <Layout>
    <HeroSection />
    <FlashSaleSection />
    <CategoriesSection />
    <PopularSection />
    <VoucherSection />
    <TestimonialsSection />
  </Layout>
);

export default Index;
