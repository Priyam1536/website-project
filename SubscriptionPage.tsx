
import React from 'react';
import PageLayout from '@/components/PageLayout';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

const PricingTier = ({ 
  title, 
  price, 
  description, 
  features, 
  buttonText, 
  popular = false 
}: { 
  title: string; 
  price: string; 
  description: string; 
  features: string[]; 
  buttonText: string;
  popular?: boolean;
}) => {
  return (
    <div className={`bg-black/40 backdrop-blur-sm border ${popular ? 'border-purple-600' : 'border-gray-800'} rounded-xl p-6 relative`}>
      {popular && (
        <div className="absolute -top-3 left-0 right-0 flex justify-center">
          <span className="bg-purple-600 text-white text-xs font-semibold px-4 py-1 rounded-full">
            MOST POPULAR
          </span>
        </div>
      )}
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <div className="mb-4">
        <span className="text-4xl font-bold">{price}</span>
        {price !== 'Free' && <span className="text-gray-400 ml-2">/month</span>}
      </div>
      <p className="text-gray-400 mb-6">{description}</p>
      
      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <div className="mr-3 mt-1">
              <Check className="h-4 w-4 text-green-500" />
            </div>
            <span className="text-sm text-gray-300">{feature}</span>
          </li>
        ))}
      </ul>
      
      <Button 
        className={`w-full py-6 ${
          popular 
            ? 'bg-purple-600 hover:bg-purple-700 text-white' 
            : 'bg-gray-800 hover:bg-gray-700 text-white'
        }`}
      >
        {buttonText}
      </Button>
    </div>
  );
};

const SubscriptionPage = () => {
  const plans = [
    {
      title: "Free",
      price: "Free",
      description: "Perfect for trying out DEVMAILS or personal projects",
      features: [
        "1,000 emails per month",
        "Basic email analytics",
        "Single sender identity",
        "Community support",
        "Standard API access"
      ],
      buttonText: "Get Started",
      popular: false
    },
    {
      title: "Developer",
      price: "₹1500",
      description: "Ideal for small businesses and growing projects",
      features: [
        "25,000 emails per month",
        "Advanced email analytics",
        "Up to 5 sender identities",
        "Priority support",
        "Advanced API access",
        "Dedicated IP address"
      ],
      buttonText: "Subscribe Now",
      popular: true
    },
    {
      title: "Business",
      price: "₹3000",
      description: "For established businesses with high email needs",
      features: [
        "100,000 emails per month",
        "Full email analytics suite",
        "Unlimited sender identities",
        "24/7 priority support",
        "Advanced API access with higher rate limits",
        "Multiple dedicated IP addresses",
        "Custom domain setup assistance"
      ],
      buttonText: "Contact Sales",
      popular: false
    }
  ];

  return (
    <PageLayout>
      <div className="w-full max-w-6xl mx-auto px-4 py-10">
        <section className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Subscription Plans</h1>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Choose the right plan for your email delivery needs, from personal projects to enterprise solutions.
          </p>
        </section>
        
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <div key={index} className="animate-fade-zoom-in opacity-0" style={{ animationDelay: `${300 + index * 200}ms`, animationFillMode: "forwards" }}>
              <PricingTier {...plan} />
            </div>
          ))}
        </section>
        
        <section className="bg-black/40 backdrop-blur-sm border border-gray-800 rounded-xl p-8 mb-16 animate-fade-in">
          <h2 className="text-2xl font-semibold mb-6 text-center">Enterprise Solutions</h2>
          <p className="text-gray-400 mb-8 text-center max-w-3xl mx-auto">
            Need a custom solution? Our enterprise plan offers tailored features, dedicated account management, 
            and customized pricing based on your specific email delivery needs.
          </p>
          <div className="flex justify-center">
            <Button className="bg-gray-800 hover:bg-gray-700 text-white px-8 py-6">
              Contact Enterprise Sales
            </Button>
          </div>
        </section>
        
        <section className="animate-fade-in">
          <h2 className="text-2xl font-semibold mb-6 text-center">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-black/40 backdrop-blur-sm border border-gray-800 rounded-xl p-6">
              <h3 className="text-lg font-semibold mb-2">Can I change plans at any time?</h3>
              <p className="text-gray-400">
                Yes, you can upgrade or downgrade your subscription at any time. Changes take effect at the beginning of the next billing cycle.
              </p>
            </div>
            <div className="bg-black/40 backdrop-blur-sm border border-gray-800 rounded-xl p-6">
              <h3 className="text-lg font-semibold mb-2">What happens if I exceed my monthly email limit?</h3>
              <p className="text-gray-400">
                If you exceed your monthly limit, you'll be charged a small overage fee for each additional email sent, or you can upgrade to the next plan tier.
              </p>
            </div>
            <div className="bg-black/40 backdrop-blur-sm border border-gray-800 rounded-xl p-6">
              <h3 className="text-lg font-semibold mb-2">Do you offer annual billing?</h3>
              <p className="text-gray-400">
                Yes! You can save 20% by switching to annual billing for any paid plan. Contact our sales team for details.
              </p>
            </div>
            <div className="bg-black/40 backdrop-blur-sm border border-gray-800 rounded-xl p-6">
              <h3 className="text-lg font-semibold mb-2">Is there a free trial for paid plans?</h3>
              <p className="text-gray-400">
                Yes, all paid plans come with a 14-day free trial, with no credit card required to start.
              </p>
            </div>
          </div>
        </section>
      </div>
    </PageLayout>
  );
};

export default SubscriptionPage;
