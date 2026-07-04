import React, { useEffect, useState, useRef } from "react";
import { Link } from "wouter";
import { motion, useScroll, useTransform, AnimatePresence, useInView } from "framer-motion";
import logoImg from "../../../../attached_assets/image_1783186765779.png";
import heroImg from "../../../../attached_assets/image_1783186890333.png";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  TrendingUp,
  MessageCircle,
  Calendar,
  Gift,
  Star,
  Users,
  BarChart,
  Smartphone,
  CheckCircle2,
  Phone,
  Mail,
  Zap,
  Mouse,
  ChevronDown,
  Activity,
  BellRing,
  Award
} from "lucide-react";

// Stagger variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 15 }
  }
};

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [activeScreen, setActiveScreen] = useState(0);
  const { scrollY } = useScroll();
  
  // Parallax effects
  const heroY = useTransform(scrollY, [0, 500], [0, 100]);
  const heroOpacity = useTransform(scrollY, [0, 300], [1, 0]);
  
  const scrollToCta = (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById("final-cta")?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Auto-cycle for mockup screens
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveScreen((prev) => (prev + 1) % 4);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const mockupScreens = [
    {
      title: "Dashboard",
      icon: <Activity className="w-5 h-5 text-primary" />,
      content: (
        <div className="space-y-4">
          <div className="flex gap-4">
            <div className="flex-1 bg-primary/10 rounded-xl p-3">
              <div className="text-xs text-muted-foreground mb-1">Revenue</div>
              <div className="font-bold">₹42.5k</div>
            </div>
            <div className="flex-1 bg-green-500/10 rounded-xl p-3">
              <div className="text-xs text-muted-foreground mb-1">Bookings</div>
              <div className="font-bold">124</div>
            </div>
          </div>
          <div className="h-32 bg-muted/50 rounded-xl flex items-end p-2 gap-2">
            {[40, 70, 45, 90, 65, 85, 100].map((h, i) => (
              <motion.div 
                key={i} 
                className="flex-1 bg-primary rounded-sm"
                initial={{ height: 0 }}
                animate={{ height: `${h}%` }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              />
            ))}
          </div>
        </div>
      )
    },
    {
      title: "Customer Engagement",
      icon: <MessageCircle className="w-5 h-5 text-primary" />,
      content: (
        <div className="space-y-3">
          {[1, 2, 3].map((_, i) => (
            <motion.div 
              key={i}
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: i * 0.15 }}
              className="flex items-center gap-3 p-3 bg-muted/30 rounded-xl border border-border/50"
            >
              <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary text-xs font-bold">
                {String.fromCharCode(65 + i)}
              </div>
              <div className="flex-1">
                <div className="h-2 w-20 bg-foreground/20 rounded mb-2"></div>
                <div className="h-1.5 w-32 bg-muted-foreground/20 rounded"></div>
              </div>
              <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center">
                <CheckCircle2 className="w-3 h-3 text-green-600" />
              </div>
            </motion.div>
          ))}
        </div>
      )
    },
    {
      title: "Loyalty & Rewards",
      icon: <Award className="w-5 h-5 text-primary" />,
      content: (
        <div className="flex flex-col items-center justify-center py-6 text-center space-y-4">
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="w-20 h-20 rounded-full bg-yellow-500/20 flex items-center justify-center text-yellow-600 border-4 border-yellow-500/30"
          >
            <Star className="w-8 h-8 fill-current" />
          </motion.div>
          <div>
            <div className="font-bold text-lg">Gold Tier Reached!</div>
            <div className="text-sm text-muted-foreground">Automated reward sent</div>
          </div>
          <Button size="sm" className="w-full bg-yellow-500 hover:bg-yellow-600 text-white rounded-full">View Campaign</Button>
        </div>
      )
    },
    {
      title: "Smart Reminders",
      icon: <BellRing className="w-5 h-5 text-primary" />,
      content: (
        <div className="space-y-4">
          <div className="p-4 bg-primary/5 rounded-xl border border-primary/20 relative overflow-hidden">
            <motion.div 
              animate={{ x: ["-100%", "200%"] }}
              transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
              className="absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-white/50 to-transparent skew-x-12"
            />
            <div className="flex justify-between items-start mb-2">
              <Badge variant="outline" className="bg-white text-xs">Overdue</Badge>
              <span className="text-xs text-muted-foreground">2 days ago</span>
            </div>
            <div className="font-medium mb-1">Sarah's Haircut due</div>
            <div className="text-sm text-muted-foreground mb-3">Last visit 45 days ago. Auto-sending 15% off voucher.</div>
            <div className="h-1.5 w-full bg-muted rounded-full overflow-hidden">
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 2 }}
                className="h-full bg-primary"
              />
            </div>
          </div>
        </div>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden font-sans selection:bg-primary/20 selection:text-primary">
      {/* Background ambient lighting */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] opacity-70"></div>
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-orange-400/5 rounded-full blur-[100px] opacity-50"></div>
      </div>

      {/* 1. Header/Nav */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/80 dark:bg-background/80 backdrop-blur-md border-b border-border shadow-sm py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="relative overflow-hidden rounded-lg">
              <img src={logoImg} alt="Nearz Logo" className="w-9 h-9 rounded-lg relative z-10" />
              <div className="absolute inset-0 bg-primary/20 blur-md group-hover:bg-primary/40 transition-colors"></div>
            </div>
            <span className="font-extrabold text-xl tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
              Nearz <span className="font-semibold text-primary">for Business</span>
            </span>
          </div>
          
          <nav className="hidden md:flex items-center gap-8">
            <a href="#problem" className="text-sm font-semibold text-foreground/70 hover:text-primary transition-colors">The Problem</a>
            <a href="#growth-engine" className="text-sm font-semibold text-foreground/70 hover:text-primary transition-colors">Growth Engine</a>
            <a href="#features" className="text-sm font-semibold text-foreground/70 hover:text-primary transition-colors">Features</a>
            <a href="#why-nearz" className="text-sm font-semibold text-foreground/70 hover:text-primary transition-colors">Why Nearz</a>
          </nav>

          <div className="flex items-center gap-4">
            <Button onClick={scrollToCta} className="hidden md:inline-flex bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-full px-6 transition-all hover:shadow-[0_0_20px_rgba(255,106,0,0.3)] hover:-translate-y-0.5 active:translate-y-0">
              Book Free Growth Consultation
            </Button>
            <Button onClick={scrollToCta} size="sm" className="md:hidden bg-primary text-primary-foreground rounded-full font-semibold">
              Book Consultation
            </Button>
          </div>
        </div>
      </header>

      <main>
        {/* 2. Hero */}
        <section className="pt-32 pb-20 md:pt-40 md:pb-32 px-4 relative min-h-[90vh] flex items-center">
          <div className="container mx-auto max-w-6xl relative z-10">
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="flex-1 text-center lg:text-left"
              >
                <Badge variant="outline" className="mb-8 border-primary/20 bg-primary/10 text-primary px-4 py-1.5 rounded-full font-semibold text-sm backdrop-blur-sm">
                  <Zap className="w-4 h-4 mr-2 inline" />
                  A Growth Platform For Modern Salons
                </Badge>
                
                <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight text-foreground leading-[1.1] mb-6">
                  Turn One-Time Salon Visitors Into <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-400">Loyal Repeat Customers.</span>
                </h1>
                
                <p className="text-lg lg:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                  Most salons lose 80% of first-time customers. Nearz for Business combines operations, CRM and automated engagement so every visit compounds into recurring revenue.
                </p>
                
                <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start mb-12">
                  <Button onClick={scrollToCta} size="lg" className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground text-lg h-14 px-8 rounded-full shadow-[0_8px_30px_rgba(255,106,0,0.25)] transition-all hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(255,106,0,0.35)] font-bold">
                    Book Free Growth Consultation
                  </Button>
                  <Button size="lg" variant="outline" className="w-full sm:w-auto text-lg h-14 px-8 rounded-full border-border/60 hover:bg-muted/50 backdrop-blur-sm transition-all font-semibold hover:border-border">
                    See how it works
                  </Button>
                </div>

                <div className="flex items-center justify-center lg:justify-start gap-8 border-t border-border/50 pt-8">
                  <div>
                    <div className="text-3xl font-extrabold text-foreground">4×</div>
                    <div className="text-sm font-medium text-muted-foreground mt-1">Repeat visits vs. industry</div>
                  </div>
                  <div className="w-px h-12 bg-border/60"></div>
                  <div>
                    <div className="text-3xl font-extrabold text-foreground">1.7×</div>
                    <div className="text-sm font-medium text-muted-foreground mt-1">Customer lifetime value</div>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                style={{ y: heroY }}
                className="flex-1 relative w-full max-w-lg lg:max-w-none mx-auto lg:-mt-12"
              >
                <motion.div 
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  className="relative rounded-[2rem] overflow-hidden shadow-2xl shadow-primary/5 border border-white/20 bg-white/10 backdrop-blur-sm p-3 transform rotate-2 hover:rotate-0 transition-transform duration-700"
                >
                  <img src={heroImg} alt="Premium Salon Interior" className="w-full h-auto rounded-xl object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-[2rem] pointer-events-none"></div>
                </motion.div>
                
                {/* Floating Elements - Positioned further out */}
                <motion.div 
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6, type: "spring" }}
                  className="absolute -left-12 lg:-left-20 top-1/4 bg-background/95 backdrop-blur-xl rounded-2xl shadow-xl shadow-black/5 p-4 border border-border/50 flex items-center gap-4 z-20"
                >
                  <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center text-green-600 border border-green-500/20">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-foreground">Appointment Booked</div>
                    <div className="text-xs font-medium text-muted-foreground mt-0.5">Returning Customer</div>
                  </div>
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8, type: "spring" }}
                  className="absolute -right-8 lg:-right-16 bottom-1/3 bg-background/95 backdrop-blur-xl rounded-2xl shadow-xl shadow-black/5 p-4 border border-border/50 flex items-center gap-4 z-20"
                >
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary border border-primary/20">
                    <TrendingUp className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-foreground">Loyalty Tier Upgraded</div>
                    <div className="text-xs font-medium text-muted-foreground mt-0.5">Gold Member</div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <motion.div 
            style={{ opacity: heroOpacity }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none"
          >
            <span className="text-xs font-semibold text-muted-foreground tracking-widest uppercase">Scroll Down</span>
            <motion.div 
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-8 h-12 rounded-full border-2 border-border/60 flex justify-center pt-2 backdrop-blur-sm bg-background/30"
            >
              <div className="w-1.5 h-3 rounded-full bg-primary"></div>
            </motion.div>
          </motion.div>
        </section>

        {/* 3. The Problem */}
        <section id="problem" className="py-32 relative">
          <div className="absolute inset-0 bg-muted/30 border-y border-border/40 skew-y-[-1deg] origin-top-left -z-10"></div>
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="text-center mb-20">
              <span className="text-primary font-bold tracking-[0.2em] uppercase text-xs">The uncomfortable truth</span>
              <h2 className="text-4xl md:text-6xl font-extrabold mt-4 mb-6 tracking-tight">Most Salons Lose Revenue Without Realizing It.</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-20">
              <Card className="bg-background/60 backdrop-blur-lg border-border/50 shadow-sm hover:shadow-xl hover:border-primary/20 transition-all duration-300 group">
                <CardContent className="p-10 text-center">
                  <div className="text-6xl font-extrabold text-foreground mb-4 group-hover:scale-110 transition-transform">100</div>
                  <div className="text-xl font-bold mb-2">Customers Visit</div>
                  <p className="text-sm text-muted-foreground font-medium">Walk through your door each month</p>
                </CardContent>
              </Card>
              <Card className="bg-background/60 backdrop-blur-lg border-border/50 shadow-sm hover:shadow-xl hover:border-primary/20 transition-all duration-300 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <CardContent className="p-10 text-center relative z-10">
                  <div className="text-6xl font-extrabold text-foreground mb-4 group-hover:scale-110 transition-transform">20</div>
                  <div className="text-xl font-bold mb-2">Come Back</div>
                  <p className="text-sm text-muted-foreground font-medium">Return within 60 days of first visit</p>
                </CardContent>
              </Card>
              <Card className="bg-destructive text-destructive-foreground border-none shadow-lg shadow-destructive/20 hover:shadow-2xl hover:shadow-destructive/30 transition-all duration-300 hover:-translate-y-1 group">
                <CardContent className="p-10 text-center">
                  <div className="text-6xl font-extrabold mb-4 group-hover:scale-110 transition-transform">80</div>
                  <div className="text-xl font-bold mb-2">Disappear</div>
                  <p className="text-sm opacity-90 font-medium">Never return — taking their revenue with them</p>
                </CardContent>
              </Card>
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-background to-muted rounded-3xl p-10 md:p-14 shadow-xl border border-border/50 text-center max-w-4xl mx-auto relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
              <blockquote className="text-3xl md:text-4xl font-serif italic text-foreground mb-8 leading-tight">
                "Acquiring a customer is expensive. Retaining one is profitable."
              </blockquote>
              <p className="text-muted-foreground text-lg md:text-xl leading-relaxed font-medium">
                The cost of lost repeat customers compounds every month. A customer who visits four times a year is worth dramatically more than one who never returns — yet most salons invest nothing in bringing them back.
              </p>
            </motion.div>
          </div>
        </section>

        {/* 4. Why Customers Don't Come Back */}
        <section className="py-32 relative overflow-hidden bg-foreground text-background">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
          
          <div className="container mx-auto px-4 max-w-6xl relative z-10">
            <div className="text-center mb-20">
              <span className="text-primary font-bold tracking-[0.2em] uppercase text-xs">Six silent leaks</span>
              <h2 className="text-4xl md:text-6xl font-extrabold mt-4">Why Customers Don't Come Back.</h2>
            </div>

            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {[
                { num: "01", title: "No Follow-Up", desc: "After the visit ends, silence. No message, no thank-you, no next step." },
                { num: "02", title: "No Personalized Offers", desc: "Generic promotions that don't match the customer's history or preferences." },
                { num: "03", title: "No Visit Reminder", desc: "Customers forget to rebook. No one nudges them back at the right moment." },
                { num: "04", title: "No Loyalty Program", desc: "Nothing incentivizes the second visit, let alone the tenth." },
                { num: "05", title: "No Feedback Loop", desc: "Unhappy customers leave silently — and tell their friends offline." },
                { num: "06", title: "Data Never Used", desc: "Customer records exist in the system but are never leveraged for growth." }
              ].map((leak, i) => (
                <motion.div 
                  variants={itemVariants}
                  key={i} 
                  className="group relative p-8 rounded-3xl bg-background/5 backdrop-blur-md border border-white/10 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                  <div className="flex gap-6 relative z-10">
                    <div className="text-4xl font-extrabold text-white/20 font-serif group-hover:text-primary transition-colors">{leak.num}</div>
                    <div>
                      <h3 className="text-xl font-bold mb-3 text-white">{leak.title}</h3>
                      <p className="text-white/60 leading-relaxed font-medium group-hover:text-white/80 transition-colors">{leak.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* 5. Growth Engine */}
        <section id="growth-engine" className="py-32 relative">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="text-center mb-24">
              <span className="text-primary font-bold tracking-[0.2em] uppercase text-xs">The Nearz method</span>
              <h2 className="text-4xl md:text-6xl font-extrabold mt-4 mb-6">The Salon Growth Engine.</h2>
              <p className="text-xl text-muted-foreground font-medium max-w-3xl mx-auto">
                Every visit is an opportunity. Here's how Nearz transforms a single transaction into a revenue-generating relationship — automatically, in the background.
              </p>
            </div>

            <div className="space-y-6 relative">
              {/* Animated Connecting Line */}
              <div className="absolute left-[47px] top-[50px] bottom-[50px] w-[3px] bg-border/50 hidden md:block rounded-full overflow-hidden">
                <motion.div 
                  className="w-full bg-primary"
                  initial={{ height: "0%" }}
                  whileInView={{ height: "100%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 2, ease: "easeInOut" }}
                />
              </div>
              
              {[
                { step: "Step 01", title: "Visit + Billing", desc: "The journey begins at checkout — a customer profile is created automatically with services, preferences and history.", icon: <Zap className="w-6 h-6" /> },
                { step: "Step 02", title: "Follow-Up + Feedback", desc: "Post-visit messages go out, feedback is collected, and the relationship deepens without manual effort.", icon: <MessageCircle className="w-6 h-6" /> },
                { step: "Step 03", title: "Personalized Campaigns", desc: "Smart, data-driven offers bring the customer back at exactly the right moment — not too early, not too late.", icon: <TrendingUp className="w-6 h-6" /> },
                { step: "Step 04", title: "Repeat Visit → Higher Revenue", desc: "Loyalty compounds. Every return visit lifts customer lifetime value and stabilises monthly revenue.", icon: <Award className="w-6 h-6" /> }
              ].map((step, i) => (
                <motion.div 
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: i * 0.2 }}
                  key={i} 
                  className="relative flex flex-col md:flex-row gap-6 md:gap-12 bg-card border border-border shadow-sm p-8 rounded-3xl hover:shadow-xl hover:border-primary/30 transition-all duration-300 group"
                >
                  <div className="hidden md:flex absolute -left-[20px] top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background border-[3px] border-border group-hover:border-primary items-center justify-center z-10 transition-colors duration-300 shadow-sm">
                    <div className="w-3 h-3 rounded-full bg-primary scale-0 group-hover:scale-100 transition-transform duration-300"></div>
                  </div>
                  
                  <div className="md:w-1/3 shrink-0">
                    <div className="inline-flex items-center gap-2 text-primary font-bold text-sm mb-3 bg-primary/10 px-3 py-1 rounded-full">
                      {step.icon}
                      {step.step}
                    </div>
                    <h3 className="text-2xl font-bold text-foreground">{step.title}</h3>
                  </div>
                  <div className="flex-1 flex items-center">
                    <p className="text-lg text-muted-foreground font-medium leading-relaxed group-hover:text-foreground transition-colors">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 6. Platform Overview with Mockup */}
        <section className="py-32 bg-muted/30 border-y border-border/50 overflow-hidden relative">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="text-center mb-24">
              <span className="text-primary font-bold tracking-[0.2em] uppercase text-xs">The platform</span>
              <h2 className="text-4xl md:text-6xl font-extrabold mt-4 mb-6">Meet Nearz for Business.</h2>
              <p className="text-xl text-muted-foreground font-medium max-w-3xl mx-auto">
                More than salon management software — a complete growth platform designed to turn your existing customer base into recurring revenue.
              </p>
            </div>

            <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
              {/* Feature List */}
              <div className="lg:col-span-5 space-y-4 order-2 lg:order-1">
                {[
                  { num: "01", title: "Manage Operations", icon: <Calendar className="w-6 h-6" />, desc: "Billing, appointments, packages, and staff — all in one place." },
                  { num: "02", title: "Engage Customers", icon: <MessageCircle className="w-6 h-6" />, desc: "Automated WhatsApp & SMS campaigns that reach customers perfectly." },
                  { num: "03", title: "Drive Repeat Visits", icon: <ArrowRight className="w-6 h-6" />, desc: "Smart reminders and personalized offers that bring customers back." },
                  { num: "04", title: "Increase Lifetime Value", icon: <TrendingUp className="w-6 h-6" />, desc: "Every repeat visit and referral adds up. Maximize customer worth." }
                ].map((pillar, i) => (
                  <div 
                    key={i} 
                    className={`p-6 rounded-2xl border transition-all duration-500 cursor-pointer ${
                      activeScreen === i 
                        ? "bg-white shadow-lg border-primary/20 scale-105" 
                        : "bg-transparent border-transparent hover:bg-white/50 opacity-60 hover:opacity-100"
                    }`}
                    onClick={() => setActiveScreen(i)}
                  >
                    <div className="flex items-center gap-4 mb-2">
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${
                        activeScreen === i ? "bg-primary/10 text-primary" : "bg-muted text-muted-foreground"
                      }`}>
                        {pillar.icon}
                      </div>
                      <h3 className="text-xl font-bold">{pillar.title}</h3>
                    </div>
                    <AnimatePresence>
                      {activeScreen === i && (
                        <motion.p 
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="text-muted-foreground font-medium pl-14 leading-relaxed"
                        >
                          {pillar.desc}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>

              {/* Device Mockup */}
              <div className="lg:col-span-7 order-1 lg:order-2 relative">
                <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full"></div>
                <motion.div 
                  animate={{ y: [0, -15, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  className="relative mx-auto max-w-[320px] aspect-[1/2] rounded-[3rem] border-[12px] border-foreground bg-background shadow-2xl shadow-primary/20 overflow-hidden"
                >
                  {/* Phone Notch */}
                  <div className="absolute top-0 inset-x-0 h-6 bg-foreground rounded-b-3xl w-1/2 mx-auto z-50"></div>
                  
                  {/* App Header */}
                  <div className="bg-background pt-10 pb-4 px-6 border-b border-border/50 sticky top-0 z-40">
                    <div className="flex justify-between items-center mb-4">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary font-bold">N</div>
                        <div className="font-bold text-lg">Nearz</div>
                      </div>
                      <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center">
                        <img src="https://i.pravatar.cc/100" className="w-8 h-8 rounded-full" alt="avatar" />
                      </div>
                    </div>
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={activeScreen}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="flex items-center gap-2 font-semibold text-lg"
                      >
                        {mockupScreens[activeScreen].icon}
                        {mockupScreens[activeScreen].title}
                      </motion.div>
                    </AnimatePresence>
                  </div>

                  {/* App Content Area */}
                  <div className="p-6 h-full overflow-y-auto bg-muted/20">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={activeScreen}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.3 }}
                      >
                        {mockupScreens[activeScreen].content}
                      </motion.div>
                    </AnimatePresence>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* 7. Features Grid */}
        <section id="features" className="py-32 bg-background overflow-hidden relative">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="text-center mb-20">
              <span className="text-primary font-bold tracking-[0.2em] uppercase text-xs">Revenue growth features</span>
              <h2 className="text-4xl md:text-6xl font-extrabold mt-4">Three focused categories. One measurable outcome.</h2>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {[
                { title: "Re-engagement", sub: "Bring Customers Back", items: ["WhatsApp campaigns", "SMS campaigns", "Visit reminders", "Win-back offers"] },
                { title: "Retention", sub: "Increase Customer Loyalty", items: ["Loyalty rewards", "Prepaid packages", "Membership tiers", "Referral engine"] },
                { title: "Reviews", sub: "Improve Reputation", items: ["Feedback collection", "Google review automation", "Reputation monitoring", "Response templates"] }
              ].map((cat, i) => (
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  key={i} 
                  className="relative group rounded-[2.5rem] p-[1px] bg-gradient-to-b from-border/80 to-transparent hover:from-primary/50 hover:to-primary/10 transition-colors duration-500"
                >
                  <div className="absolute inset-0 bg-primary/10 rounded-[2.5rem] opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500"></div>
                  <div className="relative h-full bg-background rounded-[2.4rem] p-10 shadow-sm group-hover:shadow-2xl group-hover:shadow-primary/5 transition-all duration-500">
                    <h3 className="text-3xl font-bold text-foreground mb-2">{cat.title}</h3>
                    <p className="text-primary font-bold tracking-wide uppercase text-xs mb-10">{cat.sub}</p>
                    
                    <ul className="space-y-5">
                      {cat.items.map((item, j) => (
                        <li key={j} className="flex items-center gap-4 text-muted-foreground font-medium group-hover:text-foreground transition-colors">
                          <CheckCircle2 className="w-6 h-6 text-primary/40 group-hover:text-primary transition-colors shrink-0" />
                          <span className="text-lg">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 8. CRM / AI */}
        <section className="py-32 bg-foreground text-background border-t border-border/50">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-24">
              <span className="text-primary font-bold tracking-[0.2em] uppercase text-xs">Data that works for you</span>
              <h2 className="text-4xl md:text-6xl font-extrabold mt-4">Know Every Customer Better. AI-Powered Growth.</h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
              {/* Profile Card UI Mockup */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring" }}
                className="relative max-w-md mx-auto w-full"
              >
                <div className="absolute -inset-10 bg-gradient-to-tr from-primary/30 to-transparent rounded-full blur-[80px] -z-10"></div>
                <Card className="shadow-2xl shadow-black/50 border-white/10 overflow-hidden rounded-[2rem] bg-background/5 backdrop-blur-2xl text-white">
                  <div className="h-2 bg-gradient-to-r from-primary to-orange-300"></div>
                  <CardContent className="p-10">
                    <div className="flex items-center gap-5 mb-8">
                      <div className="w-16 h-16 rounded-full bg-primary/20 text-primary font-bold text-2xl flex items-center justify-center border border-primary/30">
                        AM
                      </div>
                      <div>
                        <h4 className="text-2xl font-bold">Aanya M</h4>
                        <div className="text-sm text-white/50 font-medium">Client since 2022</div>
                      </div>
                    </div>
                    
                    <div className="space-y-5 mb-8 text-lg font-medium">
                      <div className="flex justify-between items-center pb-5 border-b border-white/10">
                        <span className="text-white/60">Last visit</span>
                        <span className="font-bold text-red-400">47 days ago</span>
                      </div>
                      <div className="flex justify-between items-center pb-5 border-b border-white/10">
                        <span className="text-white/60">Loyalty tier</span>
                        <Badge className="bg-yellow-500/20 text-yellow-400 border-yellow-500/30 text-sm py-1 px-3">Gold</Badge>
                      </div>
                      <div className="flex justify-between items-center pb-5 border-b border-white/10">
                        <span className="text-white/60">Prefers</span>
                        <span className="font-bold">Weekend evenings</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-white/60">Spend YTD</span>
                        <span className="font-extrabold text-xl text-primary">₹42,600</span>
                      </div>
                    </div>
                    
                    <Button className="w-full bg-primary hover:bg-primary/90 text-white font-bold text-lg h-14 rounded-xl transition-all hover:scale-[1.02] shadow-lg shadow-primary/20">
                      Send Re-engagement Offer
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>

              <div className="space-y-16">
                <div>
                  <h3 className="text-3xl font-bold mb-3 text-white">Smart Customer CRM</h3>
                  <p className="text-primary font-bold tracking-wide uppercase text-sm mb-6">Every profile, an opportunity at a glance</p>
                  <ul className="space-y-4 text-white/70 font-medium text-lg">
                    <li className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-primary shrink-0"></div> Visit history & service preferences</li>
                    <li className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-primary shrink-0"></div> Spending patterns over time</li>
                    <li className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-primary shrink-0"></div> Last visit date & upcoming opportunities</li>
                    <li className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-primary shrink-0"></div> Individual loyalty status & rewards balance</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-3xl font-bold mb-3 text-white">AI-Powered Recommendations</h3>
                  <p className="text-primary font-bold tracking-wide uppercase text-sm mb-6">Act before customers slip away</p>
                  <ul className="space-y-6 text-white/70 font-medium">
                    <li>
                      <strong className="text-white block mb-1 text-lg">Customers Due for Revisit</strong>
                      Automatically flags customers overdue for their next appointment.
                    </li>
                    <li>
                      <strong className="text-white block mb-1 text-lg">Inactive Customer List</strong>
                      Identifies lapsed customers so you can win them back with targeted campaigns.
                    </li>
                    <li>
                      <strong className="text-white block mb-1 text-lg">Revenue Opportunities</strong>
                      Smart suggestions for offers and timing based on real customer behavior.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 9. Full Toolkit */}
        <section className="py-32 bg-muted/30">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="text-center mb-20">
              <span className="text-primary font-bold tracking-[0.2em] uppercase text-xs">The full toolkit</span>
              <h2 className="text-4xl md:text-6xl font-extrabold mt-4">Everything Needed To Run A Modern Salon.</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {[
                { name: "Billing", desc: "Fast, accurate invoicing at the point of sale", icon: <Zap className="w-6 h-6" /> },
                { name: "CRM", desc: "Rich customer profiles that power retention", icon: <Users className="w-6 h-6" /> },
                { name: "Appointments", desc: "Seamless booking and schedule management", icon: <Calendar className="w-6 h-6" /> },
                { name: "Packages", desc: "Pre-paid service bundles to lock in revenue", icon: <Gift className="w-6 h-6" /> },
                { name: "Loyalty", desc: "Points, rewards, and tiers that keep customers coming back", icon: <Star className="w-6 h-6" /> },
                { name: "Marketing", desc: "WhatsApp, SMS, and email campaigns on autopilot", icon: <MessageCircle className="w-6 h-6" /> },
                { name: "Feedback", desc: "Post-visit surveys to improve service quality", icon: <MessageCircle className="w-6 h-6" /> },
                { name: "Reviews", desc: "Automated Google review collection at scale", icon: <Star className="w-6 h-6" /> },
                { name: "Reports", desc: "Actionable insights into revenue and retention", icon: <BarChart className="w-6 h-6" /> },
                { name: "Mobile App", desc: "Run your salon from anywhere, anytime", icon: <Smartphone className="w-6 h-6" /> }
              ].map((tool, i) => (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  key={i} 
                  className="p-8 rounded-[2rem] bg-background border border-border/50 hover:border-primary/30 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full group"
                >
                  <div className="w-12 h-12 rounded-xl bg-muted/50 text-muted-foreground flex items-center justify-center mb-6 group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                    {tool.icon}
                  </div>
                  <h3 className="font-bold text-xl mb-3 text-foreground">
                    {tool.name}
                  </h3>
                  <p className="text-muted-foreground font-medium leading-relaxed mt-auto">{tool.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 10. Final CTA */}
        <section id="final-cta" className="py-32 bg-primary relative overflow-hidden">
          {/* Decorative background elements */}
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-white/20 rounded-full blur-[120px] translate-x-1/3 -translate-y-1/3 pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-black/20 rounded-full blur-[100px] -translate-x-1/3 translate-y-1/3 pointer-events-none"></div>
          
          <div className="container mx-auto px-4 max-w-6xl relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
              <div className="text-white">
                <span className="font-bold tracking-[0.2em] uppercase text-xs text-white/80">Free offer</span>
                <h2 className="text-5xl md:text-7xl font-extrabold mt-6 mb-8 leading-tight">Let's Grow Your Repeat Business.</h2>
                <p className="text-xl md:text-2xl text-white/90 mb-12 font-medium leading-relaxed">
                  Book a Free Salon Growth Consultation — not just a product demo. We'll review your current setup and show you exactly where revenue is being left on the table.
                </p>
                
                <div className="flex flex-wrap gap-8 mb-12">
                  <a href="#" className="flex items-center gap-3 text-lg text-white hover:text-white/80 font-bold transition-colors">
                    <MessageCircle className="w-6 h-6" /> WhatsApp us
                  </a>
                  <a href="tel:+911234567890" className="flex items-center gap-3 text-lg text-white hover:text-white/80 font-bold transition-colors">
                    <Phone className="w-6 h-6" /> Call directly
                  </a>
                  <a href="mailto:hello@nearz.business" className="flex items-center gap-3 text-lg text-white hover:text-white/80 font-bold transition-colors">
                    <Mail className="w-6 h-6" /> Email
                  </a>
                </div>
              </div>

              <motion.div 
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-background rounded-[3rem] p-10 md:p-14 shadow-2xl"
              >
                <h3 className="text-3xl font-extrabold text-foreground mb-8">What's included:</h3>
                <ul className="space-y-8 mb-12">
                  {[
                    { title: "CRM Audit", desc: "We review your current customer data and retention gaps." },
                    { title: "Retention Review", desc: "Identify how many customers you're losing — and why." },
                    { title: "Marketing Suggestions", desc: "Personalized recommendations for your salon." },
                    { title: "Product Walkthrough", desc: "See Nearz in action with your real use case." }
                  ].map((item, i) => (
                    <li key={i} className="flex gap-5">
                      <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0 mt-1">
                        <CheckCircle2 className="w-6 h-6" />
                      </div>
                      <div>
                        <strong className="block text-foreground text-xl mb-1">{item.title}</strong>
                        <span className="text-muted-foreground font-medium text-lg">{item.desc}</span>
                      </div>
                    </li>
                  ))}
                </ul>
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground text-xl font-bold h-16 rounded-2xl shadow-lg shadow-primary/30 transition-transform hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/40">
                  Book my consultation
                </Button>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      {/* 11. Footer */}
      <footer className="bg-background py-16 border-t border-border">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8 mb-12">
            <div className="flex items-center gap-3">
              <img src={logoImg} alt="Nearz Logo" className="w-8 h-8 rounded" />
              <span className="font-extrabold text-xl tracking-tight text-foreground">Nearz <span className="text-primary">for Business</span></span>
            </div>
            
            <nav className="flex flex-wrap justify-center gap-8">
              <a href="#problem" className="text-sm font-semibold text-muted-foreground hover:text-primary transition-colors">The Problem</a>
              <a href="#growth-engine" className="text-sm font-semibold text-muted-foreground hover:text-primary transition-colors">Growth Engine</a>
              <a href="#features" className="text-sm font-semibold text-muted-foreground hover:text-primary transition-colors">Features</a>
              <a href="#why-nearz" className="text-sm font-semibold text-muted-foreground hover:text-primary transition-colors">Why Nearz</a>
            </nav>
            
            <div className="flex flex-col items-center md:items-end gap-2 text-sm font-semibold text-muted-foreground">
              <a href="mailto:hello@nearz.business" className="hover:text-primary transition-colors">hello@nearz.business</a>
              <a href="tel:+911234567890" className="hover:text-primary transition-colors">+91 1234567890</a>
            </div>
          </div>
          
          <div className="border-t border-border/50 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm font-medium text-muted-foreground/60">
            <div>&copy; {new Date().getFullYear()} Nearz for Business. All rights reserved.</div>
          </div>
        </div>
      </footer>
    </div>
  );
}