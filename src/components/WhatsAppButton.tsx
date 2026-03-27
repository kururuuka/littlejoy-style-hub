import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => (
  <a
    href="https://wa.me/6281234567890?text=Halo%20LittleJoy!%20Saya%20ingin%20bertanya%20tentang%20produk%20baju%20anak."
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20BD5A] text-white p-4 rounded-full shadow-float transition-all hover:scale-110 animate-bounce-gentle"
    aria-label="Chat WhatsApp"
  >
    <MessageCircle className="h-6 w-6" />
  </a>
);

export default WhatsAppButton;
