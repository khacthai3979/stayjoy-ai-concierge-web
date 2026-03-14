import { motion } from "framer-motion";
import { Home, Building2 } from "lucide-react";
import homestayImg from "@/assets/homestay.jpg";
import resortImg from "@/assets/resort.jpg";

const solutions = [
  {
    icon: Home,
    title: "Tối Ưu Chi Phí",
    segment: "Khách sạn nhỏ, Homestay, Villa",
    description: "Hỗ trợ giải pháp chăm sóc khách chuyên nghiệp, phản hồi tức thì 24/7 mà không tốn chi phí nhân sự.",
    image: homestayImg,
  },
  {
    icon: Building2,
    title: "Tăng Cường Doanh Thu",
    segment: "Khách sạn, Resort vừa và lớn",
    description: "Tối ưu quy trình đặt phòng số lượng lớn, chăm sóc khách hàng cá nhân hóa và giảm sự phụ thuộc vào các sàn trung gian.",
    image: resortImg,
  },
];

const SolutionsSection = () => {
  return (
    <section id="solutions" className="py-24 relative">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-body text-primary uppercase tracking-widest">Mô hình lưu trú</span>
          <h2 className="text-3xl md:text-5xl font-display font-bold mt-3 text-foreground">
            Giải Pháp Theo <span className="text-gradient-gold">Quy Mô</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {solutions.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="glass-card overflow-hidden group"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={s.image}
                  alt={s.segment}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
              </div>
              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <s.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-display font-bold text-foreground">{s.title}</h3>
                    <p className="text-sm text-primary font-body">{s.segment}</p>
                  </div>
                </div>
                <p className="text-muted-foreground font-body leading-relaxed">{s.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
