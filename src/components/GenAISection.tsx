import { motion } from "framer-motion";
import { Sparkles, HeartHandshake, Gift } from "lucide-react";

const features = [
  {
    icon: Sparkles,
    title: "GenAI Tư vấn hạng phòng",
    description: "Gợi ý hạng phòng phù hợp nhất dựa trên nhu cầu và ngân sách riêng biệt của từng khách hàng.",
  },
  {
    icon: HeartHandshake,
    title: "GenAI Hỗ trợ dịch vụ",
    description: "Tư vấn và hỗ trợ đặt các dịch vụ bổ trợ theo sở thích cá nhân.",
  },
  {
    icon: Gift,
    title: "Ưu đãi thông minh",
    description: "Cập nhật liên tục các chương trình khuyến mãi mới nhất để kích thích nhu cầu của khách.",
  },
];

const GenAISection = () => {
  return (
    <section id="genai" className="py-24 relative overflow-hidden">
      {/* Decorative glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-body text-primary uppercase tracking-widest">Advanced GenAI</span>
          <h2 className="text-3xl md:text-5xl font-display font-bold mt-3 text-foreground">
            Trải Nghiệm AI <span className="text-gradient-gold">Thế Hệ Mới</span>
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
              className="relative p-8 rounded-2xl border border-primary/20 bg-gradient-to-b from-primary/5 to-transparent group hover:border-primary/40 transition-all"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
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

export default GenAISection;
