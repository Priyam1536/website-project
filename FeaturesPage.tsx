
import React from 'react';
import PageLayout from '@/components/PageLayout';
import { 
  Mail, 
  MailPlus, 
  Code, 
  Activity, 
  Shield, 
  Zap, 
  Gavel, 
  ShieldOff, 
  LayoutList, 
  Webhook, 
  Languages, 
  Server, 
  Inbox, 
  LifeBuoy 
} from 'lucide-react';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, icon }) => {
  return (
    <div className="bg-black/40 backdrop-blur-sm border border-gray-800 rounded-xl p-6 hover:border-purple-700 transition-colors">
      <div className="h-12 w-12 rounded-full bg-purple-900/30 flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
};

const FeaturesPage = () => {
  const coreFeatures = [
    {
      title: "Transactional Email Delivery",
      description: "Ensure reliable delivery of automated emails like password resets, order confirmations, and notifications.",
      icon: <Mail className="text-purple-500" />
    },
    {
      title: "Marketing Email Campaigns",
      description: "Provide tools for bulk email sending, audience segmentation, and A/B testing.",
      icon: <MailPlus className="text-purple-500" />
    },
    {
      title: "SMTP Relay & API Integration",
      description: "Allow developers to send emails programmatically with easy-to-use APIs.",
      icon: <Code className="text-purple-500" />
    },
    {
      title: "Email Tracking & Analytics",
      description: "Offer insights into open rates, click-through rates, and bounce rates.",
      icon: <Activity className="text-purple-500" />
    }
  ];

  const securityFeatures = [
    {
      title: "SPF, DKIM, and DMARC Authentication",
      description: "Improve email deliverability and prevent spoofing with robust authentication protocols.",
      icon: <Zap className="text-purple-500" />
    },
    {
      title: "GDPR & CAN-SPAM Compliance",
      description: "Ensure adherence to global email regulations with built-in compliance tools.",
      icon: <Gavel className="text-purple-500" />
    },
    {
      title: "Rate Limiting & Anti-Spam Measures",
      description: "Prevent abuse and ensure fair usage with intelligent rate limiting.",
      icon: <ShieldOff className="text-purple-500" />
    }
  ];

  const uxFeatures = [
    {
      title: "Customizable Email Templates",
      description: "Provide pre-built designs for easy customization and consistent branding.",
      icon: <LayoutList className="text-purple-500" />
    },
    {
      title: "Webhook Support",
      description: "Enable real-time event tracking for email interactions with webhook integrations.",
      icon: <Webhook className="text-purple-500" />
    },
    {
      title: "Multi-Language Support",
      description: "Expand accessibility for global users with comprehensive language options.",
      icon: <Languages className="text-purple-500" />
    }
  ];

  const additionalFeatures = [
    {
      title: "Dedicated IPs for Email Sending",
      description: "Improve sender reputation and deliverability with dedicated IP addresses.",
      icon: <Server className="text-purple-500" />
    },
    {
      title: "Inbox Placement Optimization",
      description: "Help users avoid spam filters and reach inboxes effectively.",
      icon: <Inbox className="text-purple-500" />
    },
    {
      title: "24/7 Customer Support & Documentation",
      description: "Offer detailed guides and real-time assistance whenever needed.",
      icon: <LifeBuoy className="text-purple-500" />
    }
  ];

  return (
    <PageLayout>
      <div className="w-full max-w-6xl mx-auto px-4 py-10 animate-fade-in">
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Features</h1>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            DEVMAILS provides powerful tools and services to help developers deliver emails reliably and efficiently.
          </p>
        </section>

        <section className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="h-10 w-10 rounded-full bg-purple-900/30 flex items-center justify-center">
              <Mail className="text-purple-500 h-5 w-5" />
            </div>
            <h2 className="text-2xl md:text-3xl font-semibold">Core Email Services</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreFeatures.map((feature) => (
              <FeatureCard 
                key={feature.title} 
                title={feature.title} 
                description={feature.description} 
                icon={feature.icon} 
              />
            ))}
          </div>
        </section>

        <section className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="h-10 w-10 rounded-full bg-purple-900/30 flex items-center justify-center">
              <Shield className="text-purple-500 h-5 w-5" />
            </div>
            <h2 className="text-2xl md:text-3xl font-semibold">Security & Compliance</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {securityFeatures.map((feature) => (
              <FeatureCard 
                key={feature.title} 
                title={feature.title} 
                description={feature.description} 
                icon={feature.icon} 
              />
            ))}
          </div>
        </section>

        <section className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="h-10 w-10 rounded-full bg-purple-900/30 flex items-center justify-center">
              <LayoutList className="text-purple-500 h-5 w-5" />
            </div>
            <h2 className="text-2xl md:text-3xl font-semibold">User Experience Enhancements</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {uxFeatures.map((feature) => (
              <FeatureCard 
                key={feature.title} 
                title={feature.title} 
                description={feature.description} 
                icon={feature.icon} 
              />
            ))}
          </div>
        </section>

        <section className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="h-10 w-10 rounded-full bg-purple-900/30 flex items-center justify-center">
              <Server className="text-purple-500 h-5 w-5" />
            </div>
            <h2 className="text-2xl md:text-3xl font-semibold">Additional Services</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {additionalFeatures.map((feature) => (
              <FeatureCard 
                key={feature.title} 
                title={feature.title} 
                description={feature.description} 
                icon={feature.icon} 
              />
            ))}
          </div>
        </section>
      </div>
    </PageLayout>
  );
};

export default FeaturesPage;
