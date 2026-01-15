import { BUNDLES } from '@/lib/mock-data';
import { BundleCard } from '@/components/BundleCard';
import { ArrowRight, Leaf, Smartphone, Sprout } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-primary/5 to-transparent pt-32 pb-20 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent-foreground text-sm font-medium mb-8">
            <Sprout size={16} /> Transforming Mexican Agriculture
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-foreground mb-6">
            Technology for <span className="text-primary">Every Harvest</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            From simple SMS alerts to advanced drone analytics. Pixca connects farmers of all sizes to the data they need to grow more with less.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/dashboard"
              className="px-8 py-4 rounded-full bg-primary text-white font-bold text-lg shadow-lg hover:bg-primary/90 transition-all flex items-center gap-2"
            >
              Start for Free <ArrowRight size={20} />
            </Link>
            <Link
              href="#plans"
              className="px-8 py-4 rounded-full bg-white border border-border text-foreground font-bold text-lg hover:bg-muted/50 transition-all"
            >
              View Bundles
            </Link>
          </div>
        </div>

        {/* Background Decorative Elements */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-secondary/10 rounded-full blur-3xl -z-10" />
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">How Pixca Works</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We bridge the gap between traditional farming and modern technology using tools you already have.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Smartphone className="w-8 h-8 text-primary" />,
                title: "SMS & WhatsApp",
                desc: "Receive crop alerts and weekly reports directly on your phone. No internet required for basic plans."
              },
              {
                icon: <Leaf className="w-8 h-8 text-primary" />,
                title: "Smart Sensors",
                desc: "Low-cost sensors monitor soil moisture, temperature, and pH levels 24/7."
              },
              {
                icon: <Sprout className="w-8 h-8 text-primary" />,
                title: "Drone Services",
                desc: "Request on-demand drone flyovers to analyze crop health and detect pests early."
              }
            ].map((feature, i) => (
              <div key={i} className="p-8 rounded-2xl bg-muted/30 border border-border/50 hover:border-primary/20 transition-all">
                <div className="mb-4 bg-white w-16 h-16 rounded-xl flex items-center justify-center shadow-sm">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bundles Section */}
      <section id="plans" className="py-24 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Choose Your Growth Plan</h2>
            <p className="text-muted-foreground">Accessible pricing for every scale of production.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {BUNDLES.map((bundle) => (
              <BundleCard key={bundle.id} bundle={bundle} isPopular={bundle.id === 'pro'} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to optimize your yield?</h2>
          <p className="text-primary-foreground/80 mb-8 text-lg max-w-2xl mx-auto">
            Join thousands of farmers in Mexico using Pixca to make better decisions.
          </p>
          <button className="bg-white text-primary px-8 py-3 rounded-full font-bold text-lg hover:bg-white/90 transition-colors shadow-lg">
            Join via WhatsApp
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center opacity-80">
          <div className="flex items-center gap-2 font-bold text-xl mb-4 md:mb-0">
            <Leaf size={20} /> Pixca
          </div>
          <div className="text-sm">
            © 2024 Pixca Inc. Built for Mexican Agriculture.
          </div>
        </div>
      </footer>
    </div>
  );
}
