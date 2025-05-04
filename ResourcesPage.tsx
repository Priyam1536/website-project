
import React from 'react';
import PageLayout from '@/components/PageLayout';
import { 
  FileText, 
  HelpCircle, 
  CheckCircle, 
  Users, 
  FileVideo, 
  FileCode
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

interface ResourceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  linkText: string;
  linkUrl: string;
}

const ResourceCard: React.FC<ResourceCardProps> = ({ title, description, icon, linkText, linkUrl }) => {
  return (
    <div className="bg-black/40 backdrop-blur-sm border border-gray-800 rounded-xl p-6 hover:border-purple-700 transition-colors">
      <div className="flex items-center mb-4">
        <div className="h-10 w-10 rounded-full bg-purple-900/30 flex items-center justify-center mr-4">
          {icon}
        </div>
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>
      <p className="text-gray-400 mb-4">{description}</p>
      <Link to={linkUrl}>
        <Button variant="ghost" className="text-purple-400 hover:text-purple-300 p-0 hover:bg-transparent">
          {linkText} &gt;
        </Button>
      </Link>
    </div>
  );
};

const ResourcesPage = () => {
  const resources = [
    {
      title: "Documentation & Guides",
      description: "Step-by-step tutorials on integrating DEVMAILS with different platforms and frameworks.",
      icon: <FileText className="text-purple-500" />,
      linkText: "Browse documentation",
      linkUrl: "/docs"
    },
    {
      title: "FAQs",
      description: "Answers to common questions about email delivery, API usage, and troubleshooting.",
      icon: <HelpCircle className="text-purple-500" />,
      linkText: "Read FAQs",
      linkUrl: "/docs#faqs"
    },
    {
      title: "Best Practices",
      description: "Tips on improving email deliverability, avoiding spam filters, and optimizing campaigns.",
      icon: <CheckCircle className="text-purple-500" />,
      linkText: "Learn best practices",
      linkUrl: "/docs#best-practices"
    },
    {
      title: "Case Studies & Success Stories",
      description: "Showcase how businesses successfully use DEVMAILS for their email needs.",
      icon: <Users className="text-purple-500" />,
      linkText: "Read success stories",
      linkUrl: "/docs#case-studies"
    },
    {
      title: "Video Tutorials",
      description: "Short explainer videos on setting up and using the DEVMAILS service.",
      icon: <FileVideo className="text-purple-500" />,
      linkText: "Watch tutorials",
      linkUrl: "/docs#video-tutorials"
    },
    {
      title: "API Reference",
      description: "Detailed technical documentation for developers implementing DEVMAILS APIs.",
      icon: <FileCode className="text-purple-500" />,
      linkText: "Explore API docs",
      linkUrl: "/docs#api-reference"
    },
    {
      title: "Community & Support",
      description: "Access to forums, customer support, and developer communities.",
      icon: <Users className="text-purple-500" />,
      linkText: "Join our community",
      linkUrl: "/docs#community"
    }
  ];

  return (
    <PageLayout>
      <div className="w-full max-w-6xl mx-auto px-4 py-10 animate-fade-in">
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Resources</h1>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Everything you need to get started with DEVMAILS and make the most of our platform.
          </p>
        </section>

        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {resources.map((resource) => (
              <ResourceCard 
                key={resource.title} 
                title={resource.title} 
                description={resource.description} 
                icon={resource.icon} 
                linkText={resource.linkText}
                linkUrl={resource.linkUrl}
              />
            ))}
          </div>
        </section>

        <section className="bg-black/40 backdrop-blur-sm border border-gray-800 rounded-xl p-8 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">Need Additional Help?</h2>
          <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
            Our support team is available 24/7 to assist with any questions or issues you may have.
          </p>
          <Button className="rounded-full bg-purple-600 text-white hover:bg-purple-700 px-8 py-6">
            Contact Support
          </Button>
        </section>
      </div>
    </PageLayout>
  );
};

export default ResourcesPage;
