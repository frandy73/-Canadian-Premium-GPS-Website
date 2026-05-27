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
import { useState, useEffect, type FormEvent } from "react";

// Translations
const translations = {
  fr: {
    nav: {
      about: "À Propos",
      services: "Solutions",
      contact: "Contact",
      start: "Commencer"
    },
    hero: {
      tag: "Performance en Milieu Hospitalier",
      title: "Gestion de la performance",
      titleAccent: "en milieu hospitalier",
      desc: "Mobiliser les équipes pour une meilleure qualité de soins. GPS accompagne les organisations hospitalières dans leur transformation stratégique grâce au développement du leadership, de la performance et de la mobilisation des équipes.",
      ctaPrimary: "Nos services",
      ctaSecondary: "Prendre rendez-vous"
    },
    about: {
      tag: "À PROPOS DE GPS",
      title: "Notre Mission",
      desc: "Accompagner les organisations dans leur transformation stratégique grâce au développement du leadership, de la performance et de la mobilisation des équipes. Notre nom est notre promesse : guider nos clients vers leurs objectifs les plus ambitieux.",
      mission: "Accompagner les organisations dans leur transformation stratégique grâce au développement du leadership, de la performance et de la mobilisation des équipes.",
      values: ["Excellence", "Innovation", "Collaboration", "Intégrité", "Engagement humain", "Performance durable"],
      whatDistinguishes: [
        "Une approche centrale sur l'humain.",
        "Des solutions adaptées à la réalité du terrain.",
        "Une expertise en gestion de la performance et de la mobilisation.",
        "Des formations pratiques orientées vers l'action."
      ],
      whyChooseUs: [
        {
          title: "Une expertise terrain concret",
          desc: "Contrairement aux approches théoriques, nos solutions sont ancrées dans la réalité quotidienne du secteur hospitalier. Nous comprenons les défis uniques auxquels font face les équipes soignantes et administratives, ce qui nous permet de proposer des interventions immédiatement applicables et efficaces."
        },
        {
          title: "La performance par l'humain",
          desc: "Chez GPS, nous croyons fermement que la qualité des soins repose sur l'engagement des équipes. Notre méthodologie ne se limite pas aux chiffres ; nous plaçons l'humain au cœur de chaque transformation pour cultiver un environnement de travail sain, motivant et durable."
        },
        {
          title: "Un engagement vers des résultats durables",
          desc: "Notre mission va au-delà du conseil ponctuel. Nous travaillons en partenariat étroit avec vous pour développer un leadership solide et mobilisateur durablement vos troupes, garantissant ainsi que les changements apportés aujourd'hui se traduisent par une excellence opérationnelle constante demain."
        }
      ],
      stats: [
        { label: "Hôpitaux accompagnés", value: "150+" },
        { label: "Satisfaction Client", value: "98%" }
      ]
    },
    services: {
      title: "Nos Solutions en Performance Hospitalière",
      desc: "Des solutions adaptées à la réalité du terrain pour mobiliser vos équipes.",
      items: [
        {
          title: "Gestion de la Performance",
          description: "Analyse approfondie et stratégies sur mesure pour optimiser la performance de vos équipes soignantes et administratives.",
          icon: <TrendingUp className="w-6 h-6" />,
        },
        {
          title: "Mobilisation des Équipes",
          description: "Programmes de mobilisation et d'engagement pour cultiver un environnement de travail sain et motivant.",
          icon: <Users className="w-6 h-6" />,
        },
        {
          title: "Développement du Leadership",
          description: "Formation et coaching des leaders hospitaliers pour un leadership solide et mobilisateur.",
          icon: <Target className="w-6 h-6" />,
        },
        {
          title: "Formations Pratiques",
          description: "Ateliers et formations orientés vers l'action, directement applicables dans votre contexte hospitalier.",
          icon: <Rocket className="w-6 h-6" />,
        }
      ]
    },
    cta: {
      title: "Prêt à transformer votre performance ?",
      desc: "Rejoignez les hôpitaux et organisations de santé qui font confiance à GPS pour mobiliser leurs équipes et atteindre l'excellence des soins.",
      button: "Contactez-nous aujourd'hui"
    },
    form: {
      title: "Contactez-nous",
      name: "Nom complet",
      nameError: "Veuillez entrer votre nom",
      email: "Adresse courriel",
      emailError: "Veuillez entrer un courriel valide",
      message: "Message",
      messageError: "Veuillez entrer votre message",
      submit: "Envoyer",
      close: "Fermer",
      successTitle: "Message envoyé !",
      successDesc: "Nous vous répondrons dans les plus brefs délais.",
      error: "Une erreur est survenue. Veuillez réessayer."
    },
    footer: {
      desc: "GPS est le partenaire de référence en gestion de la performance et mobilisation des équipes en milieu hospitalier.",
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
      tag: "Hospital Performance Management",
      title: "Performance Management",
      titleAccent: "in Healthcare",
      desc: "Mobilize teams for better quality care. GPS supports hospital organizations in their strategic transformation through leadership development, performance improvement, and team engagement.",
      ctaPrimary: "Our Services",
      ctaSecondary: "Book a Meeting"
    },
    about: {
      tag: "ABOUT GPS",
      title: "Our Mission",
      desc: "Support organizations in their strategic transformation through leadership development, performance improvement, and team engagement. Our name is our promise: to guide our clients toward their most ambitious goals.",
      mission: "Support organizations in their strategic transformation through leadership development, performance improvement, and team engagement.",
      values: ["Excellence", "Innovation", "Collaboration", "Integrity", "Human Engagement", "Sustainable Performance"],
      whatDistinguishes: [
        "A people-centered approach.",
        "Solutions adapted to field realities.",
        "Expertise in performance management and team engagement.",
        "Practical, action-oriented training."
      ],
      whyChooseUs: [
        {
          title: "Concrete Field Expertise",
          desc: "Unlike theoretical approaches, our solutions are rooted in the daily reality of the healthcare sector. We understand the unique challenges faced by care and administrative teams, enabling us to propose immediately applicable and effective interventions."
        },
        {
          title: "Performance Through People",
          desc: "At GPS, we firmly believe that quality of care depends on team engagement. Our methodology goes beyond numbers; we place people at the heart of every transformation to cultivate a healthy, motivating, and sustainable work environment."
        },
        {
          title: "Commitment to Lasting Results",
          desc: "Our mission goes beyond occasional consulting. We work in close partnership with you to develop strong leadership and sustainably mobilize your teams, ensuring that the changes made today translate into constant operational excellence tomorrow."
        }
      ],
      stats: [
        { label: "Hospitals Supported", value: "150+" },
        { label: "Client Satisfaction", value: "98%" }
      ]
    },
    services: {
      title: "Healthcare Performance Solutions",
      desc: "Field-adapted solutions to mobilize your teams.",
      items: [
        {
          title: "Performance Management",
          description: "In-depth analysis and tailored strategies to optimize the performance of your care and administrative teams.",
          icon: <TrendingUp className="w-6 h-6" />,
        },
        {
          title: "Team Engagement",
          description: "Engagement and commitment programs to cultivate a healthy and motivating work environment.",
          icon: <Users className="w-6 h-6" />,
        },
        {
          title: "Leadership Development",
          description: "Training and coaching for hospital leaders for strong and mobilizing leadership.",
          icon: <Target className="w-6 h-6" />,
        },
        {
          title: "Practical Training",
          description: "Action-oriented workshops and training, directly applicable in your hospital context.",
          icon: <Rocket className="w-6 h-6" />,
        }
      ]
    },
    cta: {
      title: "Ready to Transform Your Performance?",
      desc: "Join hospitals and healthcare organizations that trust GPS to mobilize their teams and achieve care excellence.",
      button: "Contact Us Today"
    },
    form: {
      title: "Contact Us",
      name: "Full Name",
      nameError: "Please enter your name",
      email: "Email Address",
      emailError: "Please enter a valid email",
      message: "Message",
      messageError: "Please enter your message",
      submit: "Send Message",
      close: "Close",
      successTitle: "Message Sent!",
      successDesc: "We will get back to you shortly.",
      error: "An error occurred. Please try again."
    },
    footer: {
      desc: "GPS is the reference partner in performance management and team engagement in healthcare settings.",
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

  const [showContactForm, setShowContactForm] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [formErrors, setFormErrors] = useState<{ name?: string; email?: string; message?: string }>({});
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formSuccess, setFormSuccess] = useState(false);

  const validateForm = () => {
    const errors: { name?: string; email?: string; message?: string } = {};
    if (!formData.name.trim()) errors.name = t.form.nameError;
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) errors.email = t.form.emailError;
    if (!formData.message.trim()) errors.message = t.form.messageError;
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    setFormSuccess(true);
    setFormData({ name: "", email: "", message: "" });
  };

  const closeForm = () => {
    setShowContactForm(false);
    setFormSuccess(false);
    setFormErrors({});
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-red-100 selection:text-secondary overflow-x-hidden">
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 glass border-b border-slate-200/50 transition-all duration-300" role="navigation" aria-label="Main navigation">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <Logo />
            
            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-10">
              <a href="#about" className="text-sm font-semibold hover:text-secondary transition-colors uppercase tracking-wider text-slate-700" aria-current="location">{t.nav.about}</a>
              <a href="#services" className="text-sm font-semibold hover:text-secondary transition-colors uppercase tracking-wider text-slate-700">{t.nav.services}</a>
              <a href="#contact" className="text-sm font-semibold hover:text-secondary transition-colors uppercase tracking-wider text-slate-700">{t.nav.contact}</a>
              
              <div className="h-4 w-[1px] bg-slate-300 mx-2" aria-hidden="true" />
              
              <button 
                onClick={toggleLang}
                aria-label={lang === "en" ? "Passer en français" : "Switch to English"}
                className="text-xs font-bold bg-slate-100 px-3 py-1.5 rounded-md hover:bg-slate-200 transition-colors uppercase tracking-widest border border-slate-200"
              >
                {lang === "en" ? "FR" : "EN"}
              </button>

              <button
                onClick={() => setShowContactForm(true)}
                aria-label={t.nav.start}
                className="bg-primary text-white px-7 py-3 rounded-xl text-sm font-bold hover:bg-primary/90 transition-all shadow-md active:scale-95"
              >
                {t.nav.start}
              </button>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="md:hidden flex items-center gap-4">
               <button 
                onClick={toggleLang}
                aria-label={lang === "en" ? "Passer en français" : "Switch to English"}
                className="text-xs font-bold bg-slate-100 px-3 py-1.5 rounded-md border border-slate-200"
              >
                {lang === "en" ? "FR" : "EN"}
              </button>
              <button 
                className="p-2 text-primary"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-expanded={isMenuOpen}
                aria-controls="mobile-menu"
                aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
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
              id="mobile-menu"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-b border-slate-200 overflow-hidden shadow-2xl"
              role="menu"
            >
              <div className="px-6 py-8 flex flex-col gap-6">
                <a href="#about" className="text-2xl font-bold text-slate-700" onClick={() => setIsMenuOpen(false)} role="menuitem">{t.nav.about}</a>
                <a href="#services" className="text-2xl font-bold text-slate-700" onClick={() => setIsMenuOpen(false)} role="menuitem">{t.nav.services}</a>
                <a href="#contact" className="text-2xl font-bold text-slate-700" onClick={() => setIsMenuOpen(false)} role="menuitem">{t.nav.contact}</a>
                <button
                  className="bg-primary text-white w-full py-4 rounded-2xl font-bold text-lg shadow-xl"
                  role="menuitem"
                  onClick={() => { setIsMenuOpen(false); setShowContactForm(true); }}
                >
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
              <span className="text-xs font-bold uppercase tracking-widest text-slate-600">{lang === "fr" ? "Performance en Milieu Hospitalier" : "Healthcare Performance"}</span>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-black text-primary leading-[1.1] mb-8">
              {t.hero.title} <br/>
              <span className="text-gradient italic">{t.hero.titleAccent}</span>
            </h1>
            
            <p className="text-xl text-slate-600 mb-12 leading-relaxed max-w-xl">
              {t.hero.desc}
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-5">
              <button
                onClick={() => setShowContactForm(true)}
                aria-label={t.hero.ctaPrimary}
                className="w-full sm:w-auto bg-secondary text-white px-10 py-5 rounded-2xl text-lg font-bold hover:bg-red-700 transition-all shadow-xl shadow-red-100 flex items-center justify-center gap-3 group"
              >
                {t.hero.ctaPrimary} <ArrowRight className="group-hover:translate-x-1 transition-transform" aria-hidden="true" />
              </button>
              <button
                onClick={() => setShowContactForm(true)}
                aria-label={t.hero.ctaSecondary}
                className="w-full sm:w-auto bg-white border-2 border-slate-200 text-primary px-10 py-5 rounded-2xl text-lg font-bold hover:bg-slate-50 transition-all flex items-center justify-center"
              >
                {t.hero.ctaSecondary}
              </button>
            </div>

            <div className="mt-16 flex items-center gap-8 grayscale opacity-50" aria-hidden="true">
               <div className="flex items-center gap-2"><ShieldCheck className="w-5 h-5 text-secondary" aria-hidden="true" /> <span className="text-sm font-bold">Trusted</span></div>
               <div className="flex items-center gap-2"><Zap className="w-5 h-5 text-secondary" aria-hidden="true" /> <span className="text-sm font-bold">Certified</span></div>
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
                   <p className="text-xs font-bold text-slate-600 uppercase tracking-tighter">{lang === "fr" ? "Amélioration de la performance" : "Performance improvement"}</p>
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
          <p className="text-center text-xs font-black uppercase tracking-[0.4em] text-slate-400 mb-10">{lang === "fr" ? "Appuyé par des organisations de santé de premier plan" : "Trusted by leading healthcare organizations"}</p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-700">
            {["HôpitalGénéral", "SantéPlus", "CareMedic", "VieSanté", "MédecinsU"].map((logo, i) => (
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
          <div className="text-center mb-20 space-y-6">
            <h2 className="text-secondary font-black uppercase tracking-[0.3em] text-sm">{t.about.tag}</h2>
            <h3 className="text-4xl md:text-5xl font-black text-primary leading-tight">{t.about.title}</h3>
            <p className="text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto">
              {t.about.mission}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-24 items-center mb-32">
            <div className="order-2 lg:order-1 relative">
               <div className="grid grid-cols-2 gap-6">
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100"
                  >
                    <h4 className="text-4xl font-black text-primary mb-2">150+</h4>
                    <p className="text-sm font-bold text-slate-600 uppercase tracking-widest">{t.about.stats[0].label}</p>
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
                    <p className="text-sm font-bold text-slate-600 uppercase tracking-widest">Support</p>
                  </motion.div>
               </div>
            </div>

            <div className="order-1 lg:order-2 space-y-8">
              <h4 className="text-2xl font-black text-primary">{lang === "fr" ? "Nos Valeurs" : "Our Values"}</h4>
              <div className="flex flex-wrap gap-3">
                {t.about.values.map((value, i) => (
                  <span key={i} className="px-5 py-2.5 bg-white border border-slate-200 rounded-full text-sm font-bold text-primary hover:bg-primary hover:text-white transition-colors cursor-default">
                    {value}
                  </span>
                ))}
              </div>
              <h4 className="text-2xl font-black text-primary pt-4">{lang === "fr" ? "Ce qui nous distingue" : "What Distinguishes Us"}</h4>
              <ul className="space-y-4">
                {t.about.whatDistinguishes.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-600">
                    <span className="w-2 h-2 bg-secondary rounded-full mt-2 shrink-0" />
                    <span className="text-lg leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="space-y-16">
            <div className="text-center">
              <h3 className="text-4xl md:text-5xl font-black text-primary leading-tight">{lang === "fr" ? "Pourquoi nous choisir ?" : "Why Choose Us?"}</h3>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {t.about.whyChooseUs.map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className="bg-white p-10 rounded-3xl border border-slate-100 premium-shadow hover:border-secondary/20 transition-all duration-300"
                >
                  <div className="w-14 h-14 bg-secondary/10 rounded-2xl flex items-center justify-center mb-6">
                    <span className="text-secondary font-black text-xl">{i + 1}</span>
                  </div>
                  <h4 className="text-xl font-black text-primary mb-4">{item.title}</h4>
                  <p className="text-slate-600 leading-relaxed text-sm">{item.desc}</p>
                </motion.div>
              ))}
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
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">{t.services.desc}</p>
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
                <p className="text-slate-600 leading-relaxed text-sm">
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
                <p className="text-slate-600 font-bold uppercase tracking-widest text-xs mt-1">{lang === "fr" ? "Siège social" : "Headquarters"}</p>
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
                <p className="text-slate-600 font-bold uppercase tracking-widest text-xs mt-1">{lang === "fr" ? "Bureau régional" : "Regional Office"}</p>
                <p className="text-slate-600 mt-2 text-sm">1000 Gauchetière St W<br/>Montréal, QC H3B 4W5</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact-section" className="py-24 px-6">
        <div className="max-w-6xl mx-auto bg-primary rounded-[4rem] p-16 md:p-24 text-center text-white relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-[80px]" />
          
          <div className="relative z-10 space-y-10">
            <h2 className="text-4xl md:text-7xl font-black mb-8">{t.cta.title}</h2>
            <p className="text-slate-300 text-xl mb-10 max-w-3xl mx-auto leading-relaxed">{t.cta.desc}</p>
            <button
              onClick={() => setShowContactForm(true)}
              aria-label={t.cta.button}
              className="bg-white text-primary px-12 py-6 rounded-2xl text-xl font-bold hover:scale-105 active:scale-95 transition-all shadow-2xl shadow-black/20"
            >
              {t.cta.button}
            </button>
          </div>
        </div>
      </section>

      {/* Contact Form Modal */}
      <AnimatePresence>
        {showContactForm && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
            role="dialog"
            aria-modal="true"
            aria-label={t.form.title}
            onClick={(e) => { if (e.target === e.currentTarget) closeForm(); }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-[2.5rem] p-10 md:p-14 w-full max-w-lg shadow-2xl relative overflow-hidden"
            >
              <button
                onClick={closeForm}
                aria-label={t.form.close}
                className="absolute top-6 right-6 w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center hover:bg-slate-200 transition-colors text-slate-600"
              >
                <X size={20} />
              </button>

              {formSuccess ? (
                <div className="text-center py-12 space-y-6">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                    <svg className="w-10 h-10 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-3xl font-black text-primary">{t.form.successTitle}</h3>
                  <p className="text-slate-600">{t.form.successDesc}</p>
                  <button
                    onClick={closeForm}
                    className="bg-primary text-white px-8 py-4 rounded-2xl font-bold hover:bg-primary/90 transition-colors"
                  >
                    {t.form.close}
                  </button>
                </div>
              ) : (
                <>
                  <div className="mb-10">
                    <h3 className="text-3xl font-black text-primary">{t.form.title}</h3>
                  </div>

                  <form onSubmit={handleSubmit} noValidate className="space-y-6">
                    <div>
                      <label htmlFor="contact-name" className="block text-sm font-bold text-primary mb-2">
                        {t.form.name} <span className="text-secondary">*</span>
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        value={formData.name}
                        onChange={(e) => { setFormData({ ...formData, name: e.target.value }); setFormErrors({ ...formErrors, name: undefined }); }}
                        aria-required="true"
                        aria-invalid={!!formErrors.name}
                        aria-describedby={formErrors.name ? "name-error" : undefined}
                        className={`w-full px-5 py-4 rounded-2xl border-2 text-base font-medium text-primary bg-slate-50 outline-none transition-colors ${formErrors.name ? "border-red-400 focus:border-red-500" : "border-slate-200 focus:border-secondary"}`}
                        placeholder="Jean Dupont"
                      />
                      {formErrors.name && (
                        <p id="name-error" className="mt-2 text-sm font-bold text-red-500" role="alert">{formErrors.name}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="contact-email" className="block text-sm font-bold text-primary mb-2">
                        {t.form.email} <span className="text-secondary">*</span>
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => { setFormData({ ...formData, email: e.target.value }); setFormErrors({ ...formErrors, email: undefined }); }}
                        aria-required="true"
                        aria-invalid={!!formErrors.email}
                        aria-describedby={formErrors.email ? "email-error" : undefined}
                        className={`w-full px-5 py-4 rounded-2xl border-2 text-base font-medium text-primary bg-slate-50 outline-none transition-colors ${formErrors.email ? "border-red-400 focus:border-red-500" : "border-slate-200 focus:border-secondary"}`}
                        placeholder="jean@hopital.ca"
                      />
                      {formErrors.email && (
                        <p id="email-error" className="mt-2 text-sm font-bold text-red-500" role="alert">{formErrors.email}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="contact-message" className="block text-sm font-bold text-primary mb-2">
                        {t.form.message} <span className="text-secondary">*</span>
                      </label>
                      <textarea
                        id="contact-message"
                        rows={4}
                        value={formData.message}
                        onChange={(e) => { setFormData({ ...formData, message: e.target.value }); setFormErrors({ ...formErrors, message: undefined }); }}
                        aria-required="true"
                        aria-invalid={!!formErrors.message}
                        aria-describedby={formErrors.message ? "message-error" : undefined}
                        className={`w-full px-5 py-4 rounded-2xl border-2 text-base font-medium text-primary bg-slate-50 outline-none transition-colors resize-none ${formErrors.message ? "border-red-400 focus:border-red-500" : "border-slate-200 focus:border-secondary"}`}
                        placeholder={lang === "fr" ? "Décrivez votre projet..." : "Describe your project..."}
                      />
                      {formErrors.message && (
                        <p id="message-error" className="mt-2 text-sm font-bold text-red-500" role="alert">{formErrors.message}</p>
                      )}
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-secondary text-white py-5 rounded-2xl text-lg font-bold hover:bg-red-700 transition-colors shadow-xl shadow-red-100"
                    >
                      {t.form.submit}
                    </button>
                  </form>
                </>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Footer */}
      <footer id="contact" className="bg-white border-t border-slate-100 pt-32 pb-16" role="contentinfo">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-4 gap-16">
          <div className="space-y-8">
            <Logo />
            <p className="text-slate-600 leading-relaxed">
              {t.footer.desc}
            </p>
            <div className="flex gap-4">
              {[Users, Mail, Globe].map((Icon, idx) => (
                <button
                  key={idx}
                  aria-label={["Team", "Email", "Website"][idx]}
                  className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center hover:bg-secondary hover:text-white cursor-pointer transition-all shadow-sm"
                >
                  <Icon size={20} aria-hidden="true" />
                </button>
              ))}
            </div>
          </div>
          
          <div>
            <h5 className="text-lg font-black mb-10 uppercase tracking-widest text-primary">{t.footer.links}</h5>
            <ul className="space-y-5 text-slate-600 font-bold">
              <li><a href="#" className="hover:text-secondary transition-colors">{lang === "fr" ? "Accueil" : "Home"}</a></li>
              <li><a href="#about" className="hover:text-secondary transition-colors">{t.nav.about}</a></li>
              <li><a href="#services" className="hover:text-secondary transition-colors">{t.nav.services}</a></li>
              <li><a href="#contact" className="hover:text-secondary transition-colors">{lang === "fr" ? "Actualités" : "Insights"}</a></li>
            </ul>
          </div>
          
          <div>
            <h5 className="text-lg font-black mb-10 uppercase tracking-widest text-primary">{t.nav.services}</h5>
            <ul className="space-y-5 text-slate-600 font-bold">
              <li><a href="#" className="hover:text-secondary transition-colors">{lang === "fr" ? "Gestion de la Performance" : "Performance Management"}</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">{lang === "fr" ? "Mobilisation des Équipes" : "Team Engagement"}</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">{lang === "fr" ? "Développement du Leadership" : "Leadership Development"}</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">{lang === "fr" ? "Formations Pratiques" : "Practical Training"}</a></li>
            </ul>
          </div>

          <div>
            <h5 className="text-lg font-black mb-10 uppercase tracking-widest text-primary">{t.footer.contact}</h5>
            <ul className="space-y-6 text-slate-600 font-bold">
              <li className="flex items-start gap-4">
                <Mail size={20} className="text-secondary shrink-0 mt-1" aria-hidden="true" /> 
                <span>info@gps-canada.com</span>
              </li>
              <li className="flex items-start gap-4">
                <Phone size={20} className="text-secondary shrink-0 mt-1" aria-hidden="true" /> 
                <span>+1 (416) 555-0123</span>
              </li>
              <li className="flex items-start gap-4">
                <MapPin size={20} className="text-secondary shrink-0 mt-1" aria-hidden="true" /> 
                <span>{t.footer.address}</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 border-t border-slate-100 mt-32 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm font-bold text-slate-600">
            {t.footer.rights}
          </p>
          <div className="flex gap-8 text-sm font-bold text-slate-600">
             <a href="#" className="hover:text-secondary">Privacy Policy</a>
             <a href="#" className="hover:text-secondary">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

