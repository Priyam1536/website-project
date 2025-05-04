
import React, { useState } from 'react';
import PageLayout from '@/components/PageLayout';
import { Book, FileCode, FileText, HelpCircle } from 'lucide-react';

const DocsPage = () => {
  const [activeSection, setActiveSection] = useState("getting-started");
  const [activeSubSection, setActiveSubSection] = useState("introduction");

  const sections = [
    {
      id: "getting-started",
      title: "Getting Started",
      icon: <Book className="h-5 w-5" />,
      subsections: [
        { id: "introduction", title: "Introduction" },
        { id: "quick-start", title: "Quick Start Guide" },
        { id: "installation", title: "Installation & Setup" }
      ]
    },
    {
      id: "api-docs",
      title: "API Documentation",
      icon: <FileCode className="h-5 w-5" />,
      subsections: [
        { id: "authentication", title: "Authentication" },
        { id: "endpoints", title: "Endpoints & Methods" },
        { id: "formats", title: "Request & Response Formats" },
        { id: "errors", title: "Error Handling" }
      ]
    },
    {
      id: "best-practices",
      title: "Email Best Practices",
      icon: <FileText className="h-5 w-5" />,
      subsections: [
        { id: "deliverability", title: "Deliverability Tips" },
        { id: "authentication-setup", title: "SPF, DKIM, and DMARC Setup" },
        { id: "rate-limits", title: "Rate Limits & Sending Guidelines" }
      ]
    },
    {
      id: "tutorials",
      title: "Tutorials & Examples",
      icon: <FileText className="h-5 w-5" />,
      subsections: [
        { id: "code-samples", title: "Code Samples" },
        { id: "integration-guides", title: "Integration Guides" },
        { id: "use-cases", title: "Use Cases" }
      ]
    },
    {
      id: "troubleshooting",
      title: "Troubleshooting & FAQs",
      icon: <HelpCircle className="h-5 w-5" />,
      subsections: [
        { id: "common-issues", title: "Common Issues" },
        { id: "debugging", title: "Debugging Tools" },
        { id: "support", title: "Support Contact" }
      ]
    },
    {
      id: "changelog",
      title: "Updates & Changelog",
      icon: <FileText className="h-5 w-5" />,
      subsections: [
        { id: "version-history", title: "Version History" },
        { id: "new-features", title: "New Features" },
        { id: "deprecations", title: "Deprecations" }
      ]
    }
  ];

  // Content for demonstration purposes
  const getContent = () => {
    switch (activeSection) {
      case "getting-started":
        switch (activeSubSection) {
          case "introduction":
            return (
              <>
                <h3 className="text-2xl font-semibold mb-4">Introduction to DEVMAILS</h3>
                <p className="text-gray-300 mb-6">
                  DEVMAILS is a powerful email delivery platform designed specifically for developers. 
                  Our API-first approach makes it easy to integrate reliable email sending capabilities 
                  into your applications, with features designed to maximize deliverability and provide 
                  detailed analytics.
                </p>
                <h4 className="text-xl font-semibold mb-2">Key Benefits</h4>
                <ul className="list-disc list-inside space-y-2 text-gray-300 mb-6">
                  <li>High deliverability rates with advanced inbox placement technology</li>
                  <li>Comprehensive API with client libraries for all major programming languages</li>
                  <li>Real-time analytics and event tracking</li>
                  <li>Scalable infrastructure that grows with your needs</li>
                  <li>Compliance with global email regulations</li>
                </ul>
                <p className="text-gray-300">
                  This documentation will help you get started with DEVMAILS and explore its full capabilities.
                </p>
              </>
            );
          case "quick-start":
            return (
              <>
                <h3 className="text-2xl font-semibold mb-4">Quick Start Guide</h3>
                <p className="text-gray-300 mb-6">
                  Get up and running with DEVMAILS in minutes by following these simple steps:
                </p>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="text-xl font-semibold mb-2">1. Create an account</h4>
                    <p className="text-gray-300">
                      Sign up for a DEVMAILS account at <span className="text-purple-400">dashboard.devmails.com</span>.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="text-xl font-semibold mb-2">2. Generate API keys</h4>
                    <p className="text-gray-300">
                      Navigate to the API Keys section in your dashboard and generate a new key pair.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="text-xl font-semibold mb-2">3. Install the SDK</h4>
                    <div className="bg-gray-900 rounded-md p-4 mb-2 overflow-x-auto">
                      <code className="text-green-400">npm install devmails-sdk --save</code>
                    </div>
                    <p className="text-gray-300">
                      or with yarn:
                    </p>
                    <div className="bg-gray-900 rounded-md p-4 mb-2 overflow-x-auto">
                      <code className="text-green-400">yarn add devmails-sdk</code>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-xl font-semibold mb-2">4. Send your first email</h4>
                    <div className="bg-gray-900 rounded-md p-4 overflow-x-auto">
                      <pre className="text-purple-400">
{`const DevMails = require('devmails-sdk');
const client = new DevMails('your-api-key');

async function sendEmail() {
  try {
    const result = await client.emails.send({
      from: 'you@yourdomain.com',
      to: 'recipient@example.com',
      subject: 'Hello from DEVMAILS',
      text: 'This is your first email sent with DEVMAILS!',
      html: '<p>This is your first email sent with <strong>DEVMAILS</strong>!</p>'
    });
    
    console.log('Email sent! ID:', result.id);
  } catch (error) {
    console.error('Error sending email:', error);
  }
}`}
                      </pre>
                    </div>
                  </div>
                </div>
              </>
            );
          case "installation":
            return (
              <>
                <h3 className="text-2xl font-semibold mb-4">Installation & Setup</h3>
                <p className="text-gray-300 mb-6">
                  Complete step-by-step instructions for setting up DEVMAILS in your development environment.
                </p>
                
                <div className="space-y-8">
                  <div>
                    <h4 className="text-xl font-semibold mb-4">Available SDKs</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-black/40 backdrop-blur-sm border border-gray-800 rounded-xl p-4">
                        <h5 className="font-semibold mb-2">JavaScript / Node.js</h5>
                        <div className="bg-gray-900 rounded-md p-3 mb-2 overflow-x-auto">
                          <code className="text-green-400">npm install devmails-sdk --save</code>
                        </div>
                      </div>
                      <div className="bg-black/40 backdrop-blur-sm border border-gray-800 rounded-xl p-4">
                        <h5 className="font-semibold mb-2">Python</h5>
                        <div className="bg-gray-900 rounded-md p-3 mb-2 overflow-x-auto">
                          <code className="text-green-400">pip install devmails</code>
                        </div>
                      </div>
                      <div className="bg-black/40 backdrop-blur-sm border border-gray-800 rounded-xl p-4">
                        <h5 className="font-semibold mb-2">Ruby</h5>
                        <div className="bg-gray-900 rounded-md p-3 mb-2 overflow-x-auto">
                          <code className="text-green-400">gem install devmails</code>
                        </div>
                      </div>
                      <div className="bg-black/40 backdrop-blur-sm border border-gray-800 rounded-xl p-4">
                        <h5 className="font-semibold mb-2">PHP</h5>
                        <div className="bg-gray-900 rounded-md p-3 mb-2 overflow-x-auto">
                          <code className="text-green-400">composer require devmails/devmails-php</code>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-xl font-semibold mb-4">Configuration</h4>
                    <p className="text-gray-300 mb-4">
                      After installing the SDK, you need to configure it with your API keys:
                    </p>
                    <div className="bg-gray-900 rounded-md p-4 overflow-x-auto">
                      <pre className="text-purple-400">
{`// JavaScript
const DevMails = require('devmails-sdk');
const client = new DevMails({
  apiKey: 'your-api-key',
  environment: 'production' // or 'test' for sandbox mode
});`}
                      </pre>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-xl font-semibold mb-4">Verifying Your Domain</h4>
                    <p className="text-gray-300 mb-4">
                      For best deliverability, you should verify your sending domain:
                    </p>
                    <ol className="list-decimal list-inside space-y-2 text-gray-300">
                      <li>Go to the Domains section in your DEVMAILS dashboard</li>
                      <li>Add your domain and follow the verification steps</li>
                      <li>Add the provided DNS records to your domain's DNS settings</li>
                      <li>Wait for verification to complete (usually within 24-48 hours)</li>
                    </ol>
                  </div>
                </div>
              </>
            );
          default:
            return <p>Select a topic</p>;
        }
      
      // You would add other sections' content here
      default:
        return (
          <div className="text-center p-10">
            <p className="text-gray-400">Please select a section from the sidebar to view documentation.</p>
          </div>
        );
    }
  };

  return (
    <PageLayout>
      <div className="w-full flex flex-col md:flex-row animate-fade-in">
        {/* Sidebar */}
        <div className="md:w-64 shrink-0 bg-black/40 backdrop-blur-sm border-r border-gray-800 h-auto md:h-[calc(100vh-5rem)] overflow-y-auto">
          <div className="p-4 md:sticky md:top-0">
            <h2 className="text-xl font-semibold mb-4">Documentation</h2>
            <div className="space-y-4">
              {sections.map((section) => (
                <div key={section.id} className="space-y-2">
                  <button 
                    onClick={() => {
                      setActiveSection(section.id);
                      setActiveSubSection(section.subsections[0].id);
                    }}
                    className={`flex items-center gap-2 w-full text-left px-2 py-1 rounded-md ${
                      activeSection === section.id ? 'bg-purple-900/30 text-purple-400' : 'hover:bg-gray-800'
                    }`}
                  >
                    {section.icon}
                    <span>{section.title}</span>
                  </button>
                  
                  {activeSection === section.id && (
                    <div className="ml-6 space-y-1 border-l border-gray-700 pl-2">
                      {section.subsections.map((subsection) => (
                        <button 
                          key={subsection.id}
                          onClick={() => setActiveSubSection(subsection.id)}
                          className={`w-full text-left text-sm px-2 py-1 rounded-md ${
                            activeSubSection === subsection.id ? 'text-purple-400' : 'text-gray-400 hover:text-gray-200'
                          }`}
                        >
                          {subsection.title}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Content */}
        <div className="flex-1 p-6 md:p-10 overflow-auto">
          <div className="max-w-4xl mx-auto bg-black/40 backdrop-blur-sm border border-gray-800 rounded-xl p-8">
            {getContent()}
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default DocsPage;
