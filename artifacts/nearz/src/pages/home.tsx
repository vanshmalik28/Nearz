import React, { useEffect, useState } from "react";
import { Link } from "wouter";
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
  Zap
} from "lucide-react";

export default function Home() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden font-sans">
      {/* 1. Header/Nav */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/80 backdrop-blur-md border-b border-border shadow-sm py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src={logoImg} alt="Nearz Logo" className="w-8 h-8 rounded" />
            <span className="font-bold text-xl tracking-tight">Nearz</span>
          </div>
          
          <nav className="hidden md:flex items-center gap-8">
            <a href="#problem" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">The Problem</a>
            <a href="#growth-engine" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">Growth Engine</a>
            <a href="#features" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">Features</a>
            <a href="#why-nearz" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">Why Nearz</a>
          </nav>

          <div className="flex items-center gap-4">
            <Button className="hidden md:inline-flex bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-full px-6 transition-transform hover:scale-105 active:scale-95">
              Book Free Growth Consultation
            </Button>
            <Button size="sm" className="md:hidden bg-primary text-primary-foreground rounded-full">
              Book Consultation
            </Button>
          </div>
        </div>
      </header>

      <main>
        {/* 2. Hero */}
        <section className="pt-32 pb-20 md:pt-40 md:pb-32 px-4 relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl -z-10"></div>
          
          <div className="container mx-auto max-w-6xl">
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
              <div className="flex-1 text-center lg:text-left animate-in fade-in slide-in-from-bottom-8 duration-700">
                <Badge variant="outline" className="mb-6 border-primary/20 bg-primary/5 text-primary px-4 py-1.5 rounded-full font-medium text-sm">
                  <Zap className="w-4 h-4 mr-2 inline" />
                  A Growth Platform For Modern Salons
                </Badge>
                
                <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight text-foreground leading-[1.1] mb-6">
                  Turn One-Time Salon Visitors Into <span className="text-primary">Loyal Repeat Customers.</span>
                </h1>
                
                <p className="text-lg lg:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                  Most salons lose 80% of first-time customers. Nearz for Business combines operations, CRM and automated engagement so every visit compounds into recurring revenue.
                </p>
                
                <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start mb-12">
                  <Button size="lg" className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground text-lg h-14 px-8 rounded-full shadow-lg shadow-primary/25 transition-all hover:-translate-y-1">
                    Book Free Growth Consultation
                  </Button>
                  <Button size="lg" variant="outline" className="w-full sm:w-auto text-lg h-14 px-8 rounded-full border-border hover:bg-muted transition-all">
                    See how it works
                  </Button>
                </div>

                <div className="flex items-center justify-center lg:justify-start gap-8 border-t border-border/50 pt-8">
                  <div>
                    <div className="text-3xl font-bold text-foreground">4×</div>
                    <div className="text-sm font-medium text-muted-foreground mt-1">Repeat visits vs. industry</div>
                  </div>
                  <div className="w-px h-12 bg-border"></div>
                  <div>
                    <div className="text-3xl font-bold text-foreground">1.7×</div>
                    <div className="text-sm font-medium text-muted-foreground mt-1">Customer lifetime value</div>
                  </div>
                </div>
              </div>

              <div className="flex-1 relative w-full max-w-lg lg:max-w-none mx-auto animate-in fade-in slide-in-from-right-8 duration-1000 delay-200">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-black/10 border border-white/20 bg-white/50 backdrop-blur-sm p-2 transform rotate-1 hover:rotate-0 transition-transform duration-500">
                  <img src={heroImg} alt="Premium Salon Interior" className="w-full h-auto rounded-xl object-cover" />
                  
                  {/* Floating Elements */}
                  <div className="absolute -left-6 top-1/4 bg-white rounded-xl shadow-xl p-4 border border-border/50 flex items-center gap-3 animate-in slide-in-from-left duration-700 delay-500">
                    <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                      <CheckCircle2 className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-sm font-bold">Appointment Booked</div>
                      <div className="text-xs text-muted-foreground">Returning Customer</div>
                    </div>
                  </div>
                  
                  <div className="absolute -right-6 bottom-1/4 bg-white rounded-xl shadow-xl p-4 border border-border/50 flex items-center gap-3 animate-in slide-in-from-right duration-700 delay-700">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      <TrendingUp className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-sm font-bold">Loyalty Tier Upgraded</div>
                      <div className="text-xs text-muted-foreground">Gold Member</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. The Problem */}
        <section id="problem" className="py-24 bg-muted/50 border-y border-border/50">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="text-center mb-16">
              <span className="text-primary font-semibold tracking-wider uppercase text-sm">The uncomfortable truth</span>
              <h2 className="text-3xl md:text-5xl font-bold mt-3 mb-6">Most Salons Lose Revenue Without Realizing It.</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-16">
              <Card className="bg-white border-none shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-8 text-center">
                  <div className="text-5xl font-extrabold text-foreground mb-4">100</div>
                  <div className="text-lg font-bold mb-2">Customers Visit</div>
                  <p className="text-sm text-muted-foreground">Walk through your door each month</p>
                </CardContent>
              </Card>
              <Card className="bg-white border-none shadow-md hover:shadow-lg transition-shadow relative overflow-hidden">
                <CardContent className="p-8 text-center">
                  <div className="text-5xl font-extrabold text-foreground mb-4">20</div>
                  <div className="text-lg font-bold mb-2">Come Back</div>
                  <p className="text-sm text-muted-foreground">Return within 60 days of first visit</p>
                </CardContent>
              </Card>
              <Card className="bg-destructive text-destructive-foreground border-none shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-8 text-center">
                  <div className="text-5xl font-extrabold mb-4">80</div>
                  <div className="text-lg font-bold mb-2">Disappear</div>
                  <p className="text-sm opacity-90">Never return — taking their revenue with them</p>
                </CardContent>
              </Card>
            </div>

            <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-border/50 text-center max-w-4xl mx-auto">
              <blockquote className="text-2xl md:text-3xl font-serif italic text-foreground mb-6">
                "Acquiring a customer is expensive. Retaining one is profitable."
              </blockquote>
              <p className="text-muted-foreground text-lg leading-relaxed">
                The cost of lost repeat customers compounds every month. A customer who visits four times a year is worth dramatically more than one who never returns — yet most salons invest nothing in bringing them back.
              </p>
            </div>
          </div>
        </section>

        {/* 4. Why Customers Don't Come Back */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-16">
              <span className="text-primary font-semibold tracking-wider uppercase text-sm">Six silent leaks</span>
              <h2 className="text-3xl md:text-5xl font-bold mt-3">Why Customers Don't Come Back.</h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { num: "01", title: "No Follow-Up", desc: "After the visit ends, silence. No message, no thank-you, no next step." },
                { num: "02", title: "No Personalized Offers", desc: "Generic promotions that don't match the customer's history or preferences." },
                { num: "03", title: "No Visit Reminder", desc: "Customers forget to rebook. No one nudges them back at the right moment." },
                { num: "04", title: "No Loyalty Program", desc: "Nothing incentivizes the second visit, let alone the tenth." },
                { num: "05", title: "No Feedback Loop", desc: "Unhappy customers leave silently — and tell their friends offline." },
                { num: "06", title: "Data Never Used", desc: "Customer records exist in the system but are never leveraged for growth." }
              ].map((leak, i) => (
                <div key={i} className="flex gap-4 p-6 rounded-2xl hover:bg-muted/50 transition-colors border border-transparent hover:border-border/50">
                  <div className="text-3xl font-bold text-primary/30 font-serif">{leak.num}</div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{leak.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{leak.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. Growth Engine */}
        <section id="growth-engine" className="py-24 bg-foreground text-background">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="text-center mb-16">
              <span className="text-primary font-semibold tracking-wider uppercase text-sm">The Nearz method</span>
              <h2 className="text-3xl md:text-5xl font-bold mt-3 mb-6">The Salon Growth Engine.</h2>
              <p className="text-xl text-background/70 max-w-3xl mx-auto">
                Every visit is an opportunity. Here's how Nearz transforms a single transaction into a revenue-generating relationship — automatically, in the background.
              </p>
            </div>

            <div className="space-y-8 relative">
              <div className="absolute left-[39px] top-[40px] bottom-[40px] w-0.5 bg-primary/20 hidden md:block"></div>
              
              {[
                { step: "Step 01", title: "Visit + Billing", desc: "The journey begins at checkout — a customer profile is created automatically with services, preferences and history." },
                { step: "Step 02", title: "Follow-Up + Feedback", desc: "Post-visit messages go out, feedback is collected, and the relationship deepens without manual effort." },
                { step: "Step 03", title: "Personalized Campaigns", desc: "Smart, data-driven offers bring the customer back at exactly the right moment — not too early, not too late." },
                { step: "Step 04", title: "Repeat Visit → Higher Revenue", desc: "Loyalty compounds. Every return visit lifts customer lifetime value and stabilises monthly revenue." }
              ].map((step, i) => (
                <div key={i} className="relative flex flex-col md:flex-row gap-6 md:gap-12 bg-background/5 border border-white/10 p-8 rounded-2xl hover:bg-background/10 transition-colors group">
                  <div className="hidden md:flex absolute -left-[14px] top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-foreground border-4 border-primary z-10"></div>
                  
                  <div className="md:w-1/4 shrink-0">
                    <div className="text-primary font-bold text-lg mb-1">{step.step}</div>
                    <h3 className="text-2xl font-bold text-white">{step.title}</h3>
                  </div>
                  <div className="flex-1 flex items-center">
                    <p className="text-lg text-white/70 leading-relaxed group-hover:text-white/90 transition-colors">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 6. Platform Overview */}
        <section className="py-24 bg-muted/30">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-20">
              <span className="text-primary font-semibold tracking-wider uppercase text-sm">The platform</span>
              <h2 className="text-3xl md:text-5xl font-bold mt-3 mb-6">Meet Nearz for Business.</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                More than salon management software — a complete growth platform designed to turn your existing customer base into recurring revenue.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                { num: "01", title: "Manage Operations", icon: <Calendar className="w-6 h-6" />, desc: "Billing, appointments, packages, and staff — all in one place, running smoothly so you can focus on the customer experience." },
                { num: "02", title: "Engage Customers", icon: <MessageCircle className="w-6 h-6" />, desc: "Automated WhatsApp, SMS, and email campaigns that reach your customers at exactly the right moment — without manual effort." },
                { num: "03", title: "Drive Repeat Visits", icon: <ArrowRight className="w-6 h-6" />, desc: "Smart reminders, loyalty rewards, and personalized offers that bring customers back again and again." },
                { num: "04", title: "Increase Lifetime Value", icon: <TrendingUp className="w-6 h-6" />, desc: "Every repeat visit, upsell, and referral adds up. Nearz helps you maximize what every customer is worth." }
              ].map((pillar, i) => (
                <Card key={i} className="border-none shadow-sm hover:shadow-xl transition-all duration-300 group overflow-hidden">
                  <CardContent className="p-8">
                    <div className="flex justify-between items-start mb-6">
                      <div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                        {pillar.icon}
                      </div>
                      <div className="text-4xl font-extrabold text-muted/50 group-hover:text-primary/20 transition-colors">{pillar.num}</div>
                    </div>
                    <h3 className="text-2xl font-bold mb-4">{pillar.title}</h3>
                    <p className="text-muted-foreground leading-relaxed text-lg">{pillar.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* 7. Features */}
        <section id="features" className="py-24 bg-background overflow-hidden relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[600px] bg-primary/5 rounded-full blur-[100px] -z-10"></div>
          
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-16">
              <span className="text-primary font-semibold tracking-wider uppercase text-sm">Revenue growth features</span>
              <h2 className="text-3xl md:text-5xl font-bold mt-3">Three focused categories. One measurable outcome.</h2>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {[
                { title: "Re-engagement", sub: "Bring Customers Back", items: ["WhatsApp campaigns", "SMS campaigns", "Visit reminders", "Win-back offers"] },
                { title: "Retention", sub: "Increase Customer Loyalty", items: ["Loyalty rewards", "Prepaid packages", "Membership tiers", "Referral engine"] },
                { title: "Reviews", sub: "Improve Reputation", items: ["Feedback collection", "Google review automation", "Reputation monitoring", "Response templates"] }
              ].map((cat, i) => (
                <div key={i} className="relative group rounded-3xl p-[1px] bg-gradient-to-b from-border to-transparent hover:from-primary/50 hover:to-primary/10 transition-colors duration-500">
                  <div className="absolute inset-0 bg-primary/10 rounded-3xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500"></div>
                  <div className="relative h-full bg-white rounded-[23px] p-8 shadow-sm group-hover:shadow-lg transition-all duration-500">
                    <h3 className="text-2xl font-bold text-foreground mb-1">{cat.title}</h3>
                    <p className="text-primary font-medium text-sm mb-8">{cat.sub}</p>
                    
                    <ul className="space-y-4">
                      {cat.items.map((item, j) => (
                        <li key={j} className="flex items-center gap-3 text-muted-foreground group-hover:text-foreground transition-colors">
                          <CheckCircle2 className="w-5 h-5 text-primary/50 group-hover:text-primary transition-colors shrink-0" />
                          <span className="font-medium">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 8. CRM / AI */}
        <section className="py-24 bg-muted/50 border-t border-border/50">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-16">
              <span className="text-primary font-semibold tracking-wider uppercase text-sm">Data that works for you</span>
              <h2 className="text-3xl md:text-5xl font-bold mt-3">Know Every Customer Better. AI-Powered Growth.</h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Profile Card UI Mockup */}
              <div className="relative max-w-md mx-auto w-full">
                <div className="absolute -inset-4 bg-gradient-to-tr from-primary/20 to-transparent rounded-3xl blur-2xl -z-10"></div>
                <Card className="shadow-2xl shadow-black/5 border-border overflow-hidden rounded-2xl bg-white/90 backdrop-blur-xl">
                  <div className="h-2 bg-gradient-to-r from-primary to-orange-300"></div>
                  <CardContent className="p-8">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 rounded-full bg-primary/10 text-primary font-bold text-2xl flex items-center justify-center">
                        AM
                      </div>
                      <div>
                        <h4 className="text-2xl font-bold">Aanya M</h4>
                        <div className="text-sm text-muted-foreground">Client since 2022</div>
                      </div>
                    </div>
                    
                    <div className="space-y-4 mb-6">
                      <div className="flex justify-between items-center pb-4 border-b border-border/50">
                        <span className="text-muted-foreground">Last visit</span>
                        <span className="font-semibold text-destructive">47 days ago</span>
                      </div>
                      <div className="flex justify-between items-center pb-4 border-b border-border/50">
                        <span className="text-muted-foreground">Loyalty tier</span>
                        <Badge className="bg-yellow-500/10 text-yellow-700 hover:bg-yellow-500/20 border-yellow-500/20">Gold</Badge>
                      </div>
                      <div className="flex justify-between items-center pb-4 border-b border-border/50">
                        <span className="text-muted-foreground">Prefers</span>
                        <span className="font-semibold">Weekend evenings</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-muted-foreground">Spend YTD</span>
                        <span className="font-bold text-lg text-primary">₹42,600</span>
                      </div>
                    </div>
                    
                    <Button className="w-full bg-primary/10 hover:bg-primary/20 text-primary font-semibold">
                      Send Re-engagement Offer
                    </Button>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-12">
                <div>
                  <h3 className="text-2xl font-bold mb-2">Smart Customer CRM</h3>
                  <p className="text-primary font-medium mb-6">Every profile, an opportunity at a glance</p>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></div> Visit history & service preferences</li>
                    <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></div> Spending patterns over time</li>
                    <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></div> Last visit date & upcoming opportunities</li>
                    <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></div> Individual loyalty status & rewards balance</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold mb-2">AI-Powered Recommendations</h3>
                  <p className="text-primary font-medium mb-6">Act before customers slip away</p>
                  <ul className="space-y-5 text-muted-foreground">
                    <li>
                      <strong className="text-foreground block mb-1">Customers Due for Revisit</strong>
                      Automatically flags customers overdue for their next appointment.
                    </li>
                    <li>
                      <strong className="text-foreground block mb-1">Inactive Customer List</strong>
                      Identifies lapsed customers so you can win them back with targeted campaigns.
                    </li>
                    <li>
                      <strong className="text-foreground block mb-1">Revenue Opportunities</strong>
                      Smart suggestions for offers and timing based on real customer behavior.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 9. Full Toolkit */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-16">
              <span className="text-primary font-semibold tracking-wider uppercase text-sm">The full toolkit</span>
              <h2 className="text-3xl md:text-5xl font-bold mt-3">Everything Needed To Run A Modern Salon.</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {[
                { name: "Billing", desc: "Fast, accurate invoicing at the point of sale", icon: <Zap className="w-5 h-5" /> },
                { name: "CRM", desc: "Rich customer profiles that power retention", icon: <Users className="w-5 h-5" /> },
                { name: "Appointments", desc: "Seamless booking and schedule management", icon: <Calendar className="w-5 h-5" /> },
                { name: "Packages", desc: "Pre-paid service bundles to lock in revenue", icon: <Gift className="w-5 h-5" /> },
                { name: "Loyalty", desc: "Points, rewards, and tiers that keep customers coming back", icon: <Star className="w-5 h-5" /> },
                { name: "Marketing", desc: "WhatsApp, SMS, and email campaigns on autopilot", icon: <MessageCircle className="w-5 h-5" /> },
                { name: "Feedback", desc: "Post-visit surveys to improve service quality", icon: <MessageCircle className="w-5 h-5" /> },
                { name: "Reviews", desc: "Automated Google review collection at scale", icon: <Star className="w-5 h-5" /> },
                { name: "Reports", desc: "Actionable insights into revenue and retention", icon: <BarChart className="w-5 h-5" /> },
                { name: "Mobile App", desc: "Run your salon from anywhere, anytime", icon: <Smartphone className="w-5 h-5" /> }
              ].map((tool, i) => (
                <div key={i} className="p-6 rounded-2xl bg-muted/40 border border-border/50 hover:bg-white hover:shadow-lg hover:border-primary/20 transition-all duration-300 flex flex-col h-full group">
                  <div className="text-muted-foreground/40 font-bold text-xl mb-4 group-hover:text-primary/30 transition-colors">{(i + 1).toString().padStart(2, '0')}</div>
                  <h3 className="font-bold text-lg mb-2 flex items-center gap-2 text-foreground">
                    {tool.name}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mt-auto">{tool.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 10. Why Nearz / Comparison */}
        <section id="why-nearz" className="py-24 bg-foreground text-background">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="text-center mb-16">
              <span className="text-primary font-semibold tracking-wider uppercase text-sm">The switch</span>
              <h2 className="text-3xl md:text-5xl font-bold mt-3 mb-6">Why Salons Switch To Nearz.</h2>
              <p className="text-xl text-background/70 max-w-3xl mx-auto">
                Traditional salon software was built to manage transactions. Nearz was built to grow your business.
              </p>
            </div>

            <div className="bg-background rounded-3xl p-1 shadow-2xl overflow-hidden">
              <div className="grid md:grid-cols-2 text-foreground">
                <div className="p-8 md:p-12 bg-muted/30">
                  <h3 className="text-2xl font-bold mb-8 text-muted-foreground">Traditional Software</h3>
                  <ul className="space-y-6">
                    {[
                      "Focus on billing",
                      "Stores customer data",
                      "Manual marketing",
                      "Reports only",
                      "Operations software"
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-muted-foreground line-through opacity-70">
                        <div className="w-2 h-2 rounded-full bg-muted-foreground shrink-0"></div>
                        <span className="text-lg">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="p-8 md:p-12 bg-white relative">
                  <div className="absolute inset-0 bg-primary/5 pointer-events-none"></div>
                  <h3 className="text-2xl font-bold mb-8 text-primary flex items-center gap-2">
                    <img src={logoImg} alt="" className="w-6 h-6 rounded-sm" />
                    Nearz for Business
                  </h3>
                  <ul className="space-y-6 relative z-10">
                    {[
                      "Focus on revenue growth",
                      "Uses customer data actively",
                      "Automated customer engagement",
                      "Actionable insights",
                      "A complete growth platform"
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-3 font-bold text-foreground">
                        <CheckCircle2 className="w-6 h-6 text-primary shrink-0" />
                        <span className="text-lg">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 11. Final CTA */}
        <section className="py-24 bg-primary relative overflow-hidden">
          {/* Decorative background elements */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/10 rounded-full blur-[100px] translate-x-1/3 -translate-y-1/3"></div>
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-black/10 rounded-full blur-[100px] -translate-x-1/3 translate-y-1/3"></div>
          
          <div className="container mx-auto px-4 max-w-6xl relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="text-white">
                <span className="font-bold tracking-wider uppercase text-sm text-white/80">Free offer</span>
                <h2 className="text-4xl md:text-5xl font-extrabold mt-3 mb-6 leading-tight">Let's Grow Your Repeat Business.</h2>
                <p className="text-xl text-white/90 mb-10 leading-relaxed">
                  Book a Free Salon Growth Consultation — not just a product demo. We'll review your current setup and show you exactly where revenue is being left on the table.
                </p>
                
                <div className="flex flex-wrap gap-6 mb-12">
                  <a href="#" className="flex items-center gap-2 text-white hover:text-white/80 font-semibold transition-colors">
                    <MessageCircle className="w-5 h-5" /> WhatsApp us
                  </a>
                  <a href="tel:+911234567890" className="flex items-center gap-2 text-white hover:text-white/80 font-semibold transition-colors">
                    <Phone className="w-5 h-5" /> Call directly
                  </a>
                  <a href="mailto:hello@nearz.business" className="flex items-center gap-2 text-white hover:text-white/80 font-semibold transition-colors">
                    <Mail className="w-5 h-5" /> Email
                  </a>
                </div>
              </div>

              <div className="bg-white rounded-3xl p-8 shadow-2xl">
                <h3 className="text-2xl font-bold text-foreground mb-6">What's included:</h3>
                <ul className="space-y-6 mb-8">
                  {[
                    { title: "CRM Audit", desc: "We review your current customer data and retention gaps." },
                    { title: "Retention Review", desc: "Identify how many customers you're losing — and why." },
                    { title: "Marketing Suggestions", desc: "Personalized recommendations for your salon." },
                    { title: "Product Walkthrough", desc: "See Nearz in action with your real use case." }
                  ].map((item, i) => (
                    <li key={i} className="flex gap-4">
                      <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0 mt-0.5">
                        <CheckCircle2 className="w-5 h-5" />
                      </div>
                      <div>
                        <strong className="block text-foreground mb-1">{item.title}</strong>
                        <span className="text-muted-foreground">{item.desc}</span>
                      </div>
                    </li>
                  ))}
                </ul>
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground text-lg h-14 rounded-xl shadow-lg shadow-primary/20 transition-transform hover:-translate-y-1">
                  Book my consultation
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* 12. Footer */}
      <footer className="bg-background py-16 border-t border-border">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8 mb-12">
            <div className="flex items-center gap-3">
              <img src={logoImg} alt="Nearz Logo" className="w-8 h-8 rounded" />
              <span className="font-bold text-xl tracking-tight">Nearz</span>
            </div>
            
            <nav className="flex flex-wrap justify-center gap-8">
              <a href="#problem" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">The Problem</a>
              <a href="#growth-engine" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">Growth Engine</a>
              <a href="#features" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">Features</a>
              <a href="#why-nearz" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">Why Nearz</a>
            </nav>
            
            <div className="flex flex-col items-center md:items-end gap-2 text-sm text-muted-foreground">
              <a href="mailto:hello@nearz.business" className="hover:text-primary transition-colors">hello@nearz.business</a>
              <a href="tel:+911234567890" className="hover:text-primary transition-colors">+91 1234567890</a>
            </div>
          </div>
          
          <div className="border-t border-border/50 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground/60">
            <div>&copy; {new Date().getFullYear()} Nearz for Business. All rights reserved.</div>
          </div>
        </div>
      </footer>
    </div>
  );
}
