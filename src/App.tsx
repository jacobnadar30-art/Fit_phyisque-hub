import { motion, AnimatePresence } from "motion/react";
import { 
  MessageCircle, 
  ChevronRight, 
  ChevronDown,
  Activity, 
  Users, 
  Utensils, 
  ArrowRight, 
  Menu, 
  X,
  CheckCircle2,
  Dumbbell,
  Instagram,
  Facebook
} from "lucide-react";
import { useState, FormEvent, useEffect } from "react";

const WHATSAPP_NUMBER = "919987398214";
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}`;

const HERO_IMG = "https://drive.google.com/thumbnail?id=1dDTaeGN53jx8Hj8cjiEtcB3g0bSaN95x&sz=w2000";
const ABOUT_IMG = "https://drive.google.com/thumbnail?id=1PbtFenQfgpn9W2MkTflCyx8bFP6-c389&sz=w1000";

const TRANSFORMATIONS = [
  { id: "1NqW8dvSrz4wy8betlHyGaj0jjbkKKo8P", result: "-8kg Fat Loss", duration: "10 Weeks" },
  { id: "1migJ1ZbsTGmu3bcdo16Lh6NZlRcE0DAK", result: "+4kg Muscle Gain", duration: "12 Weeks" },
  { id: "1cg0xwQvs_8oI6XAp7ypXXcnDAKcRM58F", result: "-6kg Fat Loss", duration: "8 Weeks" },
  { id: "1dDTaeGN53jx8Hj8cjiEtcB3g0bSaN95x", result: "Body Recomposition", duration: "12 Weeks" },
  { id: "1lGeUzhbptrCZemsFAeW6qjXT2BxCJi8f", result: "-10kg Fat Loss", duration: "12 Weeks" },
  { id: "1H0F9rUsW9bw-HxnivmmIjnxb811UbK2a", result: "+5kg Muscle Gain", duration: "12 Weeks" },
  { id: "18kQSpCzJWu0WNkvFF4m2MypQC9aKpi1H", result: "-7kg Fat Loss", duration: "10 Weeks" },
  { id: "1n7tTexcow5wNac0YYE5cob9HakGBf1zq", result: "-5kg Fat Loss", duration: "8 Weeks" }
].map(item => ({ ...item, src: `https://drive.google.com/thumbnail?id=${item.id}&sz=w800` }));

const FADE_UP = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const STAGGER = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const FAQS = [
  {
    question: "How soon can I expect to see results?",
    answer: "Most clients start feeling better within the first week, and noticeable visual changes typically begin within 4-6 weeks of consistent training and proper nutrition."
  },
  {
    question: "Do I need a gym membership?",
    answer: "Not necessarily. While a gym is recommended for the best muscle-building results, I can design highly effective home workout plans using body weight or minimal equipment."
  },
  {
    question: "Will the diet plan be restrictive?",
    answer: "No. I believe in sustainable eating habits, not starvation. You will eat foods you enjoy, including simple meals, carefully structured to hit your goals without feeling deprived."
  },
  {
    question: "How do the weekly check-ins work?",
    answer: "You will have a dedicated check-in day where you share your weight, measurements, progress photos, and feedback. I'll review everything and adjust your upcoming week's plan accordingly."
  }
];

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const submitContactForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name");
    const goal = formData.get("goal");
    const message = `Hi, I am ${name}. My goal is: ${goal}. I would like to get started with coaching.`;
    window.open(`${WHATSAPP_LINK}?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-brand-dark text-white font-sans selection:bg-brand-red selection:text-white">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-brand-dark/90 backdrop-blur-md border-b border-white/5 py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          <div className="text-xl md:text-2xl font-display font-bold tracking-tight uppercase flex items-center gap-2">
            <Dumbbell className="w-6 h-6 text-brand-red" />
            Fit_Physique<span className="text-brand-red">Hub</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            {['About', 'Services', 'Results', 'Plans', 'FAQ'].map((item) => (
              <button 
                key={item}
                onClick={() => handleNavClick(item.toLowerCase())}
                className="hover:text-brand-red transition-colors"
              >
                {item}
              </button>
            ))}
            <a 
              href={WHATSAPP_LINK} 
              target="_blank" 
              rel="noreferrer"
              className="bg-brand-red hover:bg-brand-red-hover active:bg-brand-red/80 active:scale-95 text-white px-5 py-2.5 rounded hover:-translate-y-0.5 hover:shadow-lg hover:shadow-brand-red/30 transition-all duration-300 flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              Chat Now
            </a>
          </div>

          {/* Mobile Nav Toggle */}
          <button 
            className="md:hidden text-white hover:text-brand-red transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed inset-0 z-40 bg-brand-dark pt-24 px-6 flex flex-col gap-6 md:hidden"
        >
          {['About', 'Services', 'Results', 'Plans', 'FAQ'].map((item) => (
            <button 
              key={item}
              onClick={() => handleNavClick(item.toLowerCase())}
              className="text-2xl font-display font-semibold text-left border-b border-white/10 pb-4"
            >
              {item}
            </button>
          ))}
          <a 
            href={WHATSAPP_LINK} 
            target="_blank" 
            rel="noreferrer"
            className="bg-brand-red hover:bg-brand-red-hover active:bg-brand-red/80 active:scale-95 transition-all duration-300 text-white py-4 rounded text-center text-lg font-medium tracking-wide mt-4 hover:shadow-lg hover:shadow-brand-red/30"
          >
            Chat on WhatsApp
          </a>
        </motion.div>
      )}

      {/* Floating WhatsApp */}
      <a 
        href={WHATSAPP_LINK} 
        target="_blank" 
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-40 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center animate-bounce-subtle"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-7 h-7" />
      </a>

      {/* Hero Section */}
      <section className="relative min-h-[100svh] flex items-center pt-24 pb-12 px-6 md:px-12 overflow-hidden">
        {/* Background Overlay purely for dark mode blending */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/80 to-transparent z-10" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-brand-dark z-10" />
          <img 
            src={HERO_IMG} 
            alt="Fit Physique Hub Hero" 
            className="w-full h-full object-cover object-center opacity-40 md:opacity-50"
            referrerPolicy="no-referrer"
          />
        </div>

        <div className="max-w-7xl mx-auto w-full relative z-20 grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={STAGGER}
            className="max-w-xl"
          >
            <motion.div variants={FADE_UP} className="inline-block px-3 py-1 bg-brand-red/10 border border-brand-red/20 text-brand-red text-xs sm:text-sm font-bold tracking-widest uppercase rounded-full mb-6">
              Real Results | Personalized Coaching
            </motion.div>
            <motion.h1 variants={FADE_UP} className="text-4xl sm:text-5xl md:text-6xl font-display font-extrabold leading-[1.1] tracking-tight mb-6">
              Lose Fat.<br/>Build Muscle.<br/>Transform Your Body<br/>in <span className="text-brand-red">8–12 Weeks</span> 💪
            </motion.h1>
            <motion.p variants={FADE_UP} className="text-lg text-gray-300 font-medium tracking-wide mb-8">
              Fat Loss | Muscle Gain | Online & Personal Training
            </motion.p>
            <motion.div variants={FADE_UP} className="flex flex-col sm:flex-row gap-4">
              <button onClick={() => handleNavClick('plans')} className="bg-brand-red hover:bg-brand-red-hover active:bg-brand-red/80 active:scale-95 text-white px-8 py-4 rounded font-bold tracking-wide transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-brand-red/30 flex justify-center items-center gap-2 group">
                Start My Transformation
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="bg-white hover:bg-gray-100 active:scale-95 active:bg-gray-200 text-brand-dark px-8 py-4 rounded font-bold tracking-wide transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-white/20 flex justify-center items-center gap-2">
                <MessageCircle className="w-5 h-5 text-[#25D366]" />
                Chat on WhatsApp
              </a>
            </motion.div>
            <motion.div variants={FADE_UP} className="mt-6 flex flex-col gap-2">
              <div className="flex items-center gap-2 text-sm text-gray-400 font-medium">
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-red opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-red"></span>
                </span>
                Limited Client Slots Available
              </div>
              <div className="text-brand-red/80 font-bold uppercase tracking-widest text-[10px]">
                Response within 10 minutes
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 md:px-12 bg-brand-charcoal">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={FADE_UP}
              className="relative"
            >
              <div className="absolute -inset-4 bg-brand-red/5 blur-2xl rounded-full z-0" />
              <img 
                src={ABOUT_IMG} 
                alt="Expert Coach profile" 
                className="relative z-10 w-full rounded max-w-md mx-auto grayscale hover:grayscale-0 transition-all duration-500 border border-white/10"
                referrerPolicy="no-referrer"
              />
            </motion.div>
            
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={STAGGER}
            >
              <motion.h2 variants={FADE_UP} className="text-3xl md:text-5xl font-display font-bold uppercase mb-6">
                Meet Your <span className="text-brand-red">Coach</span>
              </motion.h2>
              <motion.div variants={FADE_UP} className="mb-8">
                <div className="text-2xl text-white font-bold tracking-wide uppercase mb-1">Coach - Jacob</div>
                <div className="text-brand-red font-bold tracking-wider uppercase text-sm mb-4">4+ Years Experience</div>
                <div className="text-xl text-white font-display font-bold italic border-l-4 border-brand-red pl-4 py-1">
                  "I don’t just give plans—I build real transformations."
                </div>
              </motion.div>
              <motion.div variants={FADE_UP} className="w-20 h-1 bg-brand-red mb-8" />
              <motion.p variants={FADE_UP} className="text-lg md:text-xl text-gray-300 leading-relaxed font-light">
                "I help clients achieve fat loss and muscle gain with simple, structured training and diet plans. No gimmicks, just hard work, science-based protocols, and consistency."
              </motion.p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold uppercase mb-4">Our <span className="text-brand-red">Services</span></h2>
            <p className="text-gray-400 font-medium">Everything you need to reach your peak physique.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "ONLINE COACHING",
                icon: Activity,
                features: ["Workout + Diet Plan", "Weekly Support & Check-ins", "Form correction via Video"]
              },
              {
                title: "PERSONAL TRAINING",
                icon: Users,
                features: ["Gym / Home sessions", "One-on-one guidance", "Real-time motivation"]
              },
              {
                title: "DIET PLAN",
                icon: Utensils,
                features: ["Simple meals", "Easy to follow macros", "Sustainable approach"]
              }
            ].map((service, idx) => (
              <motion.div 
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-brand-charcoal border border-white/5 p-8 rounded hover:border-brand-red/30 transition-colors group"
              >
                <service.icon className="w-12 h-12 text-brand-red mb-6 bg-brand-red/10 p-2.5 rounded group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-display font-bold uppercase mb-6 tracking-wide">{service.title}</h3>
                <ul className="space-y-4">
                  {service.features.map(feat => (
                    <li key={feat} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-gray-400 shrink-0 mt-0.5" />
                      <span className="text-gray-300">{feat}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Transformations Section */}
      <section id="results" className="py-24 px-6 md:px-12 bg-brand-charcoal">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h2 className="text-3xl md:text-5xl font-display font-bold uppercase mb-4">Real <span className="text-brand-red">Results</span></h2>
              <p className="text-gray-400 font-medium">Proven transformations from real clients.</p>
            </div>
            <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="group text-brand-red hover:text-white font-bold flex items-center gap-2 transition-colors duration-300 uppercase tracking-wider text-sm">
              Start My Transformation <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          </div>

          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {TRANSFORMATIONS.map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4 }}
                className="relative group overflow-hidden bg-brand-dark rounded break-inside-avoid border border-white/5"
              >
                <img 
                  src={item.src} 
                  alt={`Client Transformation ${idx + 1}`}
                  className="w-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="p-5 border-t border-white/5">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-white font-display font-bold text-xl">{item.result}</span>
                    <span className="text-brand-red font-bold uppercase tracking-widest text-[10px]">BEFORE/AFTER</span>
                  </div>
                  <div className="text-gray-400 text-sm font-medium">{item.duration}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Plans Section */}
      <section id="plans" className="py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold uppercase mb-4">Select Your <span className="text-brand-red">Plan</span></h2>
            <p className="text-gray-400 font-medium">Plans starting from ₹1,499</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: "Online Plan",
                desc: "Remote coaching for dedicated individuals.",
                who: "Self-starters needing an expert blueprint.",
                benefit: "Flexibility to train at your own schedule.",
                highlighted: false
              },
              {
                name: "Hybrid Plan",
                desc: "The perfect mix of online + occasional in-person check-ins.",
                who: "Those who want occasional hands-on guidance.",
                benefit: "Best of both worlds for optimal accountability.",
                highlighted: true
              },
              {
                name: "Personal Training",
                desc: "Premium 1-on-1 coaching for maximum results.",
                who: "Beginners to advanced requiring 100% focus.",
                benefit: "Real-time form correction & maximum push.",
                highlighted: false
              }
            ].map((plan, idx) => (
              <motion.div 
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`relative p-8 rounded border ${
                  plan.highlighted 
                    ? 'bg-brand-red/5 border-brand-red scale-100 md:scale-105 z-10 shadow-[0_0_30px_rgba(234,30,36,0.1)]' 
                    : 'bg-brand-charcoal border-white/10'
                }`}
              >
                {plan.highlighted && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-brand-red text-white text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full">
                    Most Popular
                  </div>
                )}
                <h3 className="text-2xl font-display font-bold uppercase mb-4 mt-2">{plan.name}</h3>
                <p className="text-gray-400 text-sm mb-6 line-clamp-2">{plan.desc}</p>
                <div className="mb-8 space-y-3">
                  <div className="text-sm">
                    <span className="text-brand-red font-bold uppercase tracking-wider text-[10px] block mb-0.5">For Who</span>
                    <span className="text-gray-300 block">{plan.who}</span>
                  </div>
                  <div className="text-sm">
                    <span className="text-brand-red font-bold uppercase tracking-wider text-[10px] block mb-0.5">Key Benefit</span>
                    <span className="text-gray-300 block">{plan.benefit}</span>
                  </div>
                </div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center gap-2 text-sm text-gray-300">
                    <ChevronRight className="w-4 h-4 text-brand-red" /> Customized for you
                  </li>
                  <li className="flex items-center gap-2 text-sm text-gray-300">
                    <ChevronRight className="w-4 h-4 text-brand-red" /> Direct access to coach
                  </li>
                  <li className="flex items-center gap-2 text-sm text-gray-300">
                    <ChevronRight className="w-4 h-4 text-brand-red" /> Assured results
                  </li>
                </ul>
                <a 
                  href={WHATSAPP_LINK} 
                  target="_blank"
                  rel="noreferrer"
                  className={`block w-full text-center py-3.5 rounded font-bold uppercase tracking-wide transition-all duration-300 active:scale-95 hover:-translate-y-0.5 ${
                    plan.highlighted
                      ? 'bg-brand-red hover:bg-brand-red-hover text-white hover:shadow-lg hover:shadow-brand-red/30'
                      : 'bg-white/10 hover:bg-white text-white hover:text-brand-dark hover:shadow-lg hover:shadow-white/10'
                  }`}
                >
                  Start My Transformation
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24 px-6 md:px-12 bg-brand-charcoal">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold uppercase mb-4">Common <span className="text-brand-red">Questions</span></h2>
            <p className="text-gray-400 font-medium">Everything you need to know about the coaching program.</p>
          </div>

          <div className="space-y-4">
            {FAQS.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className={`bg-brand-dark border rounded transition-colors duration-300 overflow-hidden ${
                    isOpen ? 'border-brand-red/50' : 'border-white/5 hover:border-white/20'
                  }`}
                >
                  <button
                    onClick={(e) => {
                      setOpenFaqIndex(isOpen ? null : idx);
                      if (!isOpen) {
                        const target = e.currentTarget.parentElement;
                        if (target) {
                          setTimeout(() => {
                            const rect = target.getBoundingClientRect();
                            if (rect.top < 100 || rect.bottom > window.innerHeight) {
                              target.scrollIntoView({ behavior: 'smooth', block: 'center' });
                            }
                          }, 300);
                        }
                      }
                    }}
                    className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <span className="font-display font-bold uppercase text-lg pr-8">{faq.question}</span>
                    <ChevronDown className={`w-5 h-5 text-brand-red shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        <div className="px-6 pb-6 text-gray-400 font-medium leading-relaxed">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 px-6 md:px-12 bg-brand-dark border-t border-white/5">
        <div className="max-w-3xl mx-auto flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-3xl md:text-5xl font-display font-bold uppercase mb-6">
              Let's Start Your<br/><span className="text-brand-red">Transformation</span>
            </h2>
            <p className="text-gray-400 mb-8">Fill the form or click the WhatsApp button to get started immediately.</p>
          </div>
          
          <div className="md:w-1/2 w-full">
            <form onSubmit={submitContactForm} className="bg-brand-charcoal p-8 rounded border border-white/5 flex flex-col gap-5 shadow-xl shadow-black/20">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-1.5 uppercase tracking-wide">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  required 
                  className="w-full bg-brand-dark border border-white/10 rounded px-4 py-3 text-white focus:outline-none focus:border-brand-red transition-colors"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label htmlFor="goal" className="block text-sm font-medium text-gray-400 mb-1.5 uppercase tracking-wide">Your Goal</label>
                <select 
                  id="goal" 
                  name="goal" 
                  required
                  className="w-full bg-brand-dark border border-white/10 rounded px-4 py-3 text-white focus:outline-none focus:border-brand-red transition-colors appearance-none"
                >
                  <option value="Fat Loss">Fat Loss</option>
                  <option value="Muscle Gain">Muscle Gain</option>
                  <option value="Body Recomposition">Body Recomposition</option>
                  <option value="General Fitness">General Fitness</option>
                </select>
              </div>
              <button 
                type="submit" 
                className="w-full mt-2 bg-brand-red hover:bg-brand-red-hover active:bg-brand-red/80 active:scale-95 text-white font-bold tracking-wide uppercase py-4 rounded transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-brand-red/30"
              >
                Start My Transformation
              </button>
              <div className="text-center text-brand-red/80 text-xs mt-1 font-bold uppercase tracking-widest">
                Response within 10 minutes
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/10 text-center">
        <div className="text-xl font-display font-bold tracking-tight uppercase flex items-center justify-center gap-2 mb-6 opacity-60">
          <Dumbbell className="w-5 h-5 text-brand-red" />
          Fit_Physique<span className="text-brand-red">Hub</span>
        </div>
        
        <div className="flex justify-center items-center gap-6 mb-8">
          <a href="https://www.instagram.com/stoned_phyisque?igsh=MXdoYmw3ZnJ6endj" target="_blank" rel="noreferrer" className="text-gray-500 hover:text-brand-red transition-colors duration-300 hover:scale-110">
            <span className="sr-only">Instagram</span>
            <Instagram className="w-6 h-6" />
          </a>
          <a href="#" className="text-gray-500 hover:text-brand-red transition-colors duration-300 hover:scale-110">
            <span className="sr-only">Facebook</span>
            <Facebook className="w-6 h-6" />
          </a>
        </div>

        <p className="text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Fit_Physique Hub. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
