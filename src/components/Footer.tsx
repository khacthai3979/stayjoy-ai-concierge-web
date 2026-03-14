const Footer = () => {
  return (
    <footer className="py-12 border-t border-border/30">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <a href="#" className="font-display text-2xl font-bold text-gradient-gold">
            StayJoy
          </a>
          <p className="text-sm text-muted-foreground font-body">
            © 2026 StayJoy. AI Marketing & Digital Receptionist cho ngành lưu trú.
          </p>
          <a
            href="#contact"
            className="text-sm text-primary font-body hover:underline"
          >
            Liên hệ để được tư vấn chi tiết
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
