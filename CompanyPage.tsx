
import React from 'react';
import PageLayout from '@/components/PageLayout';
import { Star, Users } from 'lucide-react';

const CompanyPage = () => {
  return (
    <PageLayout className="items-center">
      <div className="max-w-4xl w-full px-4 py-10 space-y-12 animate-fade-in">
        <section className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About DEVMAILS</h1>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            DEVMAILS was founded with a simple mission: to make email delivery reliable, 
            scalable, and accessible for developers of all sizes.
          </p>
        </section>

        <section className="space-y-8">
          <div className="bg-black/40 backdrop-blur-sm border border-gray-800 rounded-xl p-8">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">Our Story</h2>
            <p className="text-gray-300">
              Founded in 2025 by Founder Priyam Sharma frustrated with existing email solutions, 
              DEVMAILS has grown from a small startup to a trusted email delivery platform 
              used by thousands of companies worldwide. Our focus remains on providing 
              developers with the tools they need to ensure their emails reach human inboxes, not spam folders.
            </p>
          </div>

          <div className="bg-black/40 backdrop-blur-sm border border-gray-800 rounded-xl p-8">
            <h2 className="text-2xl md:text-3xl font-semibold mb-6">Meet the Founder</h2>
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
              <div className="w-32 h-32 bg-gradient-to-r from-purple-700 to-blue-600 rounded-full flex items-center justify-center">
                <span className="text-3xl font-bold">PS</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Priyam Sharma</h3>
                <p className="text-gray-400 mb-4">CEO & Founder</p>
                <p className="text-gray-300">
                 With Experience in Web Development and Market research. He is great at problem-solving.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-black/40 backdrop-blur-sm border border-gray-800 rounded-xl p-6 text-center">
            <div className="text-4xl font-bold text-purple-500 mb-2">99.9%</div>
            <p className="text-gray-400">Uptime</p>
          </div>
          <div className="bg-black/40 backdrop-blur-sm border border-gray-800 rounded-xl p-6 text-center">
            <div className="text-4xl font-bold text-purple-500 mb-2">150,000+</div>
            <p className="text-gray-400">Emails Delivered Daily</p>
          </div>
          <div className="bg-black/40 backdrop-blur-sm border border-gray-800 rounded-xl p-6 text-center">
            <div className="text-4xl font-bold text-purple-500 mb-2">5,000+</div>
            <p className="text-gray-400">Businesses Served</p>
          </div>
        </section>

        <section className="space-y-8">
          <h2 className="text-2xl md:text-3xl font-semibold">Our Users</h2>
          <div className="flex flex-wrap gap-4 justify-center">
            <div className="bg-black/40 backdrop-blur-sm border border-gray-800 rounded-xl p-6 flex items-center gap-4 w-full md:w-auto">
              <Users size={24} className="text-purple-500" />
              <div>
                <h3 className="font-semibold">Tech Startups</h3>
                <p className="text-sm text-gray-400">40% of our user base</p>
              </div>
            </div>
            <div className="bg-black/40 backdrop-blur-sm border border-gray-800 rounded-xl p-6 flex items-center gap-4 w-full md:w-auto">
              <Users size={24} className="text-purple-500" />
              <div>
                <h3 className="font-semibold">E-commerce</h3>
                <p className="text-sm text-gray-400">30% of our user base</p>
              </div>
            </div>
            <div className="bg-black/40 backdrop-blur-sm border border-gray-800 rounded-xl p-6 flex items-center gap-4 w-full md:w-auto">
              <Users size={24} className="text-purple-500" />
              <div>
                <h3 className="font-semibold">SaaS Companies</h3>
                <p className="text-sm text-gray-400">20% of our user base</p>
              </div>
            </div>
            <div className="bg-black/40 backdrop-blur-sm border border-gray-800 rounded-xl p-6 flex items-center gap-4 w-full md:w-auto">
              <Users size={24} className="text-purple-500" />
              <div>
                <h3 className="font-semibold">Enterprise</h3>
                <p className="text-sm text-gray-400">10% of our user base</p>
              </div>
            </div>
          </div>
        </section>

        <section className="space-y-8">
          <h2 className="text-2xl md:text-3xl font-semibold">Customer Reviews</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-black/40 backdrop-blur-sm border border-gray-800 rounded-xl p-6">
              <div className="flex items-center text-yellow-500 mb-4">
                <Star size={20} fill="currentColor" />
                <Star size={20} fill="currentColor" />
                <Star size={20} fill="currentColor" />
                <Star size={20} fill="currentColor" />
                <Star size={20} fill="currentColor" />
              </div>
              <p className="text-gray-300 mb-4">
                "DEVMAILS transformed our email deliverability. We went from 70% to 99% inbox placement overnight."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-purple-700 rounded-full flex items-center justify-center">
                  <span className="text-xs font-bold">AB</span>
                </div>
                <div>
                  <p className="font-semibold">NO ONE</p>
                  <p className="text-xs text-gray-400">CTO at TechStart</p>
                </div>
              </div>
            </div>
            <div className="bg-black/40 backdrop-blur-sm border border-gray-800 rounded-xl p-6">
              <div className="flex items-center text-yellow-500 mb-4">
                <Star size={20} fill="currentColor" />
                <Star size={20} fill="currentColor" />
                <Star size={20} fill="currentColor" />
                <Star size={20} fill="currentColor" />
                <Star size={20} fill="currentColor" />
              </div>
              <p className="text-gray-300 mb-4">
                "The API is so intuitive. I integrated DEVMAILS into our app in less than an hour. The documentation is outstanding."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-700 rounded-full flex items-center justify-center">
                  <span className="text-xs font-bold">SM</span>
                </div>
                <div>
                  <p className="font-semibold">NO ONE</p>
                  <p className="text-xs text-gray-400">Lead Developer at ShopStream</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </PageLayout>
  );
};

export default CompanyPage;
