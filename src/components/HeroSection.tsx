import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="Luxury hotel pool at twilight" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-background/75" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
      </div>

      <div className="relative container mx-auto px-4 md:px-8 pt-24 pb-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          <div className="inline-block px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 mb-8">
            <span className="text-sm font-body text-primary">AI-Powered Hospitality</span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold leading-tight mb-6">
            <span className="text-foreground">StayJoy</span>
            <br />
            <span className="text-gradient-gold">Giải Pháp Marketing &</span>
            <br />
            <span className="text-gradient-gold">Chăm Sóc Khách Hàng</span>
            <br />
            <span className="text-foreground">Toàn Diện Bằng AI</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground font-body max-w-2xl mx-auto mb-10 leading-relaxed">
            Hỗ trợ tự động tư vấn và đặt phòng, cung cấp các thông tin khuyến mãi, dịch vụ cùng các tiện ích. Giúp tiết kiệm chi phí chăm sóc khách hàng.
          </p>

          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="inline-block px-8 py-4 rounded-xl bg-primary text-primary-foreground font-body font-semibold text-lg glow-gold hover:opacity-90 transition-opacity"
          >
            Đặt Lịch Tư Vấn Ngay
          </motion.a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto"
        >
          {[
            { value: "24/7", label: "Phản hồi tức thì" },
            { value: "3x", label: "Tăng tỉ lệ chuyển đổi" },
            { value: "60%", label: "Tiết kiệm chi phí" },
            { value: "100+", label: "Đối tác tin dùng" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl md:text-3xl font-display font-bold text-primary">{stat.value}</div>
              <div className="text-sm text-muted-foreground font-body mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
