
import React from 'react';
import PageLayout from '@/components/PageLayout';
import { Button } from '@/components/ui/button';
import { ArrowRight, Rocket, FileText, Terminal, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const StepCard = ({
  number,
  title,
  description,
  icon,
  link
}: {
  number: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  link: string;
}) => {
  return (
    <div className="bg-black/40 backdrop-blur-sm border border-gray-800 rounded-xl p-6 hover:border-purple-700 transition-colors">
      <div className="flex items-start gap-4">
        <div className="h-8 w-8 rounded-full bg-purple-600 flex items-center justify-center shrink-0">
          <span className="font-semibold text-white">{number}</span>
        </div>
        <div>
          <div className="flex items-center gap-3 mb-3">
            {icon}
            <h3 className="text-xl font-semibold">{title}</h3>
          </div>
          <p className="text-gray-400 mb-4">{description}</p>
          <Link to={link}>
            <Button variant="ghost" className="text-purple-400 hover:text-purple-300 p-0 hover:bg-transparent">
              Learn more <ArrowRight className="h-4 w-4 ml-1" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

const CodeSnippet = () => {
  return (
    <div className="bg-gray-900 rounded-lg p-4">
      <div className="flex items-center justify-between mb-2">
        <div className="flex gap-1.5">
          <div className="h-3 w-3 rounded-full bg-red-500"></div>
          <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
          <div className="h-3 w-3 rounded-full bg-green-500"></div>
        </div>
        <span className="text-xs text-gray-400">example.js</span>
      </div>
      <pre className="text-purple-400 text-sm">
{`const DevMails = require('devmails-sdk');
const client = new DevMails('YOUR_API_KEY');

async function sendWelcomeEmail(user) {
  try {
    const result = await client.emails.send({
      from: 'welcome@yourbrand.com',
      to: user.email,
      subject: 'Welcome to YourBrand!',
      template: 'welcome-template',
      variables: {
        name: user.name,
        activationLink: \`https://yourbrand.com/activate/\${user.activationToken}\`
      }
    });
    
    console.log('Welcome email sent:', result.id);
  } catch (error) {
    console.error('Failed to send welcome email:', error);
  }
}`}
      </pre>
    </div>
  );
};

const GetStartedPage = () => {
  const steps = [
    {
      number: 1,
      title: "Quick Start Guide",
      description: "Get up and running with DEVMAILS in just a few minutes with our simple API.",
      icon: <Rocket className="text-purple-500 h-5 w-5" />,
      link: "/docs#quick-start"
    },
    {
      number: 2,
      title: "Account Setup",
      description: "Configure your account settings, verify your domain, and set up sender identities.",
      icon: <FileText className="text-purple-500 h-5 w-5" />,
      link: "/docs#account-setup"
    },
    {
      number: 3,
      title: "API Integration",
      description: "Integrate our API with your application using our SDKs for various programming languages.",
      icon: <Terminal className="text-purple-500 h-5 w-5" />,
      link: "/docs#api-integration"
    },
    {
      number: 4,
      title: "Best Practices",
      description: "Follow our recommended best practices to maximize email deliverability and engagement.",
      icon: <CheckCircle className="text-purple-500 h-5 w-5" />,
      link: "/docs#best-practices"
    }
  ];

  return (
    <PageLayout>
      <div className="w-full max-w-6xl mx-auto px-4 py-10">
        <section className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Get Started with DEVMAILS</h1>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Send your first email in minutes with our developer-friendly platform.
          </p>
          <div className="mt-8">
            <Link to="/signin">
              <Button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-6 rounded-full">
                Create an Account
              </Button>
            </Link>
          </div>
        </section>
        
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {steps.map((step, index) => (
            <div key={index} className="animate-fade-zoom-in opacity-0" style={{ animationDelay: `${300 + index * 150}ms`, animationFillMode: "forwards" }}>
              <StepCard {...step} />
            </div>
          ))}
        </section>
        
        <section className="mb-16 animate-fade-zoom-in opacity-0" style={{ animationDelay: "800ms", animationFillMode: "forwards" }}>
          <div className="bg-black/40 backdrop-blur-sm border border-gray-800 rounded-xl p-8">
            <h2 className="text-2xl font-semibold mb-6">Example: Sending a Welcome Email</h2>
            <p className="text-gray-400 mb-6">
              Here's how easy it is to send a welcome email using our Node.js SDK:
            </p>
            <CodeSnippet />
          </div>
        </section>
        
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-fade-in">
          <div className="bg-black/40 backdrop-blur-sm border border-gray-800 rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-4">Need Help Getting Started?</h3>
            <p className="text-gray-400 mb-4">
              Our support team is available to help you set up your account and answer any questions.
            </p>
            <Button className="bg-gray-800 hover:bg-gray-700 text-white">
              Contact Support
            </Button>
          </div>
          
          <div className="bg-black/40 backdrop-blur-sm border border-gray-800 rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-4">Ready to Scale?</h3>
            <p className="text-gray-400 mb-4">
              Check out our subscription plans to find the perfect fit for your email needs.
            </p>
            <Link to="/subscription">
              <Button className="bg-gray-800 hover:bg-gray-700 text-white">
                View Pricing Plans
              </Button>
            </Link>
          </div>
        </section>
      </div>
    </PageLayout>
  );
};

export default GetStartedPage;
