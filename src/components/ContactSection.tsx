import { motion } from "framer-motion";
import { useState } from "react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", phone: "", email: "", business: "", message: "" });
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const { error } = await supabase.from("contact_submissions").insert({
        name: form.name,
        phone: form.phone,
        email: form.email || null,
        business: form.business || null,
        message: form.message || null,
      });
      if (error) throw error;
      toast.success("Cảm ơn bạn! Chúng tôi sẽ liên hệ sớm nhất.");
      setForm({ name: "", phone: "", email: "", business: "", message: "" });
    } catch {
      toast.error("Có lỗi xảy ra. Vui lòng thử lại sau.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground">
            Giải Pháp <span className="text-gradient-gold">May Đo</span> Theo Nhu Cầu Của Bạn
          </h2>
          <p className="text-muted-foreground font-body mt-4 max-w-2xl mx-auto text-lg leading-relaxed">
            StayJoy cung cấp các gói giải pháp linh hoạt phù hợp với từng quy mô kinh doanh. Hãy để chúng tôi giúp bạn tối ưu hóa vận hành ngay hôm nay.
          </p>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card p-8 md:p-12 max-w-2xl mx-auto"
        >
          <h3 className="text-2xl font-display font-bold text-foreground mb-8 text-center">
            Đăng Ký Tư Vấn Chi Tiết
          </h3>

          <div className="grid md:grid-cols-2 gap-5 mb-5">
            <div>
              <label className="text-sm font-body text-muted-foreground mb-1.5 block">Họ và tên *</label>
              <input
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-secondary border border-border font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                placeholder="Nguyễn Văn A"
              />
            </div>
            <div>
              <label className="text-sm font-body text-muted-foreground mb-1.5 block">Số điện thoại *</label>
              <input
                required
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-secondary border border-border font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                placeholder="0912 345 678"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-5 mb-5">
            <div>
              <label className="text-sm font-body text-muted-foreground mb-1.5 block">Email</label>
              <input
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-secondary border border-border font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                placeholder="email@domain.com"
              />
            </div>
            <div>
              <label className="text-sm font-body text-muted-foreground mb-1.5 block">Loại hình kinh doanh</label>
              <input
                value={form.business}
                onChange={(e) => setForm({ ...form, business: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-secondary border border-border font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                placeholder="Khách sạn, Resort, Villa..."
              />
            </div>
          </div>

          <div className="mb-8">
            <label className="text-sm font-body text-muted-foreground mb-1.5 block">Tin nhắn</label>
            <textarea
              rows={3}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full px-4 py-3 rounded-lg bg-secondary border border-border font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
              placeholder="Mô tả ngắn nhu cầu của bạn..."
            />
          </div>

          <button
            type="submit"
            disabled={submitting}
            className="w-full py-4 rounded-xl bg-primary text-primary-foreground font-body font-semibold text-lg glow-gold hover:opacity-90 transition-opacity disabled:opacity-50"
          >
            {submitting ? "Đang gửi..." : "Đặt Lịch Tư Vấn Ngay"}
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default ContactSection;
