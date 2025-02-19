
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-neutral-50 to-white">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px)] bg-[size:3rem_1px]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:1px_3rem]"></div>
      </div>
      
      <div className="container mx-auto px-6 pt-32 pb-24 relative z-10">
        <div className="text-center max-w-4xl mx-auto space-y-8 animate-fadeIn">
          <div className="inline-block px-4 py-1.5 rounded-full bg-neutral-900 text-white text-sm font-medium mb-6">
            Launching Soon
          </div>
          
          <h1 className="text-5xl md:text-7xl font-playfair font-semibold text-neutral-900 leading-tight">
            Transform Your Workflow with Modern Solutions
          </h1>
          
          <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
            Streamline your business operations with our intelligent platform. Experience the future of productivity today.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            <button className="w-full sm:w-auto px-8 py-4 rounded-full bg-neutral-900 text-white hover:bg-neutral-800 transition-colors flex items-center justify-center gap-2 group">
              Get Started Now
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="w-full sm:w-auto px-8 py-4 rounded-full border border-neutral-200 hover:border-neutral-300 transition-colors">
              Watch Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
