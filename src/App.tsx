import { motion, AnimatePresence } from "motion/react";
import { 
  TrendingUp, 
  Rocket, 
  Target, 
  Users, 
  Mail, 
  Phone, 
  MapPin,
  Menu,
  X,
  ArrowRight,
  ShieldCheck,
  Activity
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
    <div className="relative w-10 h-10 flex items-center justify-center bg-primary rounded-lg overflow-hidden transition-transform group-hover:scale-105">
      <Activity className="text-white w-6 h-6 z-10" />
    </div>
    <span className="font-display font-bold text-2xl tracking-tighter text-primary">
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
      <nav className="fixed top-0 w-full z-50 bg-surface border-b border-outline-variant h-20" role="navigation" aria-label="Main navigation">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 h-full flex items-center justify-between">
          <Logo />
          
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#about" className="font-label-md text-label-md text-on-surface-variant font-medium hover:text-secondary transition-colors duration-200">{t.nav.about}</a>
            <a href="#services" className="font-label-md text-label-md text-on-surface-variant font-medium hover:text-secondary transition-colors duration-200">{t.nav.services}</a>
            <a href="#contact" className="font-label-md text-label-md text-on-surface-variant font-medium hover:text-secondary transition-colors duration-200">{t.nav.contact}</a>
            
            <div className="h-5 w-px bg-outline-variant mx-2" aria-hidden="true" />
            
            <button 
              onClick={toggleLang}
              aria-label={lang === "en" ? "Passer en français" : "Switch to English"}
              className="text-xs font-bold text-on-surface-variant bg-surface-container-low px-3 py-1.5 rounded hover:bg-surface-container transition-colors uppercase tracking-widest"
            >
              {lang === "en" ? "FR" : "EN"}
            </button>

            <button
              onClick={() => setShowContactForm(true)}
              className="bg-primary text-white px-6 py-3 rounded-lg font-label-md text-label-md hover:opacity-90 active:scale-95 transition-all"
            >
              {t.nav.start}
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center gap-3">
             <button 
              onClick={toggleLang}
              aria-label={lang === "en" ? "Passer en français" : "Switch to English"}
              className="text-xs font-bold text-on-surface-variant bg-surface-container-low px-3 py-1.5 rounded uppercase tracking-widest"
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
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
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
              className="md:hidden bg-surface border-b border-outline-variant overflow-hidden"
              role="menu"
            >
              <div className="px-6 py-6 flex flex-col gap-4">
                <a href="#about" className="text-lg font-bold text-on-surface" onClick={() => setIsMenuOpen(false)} role="menuitem">{t.nav.about}</a>
                <a href="#services" className="text-lg font-bold text-on-surface" onClick={() => setIsMenuOpen(false)} role="menuitem">{t.nav.services}</a>
                <a href="#contact" className="text-lg font-bold text-on-surface" onClick={() => setIsMenuOpen(false)} role="menuitem">{t.nav.contact}</a>
                <button
                  className="bg-primary text-white w-full py-3 rounded-lg font-bold text-base"
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
      <section className="relative min-h-[600px] h-[80vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="w-full h-full bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/src/assets/hero.png')" }} />
          <div className="absolute inset-0 hero-overlay" />
        </div>
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 bg-surface-container-low/20 backdrop-blur-sm border border-white/10 px-4 py-2 rounded-full mb-6">
                <span className="w-2 h-2 bg-secondary rounded-full animate-pulse" />
                <span className="text-xs font-bold uppercase tracking-widest text-white/80">{lang === "fr" ? "Performance en Milieu Hospitalier" : "Healthcare Performance"}</span>
              </div>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-display-lg-mobile md:text-display-lg text-white font-bold leading-[1.1] mb-4"
            >
              {t.hero.title} <br className="hidden md:block" />
              <span className="text-secondary">{t.hero.titleAccent}</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-body-lg text-body-lg text-white/80 mb-8 leading-relaxed max-w-xl"
            >
              {t.hero.desc}
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center gap-4"
            >
              <button
                onClick={() => setShowContactForm(true)}
                className="bg-secondary text-white px-8 py-4 rounded-lg font-label-md text-headline-md hover:brightness-110 active:scale-95 transition-all flex items-center gap-2"
              >
                {t.hero.ctaPrimary} <ArrowRight size={20} aria-hidden="true" />
              </button>
              <button
                onClick={() => setShowContactForm(true)}
                className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-lg font-label-md text-headline-md hover:bg-white/20 transition-all"
              >
                {t.hero.ctaSecondary}
              </button>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-12 flex items-center gap-6 text-white/60"
              aria-hidden="true"
            >
               <div className="flex items-center gap-2 text-sm"><ShieldCheck className="w-4 h-4 text-secondary" aria-hidden="true" /> Trusted</div>
               <div className="flex items-center gap-2 text-sm"><Activity className="w-4 h-4 text-secondary" aria-hidden="true" /> Certified</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="py-12 border-y border-outline-variant">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-xs font-bold uppercase tracking-[0.3em] text-on-surface-variant mb-8">{lang === "fr" ? "Appuyé par des organisations de santé de premier plan" : "Trusted by leading healthcare organizations"}</p>
          <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16 opacity-50">
            {["HôpitalGénéral", "SantéPlus", "CareMedic", "VieSanté", "MédecinsU"].map((logo, i) => (
              <span key={i} className="text-lg md:text-xl font-bold tracking-tighter text-on-surface">{logo}<span className="text-secondary">.</span></span>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section 
        id="about" 
        className="py-24 scroll-mt-24"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-16">
            <span className="text-secondary font-label-md text-label-md uppercase tracking-wider font-semibold">{t.about.tag}</span>
            <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface mt-2">{t.about.title}</h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant mt-4 max-w-3xl">
              {t.about.mission}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-20">
            {/* Stats card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bento-card p-6 bg-surface-container border border-outline-variant rounded-xl flex flex-col gap-4"
            >
              <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center">
                <TrendingUp className="text-white w-6 h-6" />
              </div>
              <div>
                <h4 className="font-headline-md text-headline-md text-primary">150+</h4>
                <p className="font-label-md text-label-md text-on-surface-variant">{t.about.stats[0].label}</p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bento-card p-6 bg-primary rounded-xl flex flex-col gap-4"
            >
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                <ShieldCheck className="text-white w-6 h-6" />
              </div>
              <div>
                <h4 className="font-headline-md text-headline-md text-white">98%</h4>
                <p className="font-label-md text-label-md text-white/70">{t.about.stats[1].label}</p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bento-card p-6 bg-surface-container border border-outline-variant rounded-xl flex flex-col gap-4"
            >
              <div className="w-12 h-12 bg-tertiary rounded-lg flex items-center justify-center">
                <Activity className="text-white w-6 h-6" />
              </div>
              <div>
                <h4 className="font-headline-md text-headline-md text-primary">15+</h4>
                <p className="font-label-md text-label-md text-on-surface-variant">Years Exp.</p>
              </div>
            </motion.div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-20">
            <div className="space-y-6">
              <h3 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary">{lang === "fr" ? "Nos Valeurs" : "Our Values"}</h3>
              <div className="flex flex-wrap gap-2">
                {t.about.values.map((value, i) => (
                  <span key={i} className="px-4 py-2 bg-surface-container-low border border-outline-variant rounded-lg text-sm font-medium text-on-surface hover:bg-secondary hover:text-white hover:border-secondary transition-colors cursor-default">
                    {value}
                  </span>
                ))}
              </div>
            </div>
            <div className="space-y-6">
              <h3 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary">{lang === "fr" ? "Ce qui nous distingue" : "What Distinguishes Us"}</h3>
              <ul className="space-y-3">
                {t.about.whatDistinguishes.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-on-surface-variant">
                    <span className="w-1.5 h-1.5 bg-secondary rounded-full mt-2 shrink-0" />
                    <span className="font-body-md text-body-md">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="space-y-10">
            <div className="text-center">
              <h3 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary">{lang === "fr" ? "Pourquoi nous choisir ?" : "Why Choose Us?"}</h3>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {t.about.whyChooseUs.map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bento-card p-6 bg-surface-container border border-outline-variant rounded-xl flex flex-col gap-4"
                >
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-lg">{i + 1}</span>
                  </div>
                  <h4 className="font-headline-md text-headline-md text-primary">{item.title}</h4>
                  <p className="font-body-md text-body-md text-on-surface-variant">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section 
        id="services" 
        className="py-24 px-6 scroll-mt-24 bg-surface"
      >
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <span className="text-secondary font-label-md text-label-md uppercase tracking-wider font-semibold">{lang === "fr" ? "SERVICES" : "SERVICES"}</span>
            <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface mt-2">{t.services.title}</h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant mt-3 max-w-2xl">{t.services.desc}</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.services.items.map((service, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bento-card p-6 bg-surface-container-low border border-outline-variant rounded-xl flex flex-col gap-4"
              >
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center text-white">
                  {service.icon}
                </div>
                <h4 className="font-headline-md text-headline-md text-primary">{service.title}</h4>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section className="py-20 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl bg-surface border border-outline-variant flex items-center gap-6 bento-card">
              <div className="w-14 h-14 bg-primary rounded-lg flex items-center justify-center text-white shrink-0">
                <MapPin size={24} />
              </div>
              <div>
                <h4 className="font-headline-md text-headline-md text-primary">Toronto</h4>
                <p className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider mt-0.5">{lang === "fr" ? "Siège social" : "Headquarters"}</p>
                <p className="font-body-md text-body-md text-on-surface-variant mt-1">123 Bay Street, Financial District<br/>Toronto, ON M5H 2Y4</p>
              </div>
            </div>

            <div className="p-6 rounded-xl bg-surface border border-outline-variant flex items-center gap-6 bento-card">
              <div className="w-14 h-14 bg-primary rounded-lg flex items-center justify-center text-white shrink-0">
                <MapPin size={24} />
              </div>
              <div>
                <h4 className="font-headline-md text-headline-md text-primary">Montréal</h4>
                <p className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider mt-0.5">{lang === "fr" ? "Bureau régional" : "Regional Office"}</p>
                <p className="font-body-md text-body-md text-on-surface-variant mt-1">1000 Gauchetière St W<br/>Montréal, QC H3B 4W5</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact-section" className="py-20 px-6 scroll-mt-24">
        <div className="max-w-7xl mx-auto bg-primary rounded-xl px-8 md:px-16 py-12 md:py-16 text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle at 20% 50%, #ffffff 0%, transparent 50%)" }} />
          <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
            <div>
              <h2 className="font-display text-headline-lg text-headline-lg-mobile md:text-headline-lg text-white font-bold mb-2">{t.cta.title}</h2>
              <p className="font-body-lg text-body-lg text-white/70">{t.cta.desc}</p>
            </div>
            <button
              onClick={() => setShowContactForm(true)}
              className="bg-secondary text-white px-8 py-4 rounded-lg font-label-md text-headline-md hover:bg-secondary/90 active:scale-95 transition-all whitespace-nowrap shrink-0"
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
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/50"
            role="dialog"
            aria-modal="true"
            aria-label={t.form.title}
            onClick={(e) => { if (e.target === e.currentTarget) closeForm(); }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.25 }}
              className="bg-surface rounded-xl p-8 md:p-10 w-full max-w-lg premium-shadow relative"
            >
              <button
                onClick={closeForm}
                aria-label={t.form.close}
                className="absolute top-5 right-5 w-9 h-9 rounded-lg bg-surface-container-low flex items-center justify-center hover:bg-surface-container transition-colors text-on-surface-variant"
              >
                <X size={18} />
              </button>

              {formSuccess ? (
                <div className="text-center py-10 space-y-5">
                  <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto">
                    <svg className="w-8 h-8 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="font-headline-md text-headline-md text-primary">{t.form.successTitle}</h3>
                  <p className="text-on-surface-variant text-sm">{t.form.successDesc}</p>
                  <button
                    onClick={closeForm}
                    className="bg-primary text-white px-6 py-3 rounded-lg font-bold text-sm hover:opacity-90 transition-opacity"
                  >
                    {t.form.close}
                  </button>
                </div>
              ) : (
                <>
                  <h3 className="font-headline-md text-headline-md text-primary mb-6">{t.form.title}</h3>

                  <form onSubmit={handleSubmit} noValidate className="space-y-5">
                    <div>
                      <label htmlFor="contact-name" className="block font-label-md text-label-md text-primary font-semibold mb-1.5">
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
                        className={`w-full px-4 py-3 rounded-lg border text-sm font-medium text-on-surface bg-surface-container-low outline-none transition-colors ${formErrors.name ? "border-red-400" : "border-outline-variant focus:border-secondary"}`}
                        placeholder="Jean Dupont"
                      />
                      {formErrors.name && (
                        <p id="name-error" className="mt-1.5 text-xs font-semibold text-red-500" role="alert">{formErrors.name}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="contact-email" className="block font-label-md text-label-md text-primary font-semibold mb-1.5">
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
                        className={`w-full px-4 py-3 rounded-lg border text-sm font-medium text-on-surface bg-surface-container-low outline-none transition-colors ${formErrors.email ? "border-red-400" : "border-outline-variant focus:border-secondary"}`}
                        placeholder="jean@hopital.ca"
                      />
                      {formErrors.email && (
                        <p id="email-error" className="mt-1.5 text-xs font-semibold text-red-500" role="alert">{formErrors.email}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="contact-message" className="block font-label-md text-label-md text-primary font-semibold mb-1.5">
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
                        className={`w-full px-4 py-3 rounded-lg border text-sm font-medium text-on-surface bg-surface-container-low outline-none transition-colors resize-none ${formErrors.message ? "border-red-400" : "border-outline-variant focus:border-secondary"}`}
                        placeholder={lang === "fr" ? "Décrivez votre projet..." : "Describe your project..."}
                      />
                      {formErrors.message && (
                        <p id="message-error" className="mt-1.5 text-xs font-semibold text-red-500" role="alert">{formErrors.message}</p>
                      )}
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-secondary text-white py-3.5 rounded-lg font-bold text-sm hover:brightness-110 active:scale-[0.98] transition-all"
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
      <footer id="contact" className="bg-surface-container-highest border-t border-outline-variant pt-16 pb-8 scroll-mt-24" role="contentinfo">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="space-y-4">
            <Logo />
            <p className="text-sm text-on-surface-variant leading-relaxed">
              {t.footer.desc}
            </p>
          </div>
          
          <div>
            <h5 className="font-label-md text-label-md text-on-surface font-bold uppercase tracking-wider mb-5">{t.footer.links}</h5>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm text-on-surface-variant hover:text-secondary transition-colors">{lang === "fr" ? "Accueil" : "Home"}</a></li>
              <li><a href="#about" className="text-sm text-on-surface-variant hover:text-secondary transition-colors">{t.nav.about}</a></li>
              <li><a href="#services" className="text-sm text-on-surface-variant hover:text-secondary transition-colors">{t.nav.services}</a></li>
              <li><a href="#contact" className="text-sm text-on-surface-variant hover:text-secondary transition-colors">{lang === "fr" ? "Actualités" : "Insights"}</a></li>
            </ul>
          </div>
          
          <div>
            <h5 className="font-label-md text-label-md text-on-surface font-bold uppercase tracking-wider mb-5">{t.nav.services}</h5>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm text-on-surface-variant hover:text-secondary transition-colors">{lang === "fr" ? "Gestion de la Performance" : "Performance Management"}</a></li>
              <li><a href="#" className="text-sm text-on-surface-variant hover:text-secondary transition-colors">{lang === "fr" ? "Mobilisation des Équipes" : "Team Engagement"}</a></li>
              <li><a href="#" className="text-sm text-on-surface-variant hover:text-secondary transition-colors">{lang === "fr" ? "Développement du Leadership" : "Leadership Development"}</a></li>
              <li><a href="#" className="text-sm text-on-surface-variant hover:text-secondary transition-colors">{lang === "fr" ? "Formations Pratiques" : "Practical Training"}</a></li>
            </ul>
          </div>

          <div>
            <h5 className="font-label-md text-label-md text-on-surface font-bold uppercase tracking-wider mb-5">{t.footer.contact}</h5>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail size={16} className="text-secondary shrink-0 mt-0.5" aria-hidden="true" /> 
                <span className="text-sm text-on-surface-variant">info@gps-canada.com</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={16} className="text-secondary shrink-0 mt-0.5" aria-hidden="true" /> 
                <span className="text-sm text-on-surface-variant">+1 (416) 555-0123</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-secondary shrink-0 mt-0.5" aria-hidden="true" /> 
                <span className="text-sm text-on-surface-variant">{t.footer.address}</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 border-t border-outline-variant mt-12 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs font-medium text-on-surface-variant">
            {t.footer.rights}
          </p>
          <div className="flex gap-6 text-xs font-medium text-on-surface-variant">
             <a href="#" className="hover:text-secondary transition-colors">Privacy Policy</a>
             <a href="#" className="hover:text-secondary transition-colors">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

