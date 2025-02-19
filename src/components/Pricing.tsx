
import { Check } from 'lucide-react';

const Pricing = () => {
  return (
    <section id="pricing" className="py-24 bg-neutral-50">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16 animate-fadeIn">
          <h2 className="text-4xl font-playfair font-semibold text-neutral-900 mb-4">
            Simple, transparent pricing
          </h2>
          <p className="text-neutral-600">
            Choose the perfect plan for your business needs
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <PricingCard
            title="Starter"
            price="29"
            features={[
              "Up to 5 team members",
              "Basic analytics",
              "24/7 support",
              "1GB storage"
            ]}
            isPopular={false}
          />
          <PricingCard
            title="Professional"
            price="99"
            features={[
              "Up to 20 team members",
              "Advanced analytics",
              "Priority support",
              "10GB storage",
              "Custom integrations"
            ]}
            isPopular={true}
          />
          <PricingCard
            title="Enterprise"
            price="299"
            features={[
              "Unlimited team members",
              "Advanced analytics",
              "24/7 priority support",
              "Unlimited storage",
              "Custom integrations",
              "Dedicated account manager"
            ]}
            isPopular={false}
          />
        </div>
      </div>
    </section>
  );
};

const PricingCard = ({ title, price, features, isPopular }: { title: string; price: string; features: string[]; isPopular: boolean }) => (
  <div className={`p-8 rounded-2xl ${isPopular ? 'bg-neutral-900 text-white' : 'bg-white'} ${isPopular ? 'shadow-xl' : 'shadow-sm'} relative animate-fadeIn`}>
    {isPopular && (
      <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-neutral-800 text-white text-sm rounded-full">
        Most Popular
      </div>
    )}
    <div className="mb-8">
      <h3 className={`text-xl font-semibold mb-2 ${isPopular ? 'text-white' : 'text-neutral-900'}`}>{title}</h3>
      <div className="flex items-baseline">
        <span className="text-4xl font-bold">${price}</span>
        <span className={`ml-2 ${isPopular ? 'text-neutral-400' : 'text-neutral-600'}`}>/month</span>
      </div>
    </div>
    <ul className="space-y-4 mb-8">
      {features.map((feature, index) => (
        <li key={index} className="flex items-center">
          <Check className={`w-5 h-5 mr-3 ${isPopular ? 'text-neutral-400' : 'text-neutral-900'}`} />
          <span className={isPopular ? 'text-neutral-200' : 'text-neutral-600'}>{feature}</span>
        </li>
      ))}
    </ul>
    <button 
      className={`w-full py-3 rounded-full transition-colors ${
        isPopular 
          ? 'bg-white text-neutral-900 hover:bg-neutral-100' 
          : 'bg-neutral-900 text-white hover:bg-neutral-800'
      }`}
    >
      Get Started
    </button>
  </div>
);

export default Pricing;
