import { motion } from "framer-motion";
import { Zap, BellRing, Compass } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Đặt phòng nhanh chóng",
    description: "Khách chỉ cần vài thao tác điền thông tin để hoàn tất đặt phòng ngay trong khung chat.",
  },
  {
    icon: BellRing,
    title: "Tự động bám đuổi",
    description: "AI nhắc nhớ và thuyết phục khéo léo những khách hàng còn đang cân nhắc, tăng tỉ lệ chốt đơn.",
  },
  {
    icon: Compass,
    title: "Khám phá dịch vụ",
    description: "Giúp khách hàng nhanh chóng tìm hiểu các tiện ích đi kèm (Spa, Tour, Nhà hàng) một cách dễ dàng và hứng thú.",
  },
];

const ConversionSection = () => {
  return (
    <section id="conversion" className="py-24 bg-secondary/30 relative">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-body text-primary uppercase tracking-widest">Conversion Engine</span>
          <h2 className="text-3xl md:text-5xl font-display font-bold mt-3 text-foreground">
            Biến Quan Tâm Thành <span className="text-gradient-gold">Đặt Phòng</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              className="glass-card p-8 text-center group hover:border-primary/30 transition-colors"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                <f.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-display font-bold text-foreground mb-3">{f.title}</h3>
              <p className="text-muted-foreground font-body leading-relaxed">{f.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ConversionSection;
