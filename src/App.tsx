import { motion, AnimatePresence } from "motion/react";
import { 
  Globe, 
  TrendingUp, 
  Rocket, 
  Target, 
  Users, 
  ChevronRight, 
  Mail, 
  Phone, 
  MapPin,
  Menu,
  X,
  ArrowRight,
  ShieldCheck,
  Zap
} from "lucide-react";
import { useState, useEffect } from "react";

// Translations
const translations = {
  fr: {
    nav: {
      about: "À Propos",
      services: "Services",
      contact: "Contact",
      start: "Démarrer"
    },
    hero: {
      tag: "Leader en Performance au Canada",
      title: "Orientons votre",
      titleAccent: "succès",
      desc: "Global Performance Solutions (GPS) fournit les outils et l'expertise nécessaires pour naviguer dans la complexité des affaires modernes et atteindre l'excellence depuis nos bureaux à Toronto et Montréal.",
      ctaPrimary: "Nos services",
      ctaSecondary: "Prendre rendez-vous"
    },
    about: {
      tag: "À PROPOS DE GPS",
      title: "Expertise Globale, Impact Canadien.",
      desc: "Fondée sur la conviction que chaque défi est une opportunité de performance, GPS accompagne les organisations dans leur transformation stratégique à travers tout le Canada. Notre nom est notre promesse : nous guidons nos clients vers leurs objectifs les plus ambitieux.",
      stats: [
        { label: "Projets Réalisés", value: "500+" },
        { label: "Satisfaction Client", value: "98%" }
      ]
    },
    services: {
      title: "Nos Solutions de Haute Performance",
      desc: "Des outils de précision conçus pour le marché nord-américain.",
      items: [
        {
          title: "Optimisation de Performance",
          description: "Analyses approfondies et stratégies sur mesure pour décupler vos résultats opérationnels.",
          icon: <TrendingUp className="w-6 h-6" />,
        },
        {
          title: "Solutions Globales",
          description: "Une approche 360° pour votre entreprise, intégrant technologie et capital humain.",
          icon: <Globe className="w-6 h-6" />,
        },
        {
          title: "Stratégie de Croissance",
          description: "Accompagnement dans l'expansion de votre marché et l'innovation continue.",
          icon: <Rocket className="w-6 h-6" />,
        },
        {
          title: "Coaching de Leader",
          description: "Développement du potentiel de vos cadres pour une gestion de haute performance.",
          icon: <Target className="w-6 h-6" />,
        }
      ]
    },
    cta: {
      title: "Prêt pou la prochaine étape ?",
      desc: "Rejoignez les leaders canadiens qui font confiance à GPS pour transformer leurs visions en réalités tangibles.",
      button: "Contactez-nous aujourd'hui"
    },
    footer: {
      desc: "GPS est le leader canadien du conseil en performance et de l'innovation stratégique.",
      links: "Liens Rapides",
      contact: "Contact",
      address: "123 Bay St, Toronto, ON M5H 2Y4, Canada",
      rights: "© 2026 Global Performance Solutions (GPS). Tous droits réservés."
    }
  },
  en: {
    nav: {
      about: "About Us",
      services: "Services",
      contact: "Contact",
      start: "Get Started"
    },
    hero: {
      tag: "Canada's Performance Leader",
      title: "Guiding Your",
      titleAccent: "Success",
      desc: "Global Performance Solutions (GPS) provides the tools and expertise needed to navigate modern business complexity and achieve excellence from our Toronto and Montreal offices.",
      ctaPrimary: "Our Services",
      ctaSecondary: "Book a Meeting"
    },
    about: {
      tag: "ABOUT GPS",
      title: "Global Expertise, Canadian Impact.",
      desc: "Built on the belief that every challenge is a performance opportunity, GPS supports organizations in their strategic transformation across Canada. Our name is our promise: we guide our clients to their most ambitious goals.",
      stats: [
        { label: "Projects Completed", value: "500+" },
        { label: "Client Satisfaction", value: "98%" }
      ]
    },
    services: {
      title: "High-Performance Solutions",
      desc: "Precision tools designed for the North American market.",
      items: [
        {
          title: "Performance Optimization",
          description: "In-depth analysis and tailored strategies to multiply your operational results.",
          icon: <TrendingUp className="w-6 h-6" />,
        },
        {
          title: "Global Solutions",
          description: "A 360° approach for your business, integrating technology and human capital.",
          icon: <Globe className="w-6 h-6" />,
        },
        {
          title: "Growth Strategy",
          description: "Support in market expansion and continuous innovation.",
          icon: <Rocket className="w-6 h-6" />,
        },
        {
          title: "Leadership Coaching",
          description: "Developing executive potential for high-performance management.",
          icon: <Target className="w-6 h-6" />,
        }
      ]
    },
    cta: {
      title: "Ready for the Next Step?",
      desc: "Join Canadian leaders who trust GPS to transform their visions into tangible realities.",
      button: "Contact Us Today"
    },
    footer: {
      desc: "GPS is Canada's leader in performance consulting and strategic innovation.",
      links: "Quick Links",
      contact: "Contact",
      address: "123 Bay St, Toronto, ON M5H 2Y4, Canada",
      rights: "© 2026 Global Performance Solutions (GPS). All rights reserved."
    }
  }
};

const Logo = () => (
  <div className="flex items-center gap-2 group cursor-pointer">
    <div className="relative w-10 h-10 flex items-center justify-center bg-primary rounded-xl overflow-hidden shadow-lg transition-transform group-hover:scale-105">
      <Globe className="text-white w-6 h-6 z-10" />
      <div className="absolute inset-0 bg-gradient-to-tr from-primary to-blue-800" />
    </div>
    <span className="font-bold text-2xl tracking-tighter text-primary">
      GPS<span className="text-secondary">.</span>
    </span>
  </div>
);

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [lang, setLang] = useState<"en" | "fr">("fr");
  const t = translations[lang];

  useEffect(() => {
    // Optional: detect browser language
    const browserLang = navigator.language.split("-")[0];
    if (browserLang === "en") setLang("en");
  }, []);

  const toggleLang = () => setLang(lang === "en" ? "fr" : "en");

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-red-100 selection:text-secondary overflow-x-hidden">
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 glass border-b border-slate-200/50 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <Logo />
            
            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-10">
              <a href="#about" className="text-sm font-semibold hover:text-secondary transition-colors uppercase tracking-wider">{t.nav.about}</a>
              <a href="#services" className="text-sm font-semibold hover:text-secondary transition-colors uppercase tracking-wider">{t.nav.services}</a>
              <a href="#contact" className="text-sm font-semibold hover:text-secondary transition-colors uppercase tracking-wider">{t.nav.contact}</a>
              
              <div className="h-4 w-[1px] bg-slate-300 mx-2" />
              
              <button 
                onClick={toggleLang}
                className="text-xs font-bold bg-slate-100 px-3 py-1.5 rounded-md hover:bg-slate-200 transition-colors uppercase tracking-widest border border-slate-200"
              >
                {lang === "en" ? "FR" : "EN"}
              </button>

              <button className="bg-primary text-white px-7 py-3 rounded-xl text-sm font-bold hover:bg-primary/90 transition-all shadow-md active:scale-95">
                {t.nav.start}
              </button>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="md:hidden flex items-center gap-4">
               <button 
                onClick={toggleLang}
                className="text-xs font-bold bg-slate-100 px-3 py-1.5 rounded-md border border-slate-200"
              >
                {lang === "en" ? "FR" : "EN"}
              </button>
              <button 
                className="p-2 text-primary"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-b border-slate-200 overflow-hidden shadow-2xl"
            >
              <div className="px-6 py-8 flex flex-col gap-6">
                <a href="#about" className="text-2xl font-bold" onClick={() => setIsMenuOpen(false)}>{t.nav.about}</a>
                <a href="#services" className="text-2xl font-bold" onClick={() => setIsMenuOpen(false)}>{t.nav.services}</a>
                <a href="#contact" className="text-2xl font-bold" onClick={() => setIsMenuOpen(false)}>{t.nav.contact}</a>
                <button className="bg-primary text-white w-full py-4 rounded-2xl font-bold text-lg shadow-xl">
                  {t.nav.start}
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-44 pb-32 px-6 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-50 -z-20 skew-x-12 translate-x-32" />
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-secondary/5 rounded-full blur-3xl -z-10" />

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 bg-slate-100 border border-slate-200 px-4 py-2 rounded-full mb-8">
              <span className="w-2 h-2 bg-secondary rounded-full animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-widest text-slate-600">{t.hero.tag}</span>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-black text-primary leading-[1.1] mb-8">
              {t.hero.title} <br/>
              <span className="text-gradient italic">{t.hero.titleAccent}</span>
            </h1>
            
            <p className="text-xl text-slate-600 mb-12 leading-relaxed max-w-xl">
              {t.hero.desc}
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-5">
              <button className="w-full sm:w-auto bg-secondary text-white px-10 py-5 rounded-2xl text-lg font-bold hover:bg-red-700 transition-all shadow-xl shadow-red-100 flex items-center justify-center gap-3 group">
                {t.hero.ctaPrimary} <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="w-full sm:w-auto bg-white border-2 border-slate-200 text-primary px-10 py-5 rounded-2xl text-lg font-bold hover:bg-slate-50 transition-all flex items-center justify-center">
                {t.hero.ctaSecondary}
              </button>
            </div>

            <div className="mt-16 flex items-center gap-8 grayscale opacity-50">
               <div className="flex items-center gap-2"><ShieldCheck className="w-5 h-5 text-secondary" /> <span className="text-sm font-bold">Trusted</span></div>
               <div className="flex items-center gap-2"><Zap className="w-5 h-5 text-secondary" /> <span className="text-sm font-bold">Certified</span></div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-secondary/10 rounded-[3rem] translate-x-6 translate-y-6 -z-10" />
            <div className="aspect-[4/5] md:aspect-[4/3] rounded-[3rem] overflow-hidden shadow-2xl premium-shadow border-8 border-white">
              <img 
                src="/src/assets/hero.png" 
                alt="Canadian Business Office" 
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating Card */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -bottom-10 -left-10 bg-white p-6 rounded-3xl shadow-2xl border border-slate-100 hidden md:block"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center">
                   <TrendingUp className="text-green-600" />
                </div>
                <div>
                   <p className="text-xs font-bold text-slate-500 uppercase tracking-tighter">ROI increase</p>
                   <p className="text-2xl font-black text-primary">+42%</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="py-12 border-y border-slate-100 bg-slate-50/30">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-xs font-black uppercase tracking-[0.4em] text-slate-400 mb-10">Trusted by leading Canadian organizations</p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-700">
            {["TechNorth", "MapleCapital", "EcoQuebec", "NordicLogistics", "AuroraHealth"].map((logo, i) => (
              <span key={i} className="text-xl md:text-2xl font-black tracking-tighter text-primary">{logo}<span className="text-secondary">.</span></span>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <motion.section 
        id="about" 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="py-32 bg-slate-50"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div className="order-2 lg:order-1 relative">
               <div className="grid grid-cols-2 gap-6">
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100"
                  >
                    <h4 className="text-4xl font-black text-primary mb-2">500+</h4>
                    <p className="text-sm font-bold text-slate-500 uppercase tracking-widest">{t.about.stats[0].label}</p>
                  </motion.div>
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="bg-primary p-8 rounded-3xl shadow-xl mt-12"
                  >
                    <h4 className="text-4xl font-black text-white mb-2">98%</h4>
                    <p className="text-sm font-bold text-white/70 uppercase tracking-widest">{t.about.stats[1].label}</p>
                  </motion.div>
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="bg-secondary p-8 rounded-3xl shadow-xl"
                  >
                    <h4 className="text-4xl font-black text-white mb-2">15+</h4>
                    <p className="text-sm font-bold text-white/70 uppercase tracking-widest">Years Exp.</p>
                  </motion.div>
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 mt-12"
                  >
                    <h4 className="text-4xl font-black text-primary mb-2">24/7</h4>
                    <p className="text-sm font-bold text-slate-500 uppercase tracking-widest">Support</p>
                  </motion.div>
               </div>
            </div>

            <div className="order-1 lg:order-2 space-y-8">
              <h2 className="text-secondary font-black uppercase tracking-[0.3em] text-sm">{t.about.tag}</h2>
              <h3 className="text-4xl md:text-5xl font-black text-primary leading-tight">{t.about.title}</h3>
              <p className="text-lg text-slate-600 leading-relaxed">
                {t.about.desc}
              </p>
              <button className="flex items-center gap-3 font-bold text-primary group hover:text-secondary transition-colors">
                Learn more about our vision <ChevronRight className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Services Section */}
      <motion.section 
        id="services" 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1 }}
        className="py-32 px-6"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24 space-y-6">
            <h2 className="text-4xl md:text-6xl font-black text-primary">{t.services.title}</h2>
            <p className="text-xl text-slate-500 max-w-2xl mx-auto">{t.services.desc}</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {t.services.items.map((service, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -10 }}
                className="group p-10 rounded-[2.5rem] bg-white border border-slate-100 premium-shadow hover:border-secondary/20 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-slate-50 text-primary rounded-2xl flex items-center justify-center mb-8 group-hover:bg-secondary group-hover:text-white transition-colors duration-300">
                  {service.icon}
                </div>
                <h4 className="text-2xl font-black mb-6 group-hover:text-secondary transition-colors">{service.title}</h4>
                <p className="text-slate-500 leading-relaxed text-sm">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Locations Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div 
              whileHover={{ y: -5 }}
              className="p-10 rounded-[3rem] bg-slate-50 border border-slate-100 flex items-center gap-8 group transition-all"
            >
              <div className="w-20 h-20 bg-white rounded-3xl flex items-center justify-center shadow-sm group-hover:bg-secondary group-hover:text-white transition-colors">
                <MapPin size={32} />
              </div>
              <div>
                <h4 className="text-2xl font-black text-primary">Toronto</h4>
                <p className="text-slate-500 font-bold uppercase tracking-widest text-xs mt-1">Headquarters</p>
                <p className="text-slate-600 mt-2 text-sm">123 Bay Street, Financial District<br/>Toronto, ON M5H 2Y4</p>
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ y: -5 }}
              className="p-10 rounded-[3rem] bg-slate-50 border border-slate-100 flex items-center gap-8 group transition-all"
            >
              <div className="w-20 h-20 bg-white rounded-3xl flex items-center justify-center shadow-sm group-hover:bg-secondary group-hover:text-white transition-colors">
                <MapPin size={32} />
              </div>
              <div>
                <h4 className="text-2xl font-black text-primary">Montréal</h4>
                <p className="text-slate-500 font-bold uppercase tracking-widest text-xs mt-1">Regional Office</p>
                <p className="text-slate-600 mt-2 text-sm">1000 Gauchetière St W<br/>Montréal, QC H3B 4W5</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto bg-primary rounded-[4rem] p-16 md:p-24 text-center text-white relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-[80px]" />
          
          <div className="relative z-10 space-y-10">
            <h2 className="text-4xl md:text-7xl font-black mb-8">{t.cta.title}</h2>
            <p className="text-slate-300 text-xl mb-10 max-w-3xl mx-auto leading-relaxed">{t.cta.desc}</p>
            <button className="bg-white text-primary px-12 py-6 rounded-2xl text-xl font-bold hover:scale-105 active:scale-95 transition-all shadow-2xl shadow-black/20">
              {t.cta.button}
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-white border-t border-slate-100 pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-4 gap-16">
          <div className="space-y-8">
            <Logo />
            <p className="text-slate-500 leading-relaxed">
              {t.footer.desc}
            </p>
            <div className="flex gap-4">
              {[Users, Mail, Globe].map((Icon, idx) => (
                <div key={idx} className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center hover:bg-secondary hover:text-white cursor-pointer transition-all shadow-sm">
                  <Icon size={20} />
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h5 className="text-lg font-black mb-10 uppercase tracking-widest">{t.footer.links}</h5>
            <ul className="space-y-5 text-slate-500 font-bold">
              <li><a href="#" className="hover:text-secondary transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-secondary transition-colors">{t.nav.about}</a></li>
              <li><a href="#services" className="hover:text-secondary transition-colors">{t.nav.services}</a></li>
              <li><a href="#contact" className="hover:text-secondary transition-colors">Insights</a></li>
            </ul>
          </div>
          
          <div>
            <h5 className="text-lg font-black mb-10 uppercase tracking-widest">{t.nav.services}</h5>
            <ul className="space-y-5 text-slate-500 font-bold">
              <li><a href="#" className="hover:text-secondary transition-colors">Consulting</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Training</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Analytics</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Strategy</a></li>
            </ul>
          </div>

          <div>
            <h5 className="text-lg font-black mb-10 uppercase tracking-widest">{t.footer.contact}</h5>
            <ul className="space-y-6 text-slate-500 font-bold">
              <li className="flex items-start gap-4">
                <Mail size={20} className="text-secondary shrink-0 mt-1" /> 
                <span>info@gps-canada.com</span>
              </li>
              <li className="flex items-start gap-4">
                <Phone size={20} className="text-secondary shrink-0 mt-1" /> 
                <span>+1 (416) 555-0123</span>
              </li>
              <li className="flex items-start gap-4">
                <MapPin size={20} className="text-secondary shrink-0 mt-1" /> 
                <span>{t.footer.address}</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 border-t border-slate-100 mt-32 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm font-bold text-slate-400">
            {t.footer.rights}
          </p>
          <div className="flex gap-8 text-sm font-bold text-slate-400">
             <a href="#" className="hover:text-secondary">Privacy Policy</a>
             <a href="#" className="hover:text-secondary">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

