import { motion } from "framer-motion";
import { MessageSquareWarning, Database } from "lucide-react";

const items = [
  {
    icon: MessageSquareWarning,
    title: "Đánh giá & Khiếu nại",
    description: "Thu thập phản hồi nhanh chóng và tự động phân công nhân viên xử lý khiếu nại tức thì để bảo vệ uy tín khách sạn.",
  },
  {
    icon: Database,
    title: "Quản lý dữ liệu",
    description: "Mọi thông tin khách hàng và lịch đặt phòng được tự động đồng bộ hóa và lưu trữ thông minh để dễ dàng quản lý.",
  },
];

const PostStaySection = () => {
  return (
    <section id="post-stay" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-body text-primary uppercase tracking-widest">Sau lưu trú</span>
          <h2 className="text-3xl md:text-5xl font-display font-bold mt-3 text-foreground">
            Sau Lưu Trú & <span className="text-gradient-gold">Quản Lý</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="glass-card p-8 flex gap-5"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-display font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground font-body leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PostStaySection;
