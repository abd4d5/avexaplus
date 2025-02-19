
import { Shield, Zap, BarChart } from 'lucide-react';

const Features = () => {
  return (
    <section id="features" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16 animate-fadeIn">
          <h2 className="text-4xl font-playfair font-semibold text-neutral-900 mb-4">
            Everything you need
          </h2>
          <p className="text-neutral-600">
            Powerful features to help you manage and grow your business efficiently.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <FeatureCard
            icon={<Zap className="w-6 h-6" />}
            title="Lightning Fast"
            description="Experience blazing fast performance with our optimized platform."
          />
          <FeatureCard
            icon={<Shield className="w-6 h-6" />}
            title="Secure by Default"
            description="Enterprise-grade security to keep your data safe and protected."
          />
          <FeatureCard
            icon={<BarChart className="w-6 h-6" />}
            title="Analytics"
            description="Gain valuable insights with our advanced analytics dashboard."
          />
        </div>
      </div>
    </section>
  );
};

const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) => (
  <div className="p-8 rounded-2xl bg-neutral-50 hover:bg-neutral-100 transition-colors group animate-fadeIn">
    <div className="w-12 h-12 rounded-full bg-neutral-900 text-white flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
      {icon}
    </div>
    <h3 className="text-xl font-semibold text-neutral-900 mb-3">{title}</h3>
    <p className="text-neutral-600">{description}</p>
  </div>
);

export default Features;
