
import React from 'react';
import SplineViewer from '@/components/SplineViewer';
import PageLayout from '@/components/PageLayout';
import { ArrowRight, Check, ChevronRight, ExternalLink, Mail, MessageSquare, SendHorizontal, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <PageLayout className="overflow-x-hidden">
      {/* Hero Section with 3D model */}
      <section className="relative min-h-[85vh] flex items-center mb-16">
        <div className="max-w-[600px] ml-[10%] z-10 relative animate-fade-zoom-in opacity-0" style={{ animationFillMode: "forwards" }}>
          <div className="bg-black/30 backdrop-blur-sm border border-gray-800 rounded-full px-4 py-2 inline-flex items-center space-x-2 mb-6">
            <span className="bg-green-500 w-2 h-2 rounded-full"></span>
            <span className="text-sm">Available for all frameworks</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            The email API for<br />developers
          </h1>
          
          <p className="text-xl text-gray-400 mb-8 max-w-lg">
            Deliver more emails to the inbox. DEVMAILS provides reliable email delivery at scale, built for developers.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <Link to="/getstarted">
              <Button className="bg-white text-black hover:bg-gray-200 px-8 py-6 rounded-full text-base">
                Start sending for free
              </Button>
            </Link>
            <Link to="/docs">
              <Button variant="outline" className="border-gray-800 hover:bg-black/30 px-5 py-6 rounded-full text-base">
                View documentation <ArrowRight className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
        <SplineViewer url="https://prod.spline.design/ddIki0TszSWcJFtp/scene.splinecode" />
      </section>
      
      {/* Logos Section */}
      <section className="py-16 border-t border-b border-gray-800">
        <div className="container mx-auto px-4">
          <p className="text-center text-gray-500 mb-10">TRUSTED BY ENGINEERING TEAMS WORLDWIDE</p>
          <div className="flex flex-wrap justify-center items-center gap-16">
            {['Company', 'Brand', 'Enterprise', 'Startup', 'Tech'].map((name, i) => (
              <div key={i} className="text-gray-400 text-xl font-bold uppercase">{name}</div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Features Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center">Everything you need<br />to reach the inbox</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<SendHorizontal size={24} />}
              title="Reliable delivery"
              description="Send emails that reach the inbox with our robust email infrastructure."
            />
            <FeatureCard 
              icon={<Mail size={24} />}
              title="Email API"
              description="Easy-to-use API designed specifically for developers."
            />
            <FeatureCard 
              icon={<MessageSquare size={24} />}
              title="HTML and Markdown"
              description="Compose emails using HTML or our simplified Markdown format."
            />
            <FeatureCard 
              icon={<Users size={24} />}
              title="Team collaboration"
              description="Multiple team members can view and manage email delivery."
            />
            <FeatureCard 
              icon={<Check size={24} />}
              title="Email verification"
              description="Verify email addresses before sending to reduce bounce rates."
            />
            <FeatureCard 
              icon={<ArrowRight size={24} />}
              title="Event callbacks"
              description="Get notified of email events via webhooks in real-time."
            />
          </div>
        </div>
      </section>
      
      {/* API Code Example */}
      <section className="py-20 bg-black/20 backdrop-blur-md">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-5">Start sending emails<br />with just a few lines of code</h2>
              <p className="text-gray-400 mb-6">Integrate in minutes with our simple API or use our official libraries.</p>
              <Link to="/docs">
                <Button variant="outline" className="group border-gray-800 hover:bg-black/30">
                  Read documentation <ExternalLink className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
                </Button>
              </Link>
            </div>
            <div className="md:w-1/2">
              <div className="bg-black border border-gray-800 rounded-xl p-5 relative">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="text-gray-500 text-sm">npm install @devmails/node</div>
                </div>
                <pre className="text-sm overflow-x-auto">
                  <code className="language-javascript">
                    <span className="text-blue-400">import</span> <span className="text-green-400">{'{ DevMails }'}</span> <span className="text-blue-400">from</span> <span className="text-yellow-300">'@devmails/node'</span>;
{`
const devmails = new DevMails({
  apiKey: process.env.DEVMAILS_API_KEY,
});

await devmails.emails.send({
  from: 'support@yourapp.com',
  to: 'user@example.com',
  subject: 'Getting started with DEVMAILS',
  html: '<h1>Welcome!</h1><p>Thanks for trying our service.</p>',
});`}
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center">Loved by developers</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="bg-black/10 backdrop-blur-sm border border-gray-800 rounded-xl p-6">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-gray-700 mr-3"></div>
                  <div>
                    <h4 className="font-medium">Developer {i}</h4>
                    <p className="text-gray-500 text-sm">@dev{i}</p>
                  </div>
                </div>
                <p className="text-gray-300">
                  "DEVMAILS made our email implementation so much easier. The API is clean and simple, 
                  and the delivery rates are significantly better than our previous provider."
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-black/40 backdrop-blur-md border-t border-gray-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to get started?</h2>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Join thousands of developers delivering emails that get opened.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/getstarted">
              <Button className="bg-white text-black hover:bg-gray-200 px-8 py-6 rounded-full text-base">
                Start sending for free <ChevronRight className="ml-1" size={16} />
              </Button>
            </Link>
            <Link to="/subscription">
              <Button variant="outline" className="border-gray-800 hover:bg-black/30 px-5 py-6 rounded-full text-base">
                View pricing <ChevronRight className="ml-1" size={16} />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

// Feature Card Component
const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="bg-black/10 backdrop-blur-sm border border-gray-800 rounded-xl p-7 transition-all hover:border-gray-600 hover:-translate-y-1">
      <div className="bg-black/60 p-3 rounded-lg inline-block mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-medium mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
};

export default Index;
